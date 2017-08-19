//Code on main Section 

(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }
    
    showNextQuote();
    
})();

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

 $(document).ready(function(){
    $(".columns-3").hover(
        function(){
        $( this ).find(".caption").slideUp(250);
    }, 
    function(){
        $( this ).find(".caption").slideDown(250);
    }
    );




 });