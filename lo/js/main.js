
$(document).ready(function(){ 
    
    // Prevent background scrolling
    $('.burg-toggle').click(function(e){
        $(document.body).addClass('fixedposition');
    });
        
    $('.close-button').click(function(e){
        $(document.body).removeClass('fixedposition');
    });
    
    //Testimonial 
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

$(document).ready(function(){ 
    //Portfolio categories
    $('.port_cat').on('click', function(){
       $('.port_cat').removeClass('active');
            $(this).addClass('active');
    });
});