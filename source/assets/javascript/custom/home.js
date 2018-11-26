

var num87homeParams;
var rosco1AhomeParams;
var num78homeParams;
var rosco1BhomeParams;

var animnum87home;
var rosco1Ahome;
var animnum78home;
var rosco1Bhome;

$(window).on("load", function() {

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
      }, 1000, function() {
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


  // Animations

  // num87home
  num87homeParams = {
      container: document.getElementById('num87home'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: 'assets/javascript/custom/shapes/num87.json'
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
      path: 'assets/javascript/custom/shapes/rosco1A.json'
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
      path: 'assets/javascript/custom/shapes/num78.json'
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
      path: 'assets/javascript/custom/shapes/rosco1B.json'
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

});