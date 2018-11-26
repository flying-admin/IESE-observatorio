
var windowWidth = $(window).width();


var num78Params;
var stats_horizontalParams;
var roscos_varios_3Params;
var roscofoto2AParams;

var animnum78;
var animstats_horizontal;
var animroscos_varios_3;
var animroscofoto2A;

var statsHBar


$(window).on("load", function() {

  // Socialize
  $('[data-socialize]').socialize();

  $(document).on('click', function(ev) {
    if( !$(ev.target).closest('.btn-share').length ) {
      $('.share_wrap.show').removeClass('show');
    } else {
      $(ev.target).closest('.btn-share').find('.share_wrap').addClass('show');
    }
  });


  // Animations

  // num78
  num78Params = {
      container: document.getElementById('num78'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'assets/javascript/custom/shapes/num78.json'
  };

  if ( $('#num78').closest('.fp_animate').length > 0 ) {
    $('#num78').closest('.fp_animate').on('fp_anim', function(ev){
      setTimeout(function(){
        animnum78 = lottie.loadAnimation(num78Params);
        $(this).addClass('end_anim');
      }, 700);
    });

    if ( $('#num78').closest('.fp_animate').is('.fp_animated') && !$('#num78').is('.end_anim') ) {
      animnum78 = lottie.loadAnimation(num78Params);
      $('#num78').addClass('end_anim');
    }
  } else if ($('#num78').length > 0) {
    animnum78 = lottie.loadAnimation(num78Params);
    $('#num78').addClass('end_anim');
  }

  // stats_horizontal
  stats_horizontalParams = {
      container: document.getElementById('stats_horizontal'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'assets/javascript/custom/shapes/stats_horizontal.json'
  };

  if ( $('#stats_horizontal').closest('.fp_animate').length > 0 ) {
    $('#stats_horizontal').closest('.fp_animate').on('fp_anim', function(ev){
      animstats_horizontal = lottie.loadAnimation(stats_horizontalParams);
      $(this).addClass('end_anim');
      if ( $(window).width() < 768) {
        setTimeout(function(){
          statsHBar = new SimpleBar($('#stats_horizontal')[0], { autoHide: false });
        }, 750);
      }
    });

    if ( $('#stats_horizontal').closest('.fp_animate').is('.fp_animated') && !$('#stats_horizontal').is('.end_anim') ) {
      animstats_horizontal = lottie.loadAnimation(stats_horizontalParams);
      $('#stats_horizontal').addClass('end_anim');
      if ( $(window).width() < 768) {
        setTimeout(function(){
          statsHBar = new SimpleBar($('#stats_horizontal')[0], { autoHide: false });
        }, 750);
      }
    }
  } else if ($('#stats_horizontal').length > 0) {
    animstats_horizontal = lottie.loadAnimation(stats_horizontalParams);
    if ( $(window).width() < 768) {
      setTimeout(function(){
        statsHBar = new SimpleBar($('#stats_horizontal')[0], { autoHide: false });
      }, 750);
      $('#stats_horizontal').addClass('end_anim');
    }
  }

  // roscos_varios_3
  roscos_varios_3Params = {
      container: document.getElementById('roscos_varios_3'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'assets/javascript/custom/shapes/roscos_varios_3.json'
  };

  if ( $('#roscos_varios_3').closest('.fp_animate').length > 0 ) {
    $('#roscos_varios_3').closest('.fp_animate').on('fp_anim', function(ev){
      // setTimeout(function(){
        animroscos_varios_3 = lottie.loadAnimation(roscos_varios_3Params);
        $(this).addClass('end_anim');
      // }, 700);
    });

    if ( $('#roscos_varios_3').closest('.fp_animate').is('.fp_animated') && !$('#roscos_varios_3').is('.end_anim') ) {
      animroscos_varios_3 = lottie.loadAnimation(roscos_varios_3Params);
      $('#roscos_varios_3').addClass('end_anim');
    }
  } else if ($('#roscos_varios_3').length > 0) {
    animroscos_varios_3 = lottie.loadAnimation(roscos_varios_3Params);
    $('#roscos_varios_3').addClass('end_anim');
  }

  // roscofoto2A
  roscofoto2AParams = {
      container: document.getElementById('roscofoto2A'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'assets/javascript/custom/shapes/roscofoto2A.json'
  };

  if ( $('#roscofoto2A').closest('.fp_animate').length > 0 ) {
    $('#roscofoto2A').closest('.fp_animate').on('fp_anim', function(ev){
      animroscofoto2A = lottie.loadAnimation(roscofoto2AParams);
      $(this).addClass('end_anim');
    });

    if ( $('#roscofoto2A').closest('.fp_animate').is('.fp_animated') && !$('#roscofoto2A').is('.end_anim') ) {
      animroscofoto2A = lottie.loadAnimation(roscofoto2AParams);
      $('#roscofoto2A').addClass('end_anim');
    }
  } else if ($('#roscofoto2A').length > 0) {
    animroscofoto2A = lottie.loadAnimation(roscofoto2AParams);
    $('#roscofoto2A').addClass('end_anim');
  }

});


$(document).ready(function($) {

  $(window).resize(function(){

    if($(window).width() != windowWidth){

      windowWidth = $(window).width();

      $('.end_anim').each(function(){

        if ($(this).is('#stats_horizontal')) {
          $(this).empty();
          animstats_horizontal = lottie.loadAnimation(stats_horizontalParams).play();
          statsHBar = new SimpleBar($('#stats_horizontal')[0], { autoHide: false });
          statsHBar.recalculate();
          setTimeout(function(){
            if ( $(window).width() < 768) {
              statsHBar = new SimpleBar($('#stats_horizontal')[0], { autoHide: false });
            }
          }, 750);
        }

      });
    }
  });
});