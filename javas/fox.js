$(document).ready(function(){

    
   

     // Show Navbar when Click on icon
     $('i.icon').click(function(){
        $('.menu-links li').slideToggle()
    });
  

   

/* Preloader 
		/*----------------------------------------------------*/

        var prealoaderOption = $(window);
        prealoaderOption.on("load", function() {
            var preloader = jQuery('.spinner');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(350).fadeOut('slow');
        });


  //--------------------
  $(document).scroll(function(){
    var sc = $(this).scrollTop();
    
    if(sc > 100){  // Show Sticky Navbar
        $('.header-menu').addClass('sticky');
    }
    else {
        $('.header-menu').removeClass('sticky');
    }
    //-------------------------------
    if(sc > 100){  // Show Sticky Navbar
        $('.tagr').css("color", "gray");
    }
    else {
        $('.tagr').css("color", "white");
    }
    
  //----------------------------
    
    if( sc > 2654) {
        $('.timer').countTo(); // Run Count To Plugin.
        $(window).off('scroll');// to stop any count after passing the numbers div
    }


    //------------------------------------------------
    if ( sc > 250) { // Fade The Scroll Top Btn 
            
        $('.scrollTop').fadeIn();
        
    } else {
        
        $('.scrollTop').fadeOut();
        
    };
    
    //---------------------------------------------------------------

    // slick slider on pleasure section
    $('.slick').slick({
        
        nextArrow : false,
        prevArrow : false,
        autoplay : true,
        type:3000,
        
      

    }); // end of slick

    $('.scrollTop').click(function(){
        $('body,html').animate({
            scrollTop : 0
        },500);
    });
    
}); // end of window scroll

  
// portfolio gallery 

$('.buttons button').click(function(){
        
  $(this).addClass('active-btn').siblings().removeClass('active-btn');
  
  var CSSFilter = $(this).attr('id');
  
  if( CSSFilter === 'all' ) {
      $('.images > div ').fadeIn();
  } else {
      $('.images > div ').fadeOut();
      $('.images').contents().filter('.' + CSSFilter).fadeIn();
      
  }
  
});

 // owl carousel >> Team Section
 $('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
});

// Choose Panel 
$('.c_panel li').click(function(){
    $(this).addClass('active-btn').siblings().removeClass('active-btn');
    
    var p = $(this).data('role');
    $('.content > div ').hide();
    $('.content').contents().filter('#' + p).fadeIn();
    
});

// popup video in choose section
$('.pop').magnificPopup({
    type: 'iframe'
});

/*----------------------------------------------------*/
   
$("tagr").hover(function(){
    $(this).css("background","white");
    }, function(){
    $(this).css("color", "white");
  });





}) // end of jquery





