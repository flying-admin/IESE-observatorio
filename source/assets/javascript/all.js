var Project = {};

Project.init = function(){
  
};

$(document).on("ready", function(){
  Project.init();
});

$(window).on("load", function(){
  $('[data-socialize]').socialize();

  $(document).on('click', function(ev) {
    if( !$(ev.target).closest('.btn-share').length ) {
      $('.share_wrap.show').removeClass('show');
    } else {
      $(ev.target).closest('.btn-share').find('.share_wrap').addClass('show');
    }
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
