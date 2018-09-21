$(function(){
  // Set transition times for custom transition animated elements
  $('.fp_animate--transition-custom').each(function(){
    var trans = $(this).data('transition-custom');
    this.style.setProperty( '-webkit-transition', 'visibility '+trans+'s ease-out 0s, opacity '+trans+'s ease-out 0s, -webkit-transform '+trans+'s ease-out 0s', 'important' );
    this.style.setProperty( '-moz-transition', 'visibility '+trans+'s ease-out 0s, opacity '+trans+'s ease-out 0s, -moz-transform '+trans+'s ease-out 0s', 'important' );
    this.style.setProperty( '-ms-transition', 'visibility '+trans+'s ease-out 0s, opacity '+trans+'s ease-out 0s, -ms-transform '+trans+'s ease-out 0s', 'important' );
    this.style.setProperty( '-o-transition', 'visibility '+trans+'s ease-out 0s, opacity '+trans+'s ease-out 0s, -o-transform '+trans+'s ease-out 0s', 'important' );
    this.style.setProperty( 'transition', 'visibility '+trans+'s ease-out 0s, opacity '+trans+'s ease-out 0s, transform '+trans+'s ease-out 0s', 'important' );
  });
});

$(window).on('load', function(){
  // Execute handler on Load
  animationHandler();
});

$(window).on('scroll', function(){
  // Execute handler on Scroll
  animationHandler();
});

// Scroll Animations Handler
function animationHandler(){
  if($('.fp_animate').length > 0){
    var windowBottom=$(window).scrollTop() + $(window).height();
    $('.fp_animate--top-in').each(function(){
      var thisItemTrigger=$(this).offset().top;
      if(thisItemTrigger <= windowBottom && !$(this).hasClass('fp_animated')){
        $(this).addClass('fp_animated');
        $(this).trigger('fp_anim');
      }
    });
    $('.fp_animate--bottom-in').each(function(){
      var thisItemTrigger=$(this).offset().top + $(this).height();
      if(thisItemTrigger <= windowBottom && !$(this).hasClass('fp_animated')){
        $(this).addClass('fp_animated');
        $(this).trigger('fp_anim');
      }
    });
    $('.fp_animate--middle-in').each(function(){
      var thisItemTrigger=$(this).offset().top + (0.5 * $(this).height());
      if(thisItemTrigger <= windowBottom && !$(this).hasClass('fp_animated')){
        $(this).addClass('fp_animated');
        $(this).trigger('fp_anim');
      }
    });
    $('.fp_animate--top-quarter-in').each(function(){
      var thisItemTrigger=$(this).offset().top + (0.25 * $(this).height());
      if(thisItemTrigger <= windowBottom && !$(this).hasClass('fp_animated')){
        $(this).addClass('fp_animated');
        $(this).trigger('fp_anim');
      }
    });
    $('.fp_animate--bottom-quarter-in').each(function(){
      var thisItemTrigger=$(this).offset().top + (0.75 * $(this).height());
      if(thisItemTrigger <= windowBottom && !$(this).hasClass('fp_animated')){
        $(this).addClass('fp_animated');
        $(this).trigger('fp_anim');
      }
    });
    $('.fp_animate--top-third-in').each(function(){
      var thisItemTrigger=$(this).offset().top + (0.34 * $(this).height());
      if(thisItemTrigger <= windowBottom && !$(this).hasClass('fp_animated')){
        $(this).addClass('fp_animated');
        $(this).trigger('fp_anim');
      }
    });
    $('.fp_animate--bottom-third-in').each(function(){
      var thisItemTrigger=$(this).offset().top + (0.67 * $(this).height());
      if(thisItemTrigger <= windowBottom && !$(this).hasClass('fp_animated')){
        $(this).addClass('fp_animated');
        $(this).trigger('fp_anim');
      }
    });
    $('.fp_animate--top-eighth-in').each(function(){
      var thisItemTrigger=$(this).offset().top + (0.125 * $(this).height());
      if(thisItemTrigger <= windowBottom && !$(this).hasClass('fp_animated')){
        $(this).addClass('fp_animated');
        $(this).trigger('fp_anim');
      }
    });
    $('.fp_animate--bottom-eighth-in').each(function(){
      var thisItemTrigger=$(this).offset().top + (0.875 * $(this).height());
      if(thisItemTrigger <= windowBottom && !$(this).hasClass('fp_animated')){
        $(this).addClass('fp_animated');
        $(this).trigger('fp_anim');
      }
    });

  }
}