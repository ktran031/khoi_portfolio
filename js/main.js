$(document).ready(pageReady);

function pageReady() {
	

// Nav Bar 
$(function() {
    var pull        = $('#pull');
        menu        = $('nav ul');
        menuHeight  = menu.height();
 
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
});

$(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
}); 

// <!----- JQUERY FOR SLIDING NAVIGATION --->   

  $('a[href*=#]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top;

// <!----- JQUERY CLICK FUNCTION REMOVE AND ADD CLASS "ACTIVE" + SCROLL TO THE #DIV--->   
         $(this).click(function() {
            $("#nav li a").removeClass("active");
            $(this).addClass('active');
           $('html, body').animate({scrollTop: targetOffset}, 1000);
           return false;
         });
      }
    }
  });

// Fixed Nav Bar
// define variables
//     var navOffset, scrollPos = 0;
    
//     // add utility wrapper elements for positioning
//     jQuery("nav").wrap('<div class="nav-placeholder"></div>');
//     jQuery("nav").wrapInner('<div class="nav-inner"></div>');
//     jQuery(".nav-inner").wrapInner('<div class="nav-inner-most"></div>');
    
//     // function to run on page load and window resize
//     function stickyUtility() {
        
//         // only update navOffset if it is not currently using fixed position
//         if (!jQuery("nav").hasClass("fixed")) {
//             navOffset = jQuery("nav").offset().top;
//         }
        
//         // apply matching height to nav wrapper div to avoid awkward content jumps
//         jQuery(".nav-placeholder").height(jQuery("nav").outerHeight());
        
//     } // end stickyUtility function
    
//     // run on page load
//     stickyUtility();
    
//     // run on window resize
//     jQuery(window).resize(function() {
//         stickyUtility();
//     });
    
//     // run on scroll event
//     jQuery(window).scroll(function() {
        
//         scrollPos = jQuery(window).scrollTop();
        
//         if (scrollPos >= navOffset) {
//             jQuery("nav").addClass("fixed");
//         } else {
//             jQuery("nav").removeClass("fixed");
//         }
        
//     });


// Banner Area //
    
    //Click to slide down Why Work With Me?//
    $(".button").click(blurbToggle) ;

    function blurbToggle() {
        // event.preventDefault();
        $("#show-this-on-click").slideToggle();
    }
 
//Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
 
}