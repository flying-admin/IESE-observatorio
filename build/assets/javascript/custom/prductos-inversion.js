
var windowWidth = $(window).width();

var stats_verticalParams;
var num87Params;

var animstats_vertical;
var animnum87;

var statsVBar;

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

  // num87
  num87Params = {
      container: document.getElementById('num87'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'assets/javascript/custom/shapes/num87.json'
  };

  if ( $('#num87').closest('.fp_animate').length > 0 ) {
    $('#num87').closest('.fp_animate').on('fp_anim', function(ev){
      setTimeout(function(){
        animnum87 = lottie.loadAnimation(num87Params);
        $(this).addClass('end_anim');
      }, 700);
    });

    if ( $('#num87').closest('.fp_animate').is('.fp_animated') && !$('#num87').is('.end_anim') ) {
      animnum87 = lottie.loadAnimation(num87Params);
      $('#num87').addClass('end_anim');
    }
  } else if ($('#num87').length > 0) {
    animnum87 = lottie.loadAnimation(num87Params);
    $('#num87').addClass('end_anim');
  }

  // stats_vertical
  stats_verticalParams = {
      container: document.getElementById('stats_vertical'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'assets/javascript/custom/shapes/stats_vertical.json'
  };

  if ( $('#stats_vertical').closest('.fp_animate').length > 0 ) {
    $('#stats_vertical').closest('.fp_animate').on('fp_anim', function(ev){
      animstats_vertical = lottie.loadAnimation(stats_verticalParams);
      $(this).addClass('end_anim');
      if ( $(window).width() < 991) {
        setTimeout(function(){
          statsVBar = new SimpleBar($('#stats_vertical')[0], { autoHide: false });
        }, 750);
      }
    });

    if ( $('#stats_vertical').closest('.fp_animate').is('.fp_animated') && !$('#stats_vertical').is('.end_anim') ) {
      animstats_vertical = lottie.loadAnimation(stats_verticalParams);
      $('#stats_vertical').addClass('end_anim');
      if ( $(window).width() < 991) {
        setTimeout(function(){
          statsVBar = new SimpleBar($('#stats_vertical')[0], { autoHide: false });
        }, 750);
      }
    }
  } else if ($('#stats_vertical').length > 0) {
    animstats_vertical = lottie.loadAnimation(stats_verticalParams);
    $('#stats_vertical').addClass('end_anim');
    if ( 0 && $(window).width() < 991) {
      setTimeout(function(){
        statsVBar = new SimpleBar($('#stats_vertical')[0], { autoHide: false });
      }, 750);
    }
  }

});

$(document).ready(function($) {

  $(window).resize(function(){

    if($(window).width() != windowWidth) {

      windowWidth = $(window).width();

      $('.end_anim').each(function() {

        if ($(this).is('#stats_vertical')) {
          $(this).empty();
          animstats_vertical = lottie.loadAnimation(stats_verticalParams).play();
          statsVBar = new SimpleBar($('#stats_vertical')[0], { autoHide: false });
          statsVBar.recalculate();
          setTimeout(function(){
            if ( $(window).width() < 991) {
              statsVBar = new SimpleBar($('#stats_vertical')[0], { autoHide: false });
            }
          }, 750);
        }

      });
    }
  });
});
