
var rosco1AParams;
var roscos_varios_2Params;
var rosco2BParams;


var animrosco1A;
var animroscos_varios_2;
var animrosco2B;


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

  // rosco1A
  rosco1AParams = {
      container: document.getElementById('rosco1A'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'assets/javascript/custom/shapes/rosco1A.json'
  };

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
    $('#rosco1A').addClass('end_anim');
  }

  // roscos_varios_2
  roscos_varios_2Params = {
      container: document.getElementById('roscos_varios_2'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'assets/javascript/custom/shapes/roscos_varios_2.json'
  };

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
    setTimeout(function(){
      animroscos_varios_2 = lottie.loadAnimation(roscos_varios_2Params);
      $('#roscos_varios_2').addClass('end_anim');
    }, 700);
  }

  // rosco2B
  rosco2BParams = {
      container: document.getElementById('rosco2B'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'assets/javascript/custom/shapes/rosco2B.json'
  };

  if ( $('#rosco2B').closest('.fp_animate').length > 0 ) {
    $('#rosco2B').closest('.fp_animate').on('fp_anim', function(ev){
      animrosco2B = lottie.loadAnimation(rosco2BParams);
      $(this).addClass('end_anim');
    });

    if ( $('#rosco2B').closest('.fp_animate').is('.fp_animated') && !$('#rosco2B').is('.end_anim') ) {
      animrosco2B = lottie.loadAnimation(rosco2BParams);
      $('#rosco2B').addClass('end_anim');
    }
  } else if ($('#rosco2B').length > 0) {
    animrosco2B = lottie.loadAnimation(rosco2BParams);
    $('#rosco2B').addClass('end_anim');
  }

});
