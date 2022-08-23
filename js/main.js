
    // <!-- script for form validation -->
    
         (function() {
    'use strict';
    window.addEventListener('load', function() {
      var form = document.getElementById('needs-validation');
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    }, false);
  })();
    


      

    //   <!-- script for testimonials slide-effect -->
      
          $(document).ready(function() {
          $('#testimony1').click(function() {
                  $('.testimony1').toggle("slide");
          });
      });

          $(document).ready(function() {
              $('#testimony2').click(function() {
                      $('.testimony2').toggle("slide");
              });
          });

          $(document).ready(function() {
          $('#testimony3').click(function() {
                  $('.testimony3').toggle("slide");
          });
      });
      

 


    // other law site

        // Sticky Navbar
        $(window).scroll(function () {
            if ($(this).scrollTop() > 90) {
                $('.nav-bar').addClass('nav-sticky');
                $('.carousel, .page-header').css("margin-top", "73px");
            } else {
                $('.nav-bar').removeClass('nav-sticky');
                $('.carousel, .page-header').css("margin-top", "0");
            }
        });
        
        
    
    (function ($) {
        "use strict";
        
        // Dropdown on mouse hover
        $(document).ready(function () {
            function toggleNavbarMethod() {
                if ($(window).width() > 992) {
                    $('.navbar .dropdown').on('mouseover', function () {
                        $('.dropdown-toggle', this).trigger('click');
                    }).on('mouseout', function () {
                        $('.dropdown-toggle', this).trigger('click').blur();
                    });
                } else {
                    $('.navbar .dropdown').off('mouseover').off('mouseout');
                }
            }
            toggleNavbarMethod();
            $(window).resize(toggleNavbarMethod);
        });
        
        
        // Back to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });
        $('.back-to-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
            return false;
        });
    
    
        // Date and time picker
        $('#date').datetimepicker({
            format: 'L'
        });
        $('#time').datetimepicker({
            format: 'LT'
        });
    
    
        // Service carousel
        $(".service-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            margin: 30,
            dots: false,
            loop: true,
            nav : true,
            navText : [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            responsive: {
                0:{
                    items:1
                },
                576:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                }
            }
        });
    
    
        
    
        // Testimonials carousel
        $(".testimonial-carousel").owlCarousel({
            center: true,
            autoplay: true,
            smartSpeed: 1000,
            margin: 30,
            dots: true,
            loop: true,
            responsive: {
                0:{
                    items:1
                },
                576:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                }
            }
        });
        
    })(jQuery);


    // script 4 serv

      

    
    
    
