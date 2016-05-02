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


// NavBar Changes Color on Scroll
// $(document).ready(function(){       
//    var scroll_start = 0;
//    var startchange = $('.navbar-inverse');
//    var offset = startchange.offset();
//     if (startchange.length){
//    $(document).scroll(function() { 
//       scroll_start = $(this).scrollTop();
//       if(scroll_start > offset.top) {
//           $(".navbar-inverse").css({'background-color': '#000', 'padding': '10px'});
//        } else {
//           $('.navbar-inverse').css({'background-color': '#455868', 'padding': '0px'});
//        }
//    });
//     }
// });


// // Navbar turns transparent on scroll
// var opacity = 1;
// var lastScrollTop = 0;
// $(window).scroll(function(){
//     var st = $(this).scrollTop();
//     if(st == 0)
//         $('.clearfix').css('opacity','1');

//     if (opacity > 0.5 && (st > lastScrollTop)){
//        $('.clearfix').css('opacity','-=0.01');
//        opacity -= 0.01;
//     }
//     else if(opacity < 1)
//     {
//        $('.clearfix').css('opacity','+=0.01');
//         opacity += 0.01;
//     }
//     lastScrollTop = st;
// });
  

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