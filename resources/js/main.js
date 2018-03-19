$(document).ready(function(){
   
    $(".section-features").waypoint(function(direction){
        if(direction=="down"){
            $("nav").addClass("sticky");
            $('.sticky').hide();
            $('.sticky').fadeIn(250);
        }
        else {
            $('nav').removeClass('sticky');
        }
    },{
        offset:'50px'
    });

});
