var Project = {};

Project.init = function(){
  
};

$(document).on("ready", function(){
  Project.init();
});


  var rosco1AParams;
  var rosco1BParams;
  var stats_verticalParams;
  var roscos_varios_1Params;
  var roscos_varios_2Params;
  var roscos_varios_3Params;
  var rosco2BParams;
  var stats_horizontalParams;
  var roscofoto2AParams;
  var roscofoto3AParams;
  var roscofoto3BParams;
  var num78Params;
  var num87Params;
  var num87homeParams;
  var rosco1AhomeParams;
  var num78homeParams;
  var rosco1BhomeParams;

  var animrosco1A;
  var animrosco1B;
  var animstats_vertical;
  var animroscos_varios_1;
  var animroscos_varios_2;
  var animroscos_varios_3;
  var animrosco2B;
  var animstats_horizontal;
  var animroscofoto2A;
  var animroscofoto3A;
  var animroscofoto3B;
  var animnum78;
  var animnum87;
  var animnum87home;
  var rosco1Ahome;
  var animnum78home;
  var rosco1Bhome;

  var statsVBar
  var statsHBar



$(window).on("load", function(){

  if(!window.location.hash) {
    // Scroll to top
    $('html, body').animate({
      scrollTop: 0
    }, 10, function(){});
  }

  // Hero vídeo
  if ( $('.hero_home').length > 0 ) {
    setTimeout(function(){
      $('header').removeClass('header-home');
    }, 200);
    setTimeout(function(){
      $('.hero_home .hero_home_bg').fadeIn(500, function(){
        $('.hero_home .page_title').fadeIn(500);

      });
    }, 1000);
  }
  
  // Menu scroll
  $('[data-scroll]').on('click', function(ev) {
    ev.preventDefault();
    var headerOffset = $('header.header').height();
    var target = $($(this).data('scroll'));
    var offsetTop = parseInt($($(this).data('offsettop'))[0]) > 0 ? parseInt($($(this).data('offsettop'))[0]) : 0;

    var distance = target.offset().top - headerOffset - offsetTop;

    if (navigator.userAgent.match(/iPad|iPhone|iPod|Android|Windows Phone/i)) {  
      function customScrollTo(to, duration) {
          var start = 0,
              change = to - start,
              currentTime = 0,
              increment = 20;

          var animateScroll = function(){        
              currentTime += increment;
              var val = Math.easeInOutQuad(currentTime, start, change, duration);                        
              window.scrollTo(0,val);

              if(currentTime < duration) {
                  setTimeout(animateScroll, increment);
              }
          };
          animateScroll();
      }

      Math.easeInOutQuad = function (t, b, c, d) {
          t /= d/2;
          if (t < 1) return c/2*t*t + b;
          t--;
          return -c/2 * (t*(t-2) - 1) + b;
      };

      customScrollTo(distance + 1, 1000);
    } else {
      $('html').animate({
          scrollTop: distance + 1
      }, 1000, function(){
        var findAnim = target.find('.svg_anim');
        var idAnim = findAnim.attr('id');
        if ( !findAnim.is('.end_anim') ) {
          if ( idAnim == 'num87home' ) {
            animnum87home = lottie.loadAnimation(num87homeParams);
            $('#num87home').addClass('end_anim');
            $('#num87home').fadeIn('slow', function() {
              animnum87home.play();
            });
          } else if ( idAnim == 'rosco1Ahome' ) {
            rosco1Ahome = lottie.loadAnimation(rosco1AhomeParams);
            $('#rosco1Ahome').addClass('end_anim');
            $('#rosco1Ahome').fadeIn('slow', function() {
              rosco1Ahome.play();
            });
          } else if ( idAnim == 'num78home' ) {
            animnum78home = lottie.loadAnimation(num78homeParams);
            $('#num78home').addClass('end_anim');
            $('#num78home').fadeIn('slow', function() {
              animnum78home.play();
            });
          } else if ( idAnim == 'rosco1Bhome' ) {
            rosco1Bhome = lottie.loadAnimation(rosco1BhomeParams);
            $('#rosco1Bhome').addClass('end_anim');
            $('#rosco1Bhome').fadeIn('slow', function() {
              rosco1Bhome.play();
            });
          }
        }
      });
    }
  });

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
    $('body').toggleClass('no-scroll');
    if(!$('.mobile_menu').is('.open')) {
      $('.mobile_menu_content').fadeOut('fast');
    } else {
      setTimeout(function(){
        $('.mobile_menu_content').fadeIn();
      }, 500);
    }
  });


  // Animación

  // rosco1A
  rosco1AParams = {
      container: document.getElementById('rosco1A'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: rosco1A
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

  // rosco1B
  rosco1BParams = {
      container: document.getElementById('rosco1B'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: rosco1B
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

  // stats_vertical
  stats_verticalParams = {
      container: document.getElementById('stats_vertical'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: stats_vertical
  };

  if ( $('#stats_vertical').closest('.fp_animate').length > 0 ) {
    $('#stats_vertical').closest('.fp_animate').on('fp_anim', function(ev){
      animstats_vertical = lottie.loadAnimation(stats_verticalParams);
      $(this).addClass('end_anim');
      if ( $(window).width() < 991) {
        statsVBar = new SimpleBar($('#stats_vertical')[0], { autoHide: false });
      }
    });

    if ( $('#stats_vertical').closest('.fp_animate').is('.fp_animated') && !$('#stats_vertical').is('.end_anim') ) {
      animstats_vertical = lottie.loadAnimation(stats_verticalParams);
      $('#stats_vertical').addClass('end_anim');
      if ( $(window).width() < 991) {
        statsVBar = new SimpleBar($('#stats_vertical')[0], { autoHide: false });
      }
    }
  } else if ($('#stats_vertical').length > 0) {
    animstats_vertical = lottie.loadAnimation(stats_verticalParams);
    $('#stats_vertical').addClass('end_anim');
    if ( 0 && $(window).width() < 991) {
      statsVBar = new SimpleBar($('#stats_vertical')[0], { autoHide: false });
    }
  }


  // roscos_varios_1
  roscos_varios_1Params = {
      container: document.getElementById('roscos_varios_1'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: roscos_varios_1
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

  // roscos_varios_2
  roscos_varios_2Params = {
      container: document.getElementById('roscos_varios_2'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: roscos_varios_2
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

  // roscos_varios_3
  roscos_varios_3Params = {
      container: document.getElementById('roscos_varios_3'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: roscos_varios_3
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

  // rosco2B
  rosco2BParams = {
      container: document.getElementById('rosco2B'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: rosco2B
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

  // stats_horizontal
  stats_horizontalParams = {
      container: document.getElementById('stats_horizontal'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: stats_horizontal
  };

  if ( $('#stats_horizontal').closest('.fp_animate').length > 0 ) {
    $('#stats_horizontal').closest('.fp_animate').on('fp_anim', function(ev){
      animstats_horizontal = lottie.loadAnimation(stats_horizontalParams);
      $(this).addClass('end_anim');
      if ( $(window).width() < 768) {
        statsHBar = new SimpleBar($('#stats_horizontal')[0], { autoHide: false });
      }
    });

    if ( $('#stats_horizontal').closest('.fp_animate').is('.fp_animated') && !$('#stats_horizontal').is('.end_anim') ) {
      animstats_horizontal = lottie.loadAnimation(stats_horizontalParams);
      $('#stats_horizontal').addClass('end_anim');
      if ( $(window).width() < 768) {
        statsHBar = new SimpleBar($('#stats_horizontal')[0], { autoHide: false });
      }
    }
  } else if ($('#stats_horizontal').length > 0) {
    animstats_horizontal = lottie.loadAnimation(stats_horizontalParams);
    if ( $(window).width() < 768) {
      statsHBar = new SimpleBar($('#stats_horizontal')[0], { autoHide: false });
      $('#stats_horizontal').addClass('end_anim');
    }
  }


  // roscofoto2A
  roscofoto2AParams = {
      container: document.getElementById('roscofoto2A'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: roscofoto2A
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

  // roscofoto3A roscofoto3B
  roscofoto3AParams = {
      container: document.getElementById('roscofoto3A'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: roscofoto3A
  };

  roscofoto3BParams = {
      container: document.getElementById('roscofoto3B'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: roscofoto3B
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

  // num78
  num78Params = {
      container: document.getElementById('num78'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: num78
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

  // num87
  num87Params = {
      container: document.getElementById('num87'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: num87
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

  // num87home
  num87homeParams = {
      container: document.getElementById('num87home'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: num87
  };

  if ( $('#num87home').length > 0 ) {
    $('#num87home').closest('.fp_animate').on('fp_anim', function(ev) {
      var fpAnimEl = $(this);
      setTimeout(function(){
        var bottomWindow = $(window).scrollTop() + $(window).height();
        var bottomAnimated = fpAnimEl.position().top + fpAnimEl.height();
        if ( bottomWindow > bottomAnimated && !$('#num87home').is('.end_anim') ) {
          animnum87home = lottie.loadAnimation(num87homeParams);
          $('#num87home').addClass('end_anim');
          $('#num87home').fadeIn('fast', function() {
            animnum87home.play();
          });
        } else {
          $(window).on("scroll", function() {
            bottomWindow = $(window).scrollTop() + $(window).height();
            if ( bottomWindow > bottomAnimated && !$('#num87home').is('.end_anim') ) {
              animnum87home = lottie.loadAnimation(num87homeParams);
              $('#num87home').addClass('end_anim');
              $('#num87home').fadeIn('fast', function() {
                animnum87home.play();
              });
            }
          });
        }
      }, 700);
    });

    if ( $('#num87home').closest('.fp_animate').is('.fp_animated') && !$('#num87home').is('.end_anim') ) {
      animnum87home = lottie.loadAnimation(num87homeParams);
      $('#num87home').addClass('end_anim');
      $('#num87home').fadeIn('fast', function() {
        animnum87home.play();
      });
    }
  }

  // rosco1Ahome
  rosco1AhomeParams = {
      container: document.getElementById('rosco1Ahome'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: rosco1A
  };

  if ( $('#rosco1Ahome').length > 0 ) {
    $('#rosco1Ahome').closest('.fp_animate').on('fp_anim', function(ev) {
      var fpAnimEl = $(this);
      setTimeout(function(){
        var bottomWindow = $(window).scrollTop() + $(window).height();
        var bottomEntireAnimated = fpAnimEl.position().top + fpAnimEl.height();
        var bottomHalfAnimated = fpAnimEl.position().top + (fpAnimEl.height() / 2);
        var bottomAnimated = $(window).width() > 767 ? bottomHalfAnimated : bottomEntireAnimated;
        if ( bottomWindow > bottomAnimated && !$('#rosco1Ahome').is('.end_anim') ) {
          rosco1Ahome = lottie.loadAnimation(rosco1AhomeParams);
          $('#rosco1Ahome').addClass('end_anim');
          $('#rosco1Ahome').fadeIn('fast', function() {
            rosco1Ahome.play();
          });
        } else {
          $(window).on("scroll", function() {
            if ($(window).width() > 767) {
              var rosco1AhomeTop = (fpAnimEl.position().top - (fpAnimEl.height()/2));
              if ( $(window).scrollTop() > rosco1AhomeTop && !$('#rosco1Ahome').is('.end_anim') ) {
                rosco1Ahome = lottie.loadAnimation(rosco1AhomeParams);
                $('#rosco1Ahome').addClass('end_anim');
                $('#rosco1Ahome').fadeIn('fast', function() {
                  rosco1Ahome.play();
                });
              }
            } else {
              var rosco1AhomeTop = $('#rosco1Ahome').parent().offset().top + ($('#rosco1Ahome').parent().height() / 2);
              if ( $(window).scrollTop() + $(window).height() > rosco1AhomeTop && !$('#rosco1Ahome').is('.end_anim') ) {
                rosco1Ahome = lottie.loadAnimation(rosco1AhomeParams);
                $('#rosco1Ahome').addClass('end_anim');
                $('#rosco1Ahome').fadeIn('fast', function() {
                  rosco1Ahome.play();
                });
              }
            }
          });
        }
      }, 700);
    });

    if ( $('#rosco1Ahome').closest('.fp_animate').is('.fp_animated') && !$('#rosco1Ahome').is('.end_anim') ) {
      rosco1Ahome = lottie.loadAnimation(rosco1AhomeParams);
      $('#rosco1Ahome').addClass('end_anim');
      $('#rosco1Ahome').fadeIn('fast', function() {
        rosco1Ahome.play();
      });
    }
  }

  // num78home
  num78homeParams = {
      container: document.getElementById('num78home'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: num78
  };

  if ( $('#num78home').length > 0 ) {
    $('#num78home').closest('.fp_animate').on('fp_anim', function(ev) {
      var fpAnimEl = $(this);
      setTimeout(function(){
        var bottomWindow = $(window).scrollTop() + $(window).height();
        var bottomAnimated = fpAnimEl.position().top + fpAnimEl.height();
        if ( bottomWindow > bottomAnimated && !$('#num78home').is('.end_anim') ) {
          animnum78home = lottie.loadAnimation(num78homeParams);
          $('#num78home').addClass('end_anim');
          $('#num78home').fadeIn('fast', function() {
            animnum78home.play();
          });
        } else {
          $(window).on("scroll", function() {
            bottomWindow = $(window).scrollTop() + $(window).height();
            var animnum78homeTop = fpAnimEl.position().top - (fpAnimEl.height()/2);
            var scrollYanimnum78home = $(this).scrollTop();
            if ( scrollYanimnum78home > animnum78homeTop && !$('#num78home').is('.end_anim') ) {
              animnum78home = lottie.loadAnimation(num78homeParams);
              $('#num78home').addClass('end_anim');
              $('#num78home').fadeIn('fast', function() {
                animnum78home.play();
              });
            }
          });
        }
      }, 700);
    });

    if ( $('#num78home').closest('.fp_animate').is('.fp_animated') && !$('#num78home').is('.end_anim') ) {
      animnum78home = lottie.loadAnimation(num78homeParams);
      $('#num78home').addClass('end_anim');
      $('#num78home').fadeIn('fast', function() {
        animnum78home.play();
      });
    }
  }

  // rosco1Bhome
  rosco1BhomeParams = {
      container: document.getElementById('rosco1Bhome'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: rosco1B
  };

  if ( $('#rosco1Bhome').length > 0 ) {
    $('#rosco1Bhome').closest('.fp_animate').on('fp_anim', function(ev) {
      var fpAnimEl = $(this);
      setTimeout(function(){
        var bottomWindow = $(window).scrollTop() + $(window).height();
        var bottomEntireAnimated = fpAnimEl.position().top - fpAnimEl.height();
        var bottomHalfAnimated = fpAnimEl.position().top + (fpAnimEl.height() / 2);
        var bottomAnimated = $(window).width() > 767 ? bottomHalfAnimated : bottomEntireAnimated;
        if ( bottomWindow > bottomAnimated && !$('#rosco1Bhome').is('.end_anim') ) {
          rosco1Bhome = lottie.loadAnimation(rosco1BhomeParams);
          $('#rosco1Bhome').addClass('end_anim');
          $('#rosco1Bhome').fadeIn('fast', function() {
            rosco1Bhome.play();
          });
        } else {
          $(window).on("scroll", function() {
            if ($(window).width() > 767) {
              var rosco1BhomeTop = (fpAnimEl.position().top - (fpAnimEl.height()/2));
              if ( $(window).scrollTop() > rosco1BhomeTop && !$('#rosco1Bhome').is('.end_anim') ) {
                rosco1Bhome = lottie.loadAnimation(rosco1BhomeParams);
                $('#rosco1Bhome').addClass('end_anim');
                $('#rosco1Bhome').fadeIn('fast', function() {
                  rosco1Bhome.play();
                });
              }
            } else {
              var rosco1BhomeTop = $('#rosco1Bhome').parent().offset().top + ($('#rosco1Bhome').parent().height() / 2);
              if ( $(window).scrollTop() + $(window).height() > rosco1BhomeTop && !$('#rosco1Bhome').is('.end_anim') ) {
                rosco1Bhome = lottie.loadAnimation(rosco1BhomeParams);
                $('#rosco1Bhome').addClass('end_anim');
                $('#rosco1Bhome').fadeIn('fast', function() {
                  rosco1Bhome.play();
                });
              }
            }
          });
        }
      }, 700);
    });

    if ( $('#rosco1Bhome').closest('.fp_animate').is('.fp_animated') && !$('#rosco1Bhome').is('.end_anim') ) {
      rosco1Bhome = lottie.loadAnimation(rosco1BhomeParams);
      $('#rosco1Bhome').addClass('end_anim');
      $('#rosco1Bhome').fadeIn('fast', function() {
        rosco1Bhome.play();
      });
    }
  }



  // PDF

  var pdfData = {};
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+(com|org|net|int|edu|es)))$/;
    return re.test(email);
  }

  function generatePDF() {
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
    };

    oReq.send();
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
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;


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
            if (iOS) {
              // window.open("https://www.bestinver.es/wp-content/uploads/observatorio_ahorro_inversion_2018.pdf",'_blank');
              $("<a>").attr("href", "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf").attr("target", "_blank")[0].click();
            } else {
              generatePDF();
            }
            downloadContentEl.find('.loading').hide();
          },
          error: function(jqXHR, textStatus, errorThrown) {
            var errorMsg = downloadContentEl.find('.error').data('ajax-error');
            downloadContentEl.find('.error').text(errorMsg).show();
            downloadContentEl.find('.loading').hide();
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

//always refresh page
window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || 
                         ( typeof window.performance != "undefined" && 
                              window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    // Handle page restore.
    window.location.reload();
  }
});

$(document).ready(function($) {

  var windowWidth = $(window).width();

  $(window).resize(function(){
    console.log('resize');

    
    if($(window).width() != windowWidth){

      windowWidth = $(window).width();

      $('.end_anim').each(function(){

        if ($(this).is('#rosco1A')) {
          $(this).empty();
          console.log('rosco1A');
          animrosco1A = lottie.loadAnimation(rosco1AParams).play();
        }
        if ($(this).is('#rosco1B')) {
          $(this).empty();
          animrosco1B = lottie.loadAnimation(rosco1BParams).play();
        }
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
        if ($(this).is('#roscos_varios_1')) {
          $(this).empty();
          animroscos_varios_1 = lottie.loadAnimation(roscos_varios_1Params).play();
        }
        if ($(this).is('#roscos_varios_2')) {
          $(this).empty();
          animroscos_varios_2 = lottie.loadAnimation(roscos_varios_2Params).play();
        }
        if ($(this).is('#roscos_varios_3')) {
          $(this).empty();
          animroscos_varios_3 = lottie.loadAnimation(roscos_varios_3Params).play();
        }
        if ($(this).is('#rosco2B')) {
          $(this).empty();
          animrosco2B = lottie.loadAnimation(rosco2BParams).play();
        }
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
        if ($(this).is('#roscofoto2A')) {
          console.log('aqui');
          $(this).empty();
          animroscofoto2A = lottie.loadAnimation(roscofoto2AParams).play();
        }
        if ($(this).is('#roscofoto3A')) {
          $(this).empty();
          animroscofoto3A = lottie.loadAnimation(roscofoto3AParams).play();
        }
        if ($(this).is('#roscofoto3B')) {
          $(this).empty();
          animroscofoto3B = lottie.loadAnimation(roscofoto3BParams).play();
        }
        if ($(this).is('#rosco1Ahome')) {
          $(this).empty();
          rosco1Ahome = lottie.loadAnimation(rosco1AhomeParams).play();
        }
        if ($(this).is('#rosco1Bhome')) {
          $(this).empty();
          rosco1Bhome = lottie.loadAnimation(rosco1BhomeParams).play();
        }
      });
    }
  });
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
