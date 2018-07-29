$(function(){ 
   AOS.init({
       duration: 1000
   });
});

$(document).ready(function(){
   
    $(".section-features").waypoint(function(direction){
        if(direction=="down"){
            $("nav").addClass("sticky");
            $('.sticky').hide();
            $('.sticky').fadeIn(300);
        }
        else {            
            $('nav').removeClass('sticky');    
        }
    },{
        offset:'50px'
    });
});


var vis=0;
function myFunction1() {
  var element = document.getElementById("cms");
    if(vis==0) {
        element.style.visibility="visible";
        vis=1;
    }
    else {
        element.style.visibility="hidden";
        vis=0;
    }
}

function myFunction2() {
    var txt;
    var person = prompt("Please enter text", "");
    if (person == null || person == "") {
        alert("User cancelled the prompt.");
        document.getElementById("title").innerHTML = "GOODBYE JUNK FOOD.<br>HELLO SUPER HEALTHY MEALS.";
        
    } else {
        txt = person;
        document.getElementById("title").innerHTML = txt;
    }
    
}