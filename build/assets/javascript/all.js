var Project = {};

Project.init = function(){
  
};

$(document).on("ready", function(){
  Project.init();
});

$(window).on("load", function(){

  // Socialize
  $('[data-socialize]').socialize();

  $(document).on('click', function(ev) {
    if( !$(ev.target).closest('.btn-share').length ) {
      $('.share_wrap.show').removeClass('show');
    } else {
      $(ev.target).closest('.btn-share').find('.share_wrap').addClass('show');
    }
  });

  $('.btn_menu_mobile').on('click', function(ev) {
    $(this).toggleClass('open');
    $('.mobile_menu_overlay').toggleClass('open');
    $('.mobile_menu').toggleClass('open');
  });


  // Animación

  // rosco1A
  var rosco1AParams = {
      container: document.getElementById('rosco1A'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: rosco1A
  };
  var animrosco1A;

  if ( $('#rosco1A').closest('.fp_animate').length > 0 ) {
    $('#rosco1A').closest('.fp_animate').on('fp_anim', function(ev){
      setTimeout(function(){
        animrosco1A = lottie.loadAnimation(rosco1AParams);
        $(this).addClass('end_anim');
      }, 700);
    });

    if ( $('#rosco1A').closest('.fp_animate').is('.fp_animated') && !$('#rosco1A').is('.end_anim') ) {
      animrosco1A = lottie.loadAnimation(rosco1AParams);
      $('#rosco1A').addClass('end_anim');
    }
  } else if ($('#rosco1A').length > 0) {
    animrosco1A = lottie.loadAnimation(rosco1AParams);
  }

  // rosco1B
  var rosco1BParams = {
      container: document.getElementById('rosco1B'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: rosco1B
  };
  var animrosco1B;

  if ( $('#rosco1B').closest('.fp_animate').length > 0 ) {
    $('#rosco1B').closest('.fp_animate').on('fp_anim', function(ev){
      setTimeout(function(){
        animrosco1B = lottie.loadAnimation(rosco1BParams);
        $(this).addClass('end_anim');
      }, 700);
    });

    if ( $('#rosco1B').closest('.fp_animate').is('.fp_animated') && !$('#rosco1B').is('.end_anim') ) {
      animrosco1B = lottie.loadAnimation(rosco1BParams);
      $('#rosco1B').addClass('end_anim');
    }
  } else if ($('#rosco1B').length > 0) {
    animrosco1B = lottie.loadAnimation(rosco1BParams);
  }

  // stats_vertical
  var stats_verticalParams = {
      container: document.getElementById('stats_vertical'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: stats_vertical
  };
  var animstats_vertical;

  if ( $('#stats_vertical').closest('.fp_animate').length > 0 ) {
    $('#stats_vertical').closest('.fp_animate').on('fp_anim', function(ev){
      setTimeout(function(){
        animstats_vertical = lottie.loadAnimation(stats_verticalParams);
        $(this).addClass('end_anim');
      }, 700);
    });

    if ( $('#stats_vertical').closest('.fp_animate').is('.fp_animated') && !$('#stats_vertical').is('.end_anim') ) {
      animstats_vertical = lottie.loadAnimation(stats_verticalParams);
      $('#stats_vertical').addClass('end_anim');
    }
  } else if ($('#stats_vertical').length > 0) {
    animstats_vertical = lottie.loadAnimation(stats_verticalParams);
  }

  // roscos_varios_1
  var roscos_varios_1Params = {
      container: document.getElementById('roscos_varios_1'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: roscos_varios_1
  };
  var animroscos_varios_1;

  if ( $('#roscos_varios_1').closest('.fp_animate').length > 0 ) {
    $('#roscos_varios_1').closest('.fp_animate').on('fp_anim', function(ev){
      setTimeout(function(){
        animroscos_varios_1 = lottie.loadAnimation(roscos_varios_1Params);
        $(this).addClass('end_anim');
      }, 700);
    });

    if ( $('#roscos_varios_1').closest('.fp_animate').is('.fp_animated') && !$('#roscos_varios_1').is('.end_anim') ) {
      animroscos_varios_1 = lottie.loadAnimation(roscos_varios_1Params);
      $('#roscos_varios_1').addClass('end_anim');
    }
  } else if ($('#roscos_varios_1').length > 0) {
    animroscos_varios_1 = lottie.loadAnimation(roscos_varios_1Params);
  }

  // roscos_varios_2
  var roscos_varios_2Params = {
      container: document.getElementById('roscos_varios_2'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: roscos_varios_2
  };
  var animroscos_varios_2;

  if ( $('#roscos_varios_2').closest('.fp_animate').length > 0 ) {
    $('#roscos_varios_2').closest('.fp_animate').on('fp_anim', function(ev){
      setTimeout(function(){
        animroscos_varios_2 = lottie.loadAnimation(roscos_varios_2Params);
        $(this).addClass('end_anim');
      }, 700);
    });

    if ( $('#roscos_varios_2').closest('.fp_animate').is('.fp_animated') && !$('#roscos_varios_2').is('.end_anim') ) {
      animroscos_varios_2 = lottie.loadAnimation(roscos_varios_2Params);
      $('#roscos_varios_2').addClass('end_anim');
    }
  } else if ($('#roscos_varios_2').length > 0) {
    animroscos_varios_2 = lottie.loadAnimation(roscos_varios_2Params);
  }

  // roscos_varios_3
  var roscos_varios_3Params = {
      container: document.getElementById('roscos_varios_3'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: roscos_varios_3
  };
  var animroscos_varios_3;

  if ( $('#roscos_varios_3').closest('.fp_animate').length > 0 ) {
    $('#roscos_varios_3').closest('.fp_animate').on('fp_anim', function(ev){
      setTimeout(function(){
        animroscos_varios_3 = lottie.loadAnimation(roscos_varios_3Params);
        $(this).addClass('end_anim');
      }, 700);
    });

    if ( $('#roscos_varios_3').closest('.fp_animate').is('.fp_animated') && !$('#roscos_varios_3').is('.end_anim') ) {
      animroscos_varios_3 = lottie.loadAnimation(roscos_varios_3Params);
      $('#roscos_varios_3').addClass('end_anim');
    }
  } else if ($('#roscos_varios_3').length > 0) {
    animroscos_varios_3 = lottie.loadAnimation(roscos_varios_3Params);
  }

  // rosco2B
  var rosco2BParams = {
      container: document.getElementById('rosco2B'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: rosco2B
  };
  var animrosco2B;

  if ( $('#rosco2B').closest('.fp_animate').length > 0 ) {
    $('#rosco2B').closest('.fp_animate').on('fp_anim', function(ev){
      setTimeout(function(){
        animrosco2B = lottie.loadAnimation(rosco2BParams);
        $(this).addClass('end_anim');
      }, 700);
    });

    if ( $('#rosco2B').closest('.fp_animate').is('.fp_animated') && !$('#rosco2B').is('.end_anim') ) {
      animrosco2B = lottie.loadAnimation(rosco2BParams);
      $('#rosco2B').addClass('end_anim');
    }
  } else if ($('#rosco2B').length > 0) {
    animrosco2B = lottie.loadAnimation(rosco2BParams);
  }

  // stats_horizontal
  var stats_horizontalParams = {
      container: document.getElementById('stats_horizontal'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: stats_horizontal
  };
  var animstats_horizontal;

  if ( $('#stats_horizontal').closest('.fp_animate').length > 0 ) {
    $('#stats_horizontal').closest('.fp_animate').on('fp_anim', function(ev){
      setTimeout(function(){
        animstats_horizontal = lottie.loadAnimation(stats_horizontalParams);
        $(this).addClass('end_anim');
      }, 700);
    });

    if ( $('#stats_horizontal').closest('.fp_animate').is('.fp_animated') && !$('#stats_horizontal').is('.end_anim') ) {
      animstats_horizontal = lottie.loadAnimation(stats_horizontalParams);
      $('#stats_horizontal').addClass('end_anim');
    }
  } else if ($('#stats_horizontal').length > 0) {
    animstats_horizontal = lottie.loadAnimation(stats_horizontalParams);
  }

  // roscofoto2A
  var roscofoto2AParams = {
      container: document.getElementById('roscofoto2A'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: roscofoto2A
  };
  var animroscofoto2A;

  if ( $('#roscofoto2A').closest('.fp_animate').length > 0 ) {
    $('#roscofoto2A').closest('.fp_animate').on('fp_anim', function(ev){
      setTimeout(function(){
        animroscofoto2A = lottie.loadAnimation(roscofoto2AParams);
        $(this).addClass('end_anim');
      }, 700);
    });

    if ( $('#roscofoto2A').closest('.fp_animate').is('.fp_animated') && !$('#roscofoto2A').is('.end_anim') ) {
      animroscofoto2A = lottie.loadAnimation(roscofoto2AParams);
      $('#roscofoto2A').addClass('end_anim');
    }
  } else if ($('#roscofoto2A').length > 0) {
    animroscofoto2A = lottie.loadAnimation(roscofoto2AParams);
  }

  // roscofoto3A
  var roscofoto3AParams = {
      container: document.getElementById('roscofoto3A'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: roscofoto3A
  };
  var animroscofoto3A;

  if ( $('#roscofoto3A').closest('.fp_animate').length > 0 ) {
    $('#roscofoto3A').closest('.fp_animate').on('fp_anim', function(ev){
      setTimeout(function(){
        animroscofoto3A = lottie.loadAnimation(roscofoto3AParams);
        $(this).addClass('end_anim');
      }, 700);
    });

    if ( $('#roscofoto3A').closest('.fp_animate').is('.fp_animated') && !$('#roscofoto3A').is('.end_anim') ) {
      animroscofoto3A = lottie.loadAnimation(roscofoto3AParams);
      $('#roscofoto3A').addClass('end_anim');
    }
  } else if ($('#roscofoto3A').length > 0) {
    animroscofoto3A = lottie.loadAnimation(roscofoto3AParams);
  }

  // roscofoto3B
  var roscofoto3BParams = {
      container: document.getElementById('roscofoto3B'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: roscofoto3B
  };
  var animroscofoto3B;

  if ( $('#roscofoto3B').closest('.fp_animate').length > 0 ) {
    $('#roscofoto3B').closest('.fp_animate').on('fp_anim', function(ev){
      setTimeout(function(){
        animroscofoto3B = lottie.loadAnimation(roscofoto3BParams);
        $(this).addClass('end_anim');
      }, 700);
    });

    if ( $('#roscofoto3B').closest('.fp_animate').is('.fp_animated') && !$('#roscofoto3B').is('.end_anim') ) {
      animroscofoto3B = lottie.loadAnimation(roscofoto3BParams);
      $('#roscofoto3B').addClass('end_anim');
    }
  } else if ($('#roscofoto3B').length > 0) {
    animroscofoto3B = lottie.loadAnimation(roscofoto3BParams);
  }


  // PDF

  var pdfData = {};
  $('.download_content_form .btn').on('click', function(ev) {
    ev.preventDefault();
    pdfData.email = $('.download_content_form .download_content_form_input').val();
    pdfData.cusEstadoCliente = "Prospect";
    pdfData.cusOrigen = "MKT";
    console.log(pdfData.email);
    $.ajax({
      method: 'POST',
      'dataType': "jsonp",
      "crossDomain": true,
      "headers": {
        "accept": "application/json",
        "Access-Control-Allow-Origin":"*"
      },
      url: "https://bstnvr.westeurope.cloudapp.azure.com/MICROCAMPAIGN/api/Campaigns/clientprospect",
      statusCode: {
        200: function() {
          console.log('working');
        }
      },
      data: pdfData
    });
  });
});

$(window).on("resize", function(){
 
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
