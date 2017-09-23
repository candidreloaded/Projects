// Code on main Section 
$(window).load(function(){
    $('#page_loader').hide(function(){
        $('$intro_page').slideUp(10000);
    });

    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        slideSpeed:1000,
        singleItem:false,
        navigationText:["",""],
        autoPlay:true
    });
});


    
            


// (function() {

//     var quotes = $(".quotes");
//     var quoteIndex = -1;
    
//     function showNextQuote() {
//         ++quoteIndex;
//         quotes.eq(quoteIndex % quotes.length)
//             .fadeIn(2000)
//             .delay(2000)
//             .fadeOut(2000, showNextQuote);
//     }
    
//     showNextQuote();
    
// })();

// var pageLoader = document.getElementById("page_loader");
// window.addEventListener('load', function(){
//     pageLoader.style.display = 'none';
//     console.log('page loaded...');
// });




// var portfolioBanner = document.querySelector(".portfolioBanner"); 
//      portfolioBanner.style.visibility = "visible";
    //  .css({
//     border: '2px solid red;',
//     background-color: 'rgb(255, 125, 115)'
//     });


//Portfolio caption code
/*$(document).ready(function(){
   
    $('.box').mouseenter(function(){
        $('.caption').stop().animate({height: "100%"}, 500);

    });
     $('.box').mouseleave(function(){
        $('.caption').stop().animate({height: "10%"}, 500, function(){
           
        }); 
    });
});
   


$(document).ready(function(){
  $(".box").mouseover(function(){
   $(".caption").stop().slideDown("slow");
  });
  $(".box").mouseout(function(){
   $(".caption").slideUp("slow");
  });
 });*/

//  $(document).ready(function(){
//     $(".columns-3").hover(
//         function(){
//         $( this ).find(".caption").slideUp(250);
//     }, 
//     function(){
//         $( this ).find(".caption").slideDown(250);
//     }
//     );




//  });