

var targetElement = $(".mobile_menu");
var isValid,legalChecked;
var pdfData = {};
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
function checkValidations() {
  var downloadContentEl = $('.download_content_form .btn').closest('.download_content');
  var error = $('.error');

  if (isValid && legalChecked) {
    togglePDFUrl(true)
    $('.error').hide();
  } else if (!isValid) {
    var errorMsg = error.data('mail-error');
    error.text(errorMsg).show();
    togglePDFUrl(false)
  } else if (!legalChecked) {
    var errorMsg = error.data('legal-error');
    error.text(errorMsg).show();
    togglePDFUrl(false)
  }
}

function togglePDFUrl(bool) {
  var btnIos = $('.btnIOS')
  if(bool) {
    btnIos.attr('href', href='https://www.bestinver.es/wp-content/uploads/observatorio_ahorro_inversion_2018.pdf')
    btnIos.attr('target', '_blank')
  } else {
    btnIos.attr('href', null)
    btnIos.attr('target', null)
  }
}

function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++)
  {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam)
    {
      return sParameterName[1];
    }
  }
}


$(window).on("load", function() {

  if(!window.location.hash) {
    // Scroll to top
    $('html, body').animate({
      scrollTop: 0
    }, 10, function(){});
  }

  $('.btn_menu_mobile').on('click', function(ev) {
    $(this).toggleClass('open');
    $('.mobile_menu_overlay').toggleClass('open');
    $('.mobile_menu').toggleClass('open');
    $('body').toggleClass('no-scroll');
    if(!$('.mobile_menu').is('.open')) {
      $('.mobile_menu_content').fadeOut('fast');
      bodyScrollLock.enableBodyScroll(targetElement);
    } else {
      setTimeout(function(){
        $('.mobile_menu_content').fadeIn();
        bodyScrollLock.disableBodyScroll(targetElement);
      }, 500);
    }
  });


  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+(com|org|net|int|edu|es)))$/;
    return re.test(email);
  }

  function generatePDF(downloadContentEl) {
    var oReq = new XMLHttpRequest();

    // The Endpoint of your server
    var URLToPDF = "https://www.bestinver.es/wp-content/uploads/observatorio_ahorro_inversion_2018.pdf";

    // Configure XMLHttpRequest
    oReq.open("GET", URLToPDF, true);

    // Important to use the blob response type
    oReq.responseType = "blob";

    // When the file request finishes
    // Is up to you, the configuration for error events etc.
    oReq.onload = function() {
      // Once the file is downloaded, open a new window with the PDF
      // Remember to allow the POP-UPS in your browser
      var file = new Blob([oReq.response], {
          type: 'application/pdf'
      });

      // Generate file download directly in the browser !
      saveAs(file, "observatorio_ahorro_inversion_2018.pdf");
      downloadContentEl.find('.loading').hide();
    };

    oReq.onerror = function() {
      downloadContentEl.find('.loading').hide();
    };

    oReq.send();
  }

  var emailInput = document.querySelector('#email')

  var legalInput = document.querySelector('#check-legal')
  legalInput.addEventListener('change', function(ev) {
    legalChecked = $(".download_content #check-legal").is(':checked');
    checkValidations();
  });

  $('#email').blur(function(ev) {
    isValid = validateEmail(ev.currentTarget.value);
    checkValidations();
  });

  $('#check-legal').blur(function(ev) {
    legalChecked = $(".download_content #check-legal").is(':checked');
    checkValidations();
  });

  $('.download_content_form .btn').on('click', function(ev) {
    ev.preventDefault();

    var downloadContentEl = $(this).closest('.download_content');
    downloadContentEl.find('.error').text('').hide();
    var email = $(".download_content_form .download_content_form_input").val();
    var isValid = validateEmail(email);
    var legalChecked = $(".download_content #check-legal").is(':checked');


    if ( legalChecked ) {
      if( isValid ) {
        downloadContentEl.find('.loading').show();

        var utm_campaign = '';
        var utm_medium = '';
        var utm_source = '';
        var utm_content = '';

        if (GetURLParameter('utm_campaign') != undefined) {
          utm_campaign = GetURLParameter('utm_campaign');
        }

        if (GetURLParameter('utm_medium') != undefined) {
          utm_medium = GetURLParameter('utm_medium');
        }

        if (GetURLParameter('utm_source') != undefined) {
          utm_source = GetURLParameter('utm_source');
        }

        if (GetURLParameter('utm_content') != undefined) {
          utm_content = GetURLParameter('utm_content');
        }

        pdfData.cusCIFNIF = '';
        pdfData.firstName = $('.download_content_form .download_content_form_input').val();
        pdfData.lastName = "Observatorio2018";
        pdfData.email = $('.download_content_form .download_content_form_input').val();
        pdfData.cusEstadoCliente = "Prospect";
        pdfData.cusOrigen = "MKT";
        pdfData.cusOrigenDetalle = "Observatorio|Observatorio ahorro e inversion 2018|"+utm_campaign+"|"+utm_medium+"|"+utm_source+"|"+utm_content;

        generatePDF(downloadContentEl);

        $.ajax({
          method: 'POST',
          dataType: "json",
          contentType: "application/json",
          url: "https://bstnvr.westeurope.cloudapp.azure.com/MICROCAMPAIGN/api/Campaigns/clientprospect",
          data: JSON.stringify(pdfData),
          success: function(result, status, jqXHR) {
            DigitalData.push({'event':'event' ,'eventCategory':'descarga pdf','eventAction':'observatorio-del-ahorro-y-la-inversion.pdf','eventLabel':'<%= page_name %>'})
          },
          error: function(jqXHR, textStatus, errorThrown) {
            // var errorMsg = downloadContentEl.find('.error').data('ajax-error');
            // downloadContentEl.find('.error').text(errorMsg).show();
          }
        });
      } else {
        var errorMsg = downloadContentEl.find('.error').data('mail-error');
        downloadContentEl.find('.error').text(errorMsg).show();
      }
    } else {
      var errorMsg = downloadContentEl.find('.error').data('legal-error');
      downloadContentEl.find('.error').text(errorMsg).show();
    }

  });
});



$(document).ready(function($) {

  if (iOS) {
    var button = $("<a class='btnIOS'>Descargar</a>");
    $('.download_content_form_input').after(button);
    button.on('click', function() {
      checkValidations();
      if (isValid && legalChecked) {

        var utm_campaign = '';
        var utm_medium = '';
        var utm_source = '';
        var utm_content = '';

        if (GetURLParameter('utm_campaign') != undefined) {
          utm_campaign = GetURLParameter('utm_campaign');
        }

        if (GetURLParameter('utm_medium') != undefined) {
          utm_medium = GetURLParameter('utm_medium');
        }

        if (GetURLParameter('utm_source') != undefined) {
          utm_source = GetURLParameter('utm_source');
        }

        if (GetURLParameter('utm_content') != undefined) {
          utm_content = GetURLParameter('utm_content');
        }

        pdfData.cusCIFNIF = '';
        pdfData.firstName = $('.download_content_form .download_content_form_input').val();
        pdfData.lastName = "Observatorio2018";
        pdfData.email = $('.download_content_form .download_content_form_input').val();
        pdfData.cusEstadoCliente = "Prospect";
        pdfData.cusOrigen = "MKT";
        pdfData.cusOrigenDetalle = "Observatorio|Observatorio ahorro e inversion 2018|"+utm_campaign+"|"+utm_medium+"|"+utm_source+"|"+utm_content;

        $.ajax({
          method: 'POST',
          dataType: "json",
          contentType: "application/json",
          url: "https://bstnvr.westeurope.cloudapp.azure.com/MICROCAMPAIGN/api/Campaigns/clientprospect",
          data: JSON.stringify(pdfData),
          success: function(result, status, jqXHR) {
            DigitalData.push({'event':'event' ,'eventCategory':'descarga pdf','eventAction':'observatorio-del-ahorro-y-la-inversion.pdf','eventLabel':'<%= page_name %>'})
          },
          error: function(jqXHR, textStatus, errorThrown) {
            // var errorMsg = $('.error').data('ajax-error');
            // $('.error').text(errorMsg).show();
          }
        });
      }
    });
  } else {
    var button = $("<input type='submit' name='download' value='descargar' class='btn'/>");
    $('.download_content_form_input').after(button);
  }
});


$(window).on("scroll", function(){
  var scrollY = $(this).scrollTop();

  var header = $('.header');
  var headerOffset = 0;
  if (scrollY > headerOffset && !header.hasClass('header_sticky')){
    header.addClass('header_sticky');
  }
  else if(scrollY <= headerOffset && header.hasClass('header_sticky')) {
    header.removeClass('header_sticky');
  }
});
