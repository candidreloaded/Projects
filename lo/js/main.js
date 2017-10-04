
$(document).ready(function(){  
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
     // Prevent background scrolling
     $('.burg-toggle').click(function(e){
        $(document.body).addClass('fixedposition');
    });
        
    $('.close-button').click(function(e){
        $(document.body).removeClass('fixedposition');
    });

    //Portfolio categories
    $('.port_cat').on('click', function(){
       $('.port_cat').removeClass('active');
            $(this).addClass('active');
    });

    // Porfolio filter
    $(".port_cat").click(function(){
        var value = $(this).attr('data-filter');
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
    });
});





