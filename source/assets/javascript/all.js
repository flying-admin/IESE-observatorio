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

  

  var barr1Params = {
        container: document.getElementById('barr1Anim'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: barr1
    };
  var animBarr1;

  $('#barr1Anim').closest('.fp_animate').on('fp_anim', function(ev){
    setTimeout(function(){
      animBarr1 = lottie.loadAnimation(barr1Params);
    }, 700);
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
