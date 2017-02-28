/* ======================================================
                      ARROW
   ====================================================== */

  $(document).ready(function(){
     $(".arrow").click(function(e){
        e.preventDefault();
        $('html, body').animate({
         scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
     });
  });



/* ======================================================
                    SECOND IMAGE LOAD
   ====================================================== */


$(document).ready(function () {
        function showImages(el) {
        var windowHeight = jQuery( window ).height();
        $(el).each(function(){
            var thisPos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (topOfWindow + windowHeight - 350 > thisPos ) {
                $(this).addClass("fadeIn");
            }
        });
    }

    // if the image in the window of browser when the page is loaded, show that image
    $(document).ready(function(){
            showImages('.star');
    });

    // if the image in the window of browser when scrolling the page, show that image
    $(window).scroll(function() {
            showImages('.star');
    });
  });




