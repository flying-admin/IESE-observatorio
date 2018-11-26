
var rosco1BParams;
var roscofoto3AParams;
var roscofoto3BParams;
var roscos_varios_1Params;

var animrosco1B;
var animroscofoto3A;
var animroscofoto3B;
var animroscos_varios_1;

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

  // rosco1B
  rosco1BParams = {
      container: document.getElementById('rosco1B'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'assets/javascript/custom/rosco1B.json'
  };

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
    $('#rosco1B').addClass('end_anim');
  }

  // roscofoto3A roscofoto3B
  roscofoto3AParams = {
      container: document.getElementById('roscofoto3A'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'assets/javascript/custom/roscofoto3A.json'
  };

  roscofoto3BParams = {
      container: document.getElementById('roscofoto3B'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'assets/javascript/custom/roscofoto3B.json'
  };

  if ( $('#roscofoto3A').closest('.fp_animate').length > 0 ) {

    $('#roscofoto3A').closest('.fp_animate').on('fp_anim', function(ev) {
      animroscofoto3A = lottie.loadAnimation(roscofoto3AParams);
      $('#roscofoto3A').addClass('end_anim');
      animroscofoto3B = lottie.loadAnimation(roscofoto3BParams);
      $('#roscofoto3B').addClass('end_anim');
    });

    if ( $('#roscofoto3A').closest('.fp_animate').is('.fp_animated') && !$('#roscofoto3A').is('.end_anim') ) {
      animroscofoto3A = lottie.loadAnimation(roscofoto3AParams);
      animroscofoto3B = lottie.loadAnimation(roscofoto3BParams);
      $('#roscofoto3A').addClass('end_anim');
      $('#roscofoto3B').addClass('end_anim');
    }

  } else if ($('#roscofoto3A').length > 0) {
    animroscofoto3A = lottie.loadAnimation(roscofoto3AParams);
    animroscofoto3B = lottie.loadAnimation(roscofoto3BParams);
    $('#roscofoto3A').addClass('end_anim');
    $('#roscofoto3B').addClass('end_anim');
  }

  // roscos_varios_1
  roscos_varios_1Params = {
      container: document.getElementById('roscos_varios_1'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'assets/javascript/custom/roscos_varios_1.json'
  };

  if ( $('#roscos_varios_1').closest('.fp_animate').length > 0 ) {
    $('#roscos_varios_1').closest('.fp_animate').on('fp_anim', function(ev){
      // setTimeout(function(){
        animroscos_varios_1 = lottie.loadAnimation(roscos_varios_1Params);
        $(this).addClass('end_anim');
      // }, 700);
    });

    if ( $('#roscos_varios_1').closest('.fp_animate').is('.fp_animated') && !$('#roscos_varios_1').is('.end_anim') ) {
      animroscos_varios_1 = lottie.loadAnimation(roscos_varios_1Params);
      $('#roscos_varios_1').addClass('end_anim');
    }
  } else if ($('#roscos_varios_1').length > 0) {
    animroscos_varios_1 = lottie.loadAnimation(roscos_varios_1Params);
    $('#roscos_varios_1').addClass('end_anim');
  }


});