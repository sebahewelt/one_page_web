//function change_side(){
//    $("#about_us").click(
//            function(){
//                $("#s1").addClass("animated bounceInDown");
//                 $("#s1").css("display","block");
//                 $("#s2").css("display","none");
//                 $("#s3").css("display","none");
//                 
//            });
//    $("#gallery_but").click(
//            function(){
//                $("#s2").addClass("animated bounceInDown");
//                 $("#s1").css("display","none");
//                 $("#s2").css("display","block");
//                 $("#s3").css("display","none");
//                
//            });      
//         $("#contact").click(
//            function(){
//                $("#s3").addClass("animated bounceInDown");
//                 $("#s1").css("display","none");
//                 $("#s2").css("display","none");
//                 $("#s3").css("display","block");
//                
//            });          
//}
//
//$( document ).ready(function() {
//    $("#s1").addClass("animated bounceInDown");
//    $("#s1").css("display","block");
//   change_side();
//});

    function home() {

var home = document.querySelector("#s0");       
var about_us = document.querySelector("#s1");
var gallery= document.querySelector("#s2");
var contact= document.querySelector("#s3");
    home.style.display = "block";
    gallery.style.display = "none";
    contact.style.display = "none";
    about_us.style.display = "none"; 
    var bg=document.querySelector("body");
       bg.classList.add("bg_home");
       bg.classList.remove("bg_about");
       bg.classList.remove("bg_gallery");
       bg.classList.remove("bg_contact");
        
Velocity(home,"transition.bounceDownIn",700,{easing:"spring"});
         
}
function home_tooltip()
{
          var k0= document.querySelector("#k0"),
k1= document.querySelector("#k1"),
k2= document.querySelector("#k2"),
k3= document.querySelector("#k3");  
 k0.classList.add("active");
    k1.classList.remove("active");
    k2.classList.remove("active");
    k3.classList.remove("active");
    var bg=document.querySelector("body");
         bg.className = "bg_home";
    
}
    function about() {

var home = document.querySelector("#s0");
var about_us = document.querySelector("#s1");
var gallery= document.querySelector("#s2");
var contact= document.querySelector("#s3");
    home.style.display = "none";
    gallery.style.display = "none";
    contact.style.display = "none";
    about_us.style.display = "block";
     var bg_col = document.querySelector("body");
         bg_col.classList.add("bg_about");
//    var bg_col2 = document.querySelector("section");
//        bg_col2.classList.add("bg_about");
   var bg=document.querySelector("body");
      
Velocity(about_us,"transition.bounceDownIn",700,{easing:"spring"});
}

function about_tooltip()
{
var k0= document.querySelector("#k0"),
k1= document.querySelector("#k1"),
k2= document.querySelector("#k2"),
k3= document.querySelector("#k3");  
 k1.classList.add("active");
    k0.classList.remove("active");
    k2.classList.remove("active");
    k3.classList.remove("active");
     
    var bg=document.querySelector("body");
         bg.className = "bg_about";
//  var bg_col = document.querySelector("body");
//  var bg=document.querySelector("body");   
//  var bg_col2 = document.querySelector("footer");
//  
//      bg_col.classList.add("bg_about");
//      bg.classList.remove("bg_home");
//      bg_col2.classList.add("bg_about");
//      
    
}

function galery(){
var home = document.querySelector("#s0");
var about_us = document.querySelector("#s1");
var gallery= document.querySelector("#s2");
var contact= document.querySelector("#s3");
       home.style.display = "none";
       about_us.style.display = "none";
       contact.style.display = "none";
       gallery.style.display = "block";
     var bg=document.querySelector("body");
      
      
      
Velocity(gallery,"transition.bounceDownIn",700,{easing:"spring"});        
}
function galery_tooltip()
{
          var k0= document.querySelector("#k0"),
k1= document.querySelector("#k1"),
k2= document.querySelector("#k2"),
k3= document.querySelector("#k3");  
 k2.classList.add("active");
    k0.classList.remove("active");
    k1.classList.remove("active");
    k3.classList.remove("active");
    var bg=document.querySelector("body");
       bg.className = "bg_gallery";
}

function contact(){
var home = document.querySelector("#s0");
var about_us = document.querySelector("#s1");
var gallery= document.querySelector("#s2");
var contact= document.querySelector("#s3");   
       home.style.display = "none";
       about_us.style.display = "none";       
       gallery.style.display = "none";
       contact.style.display = "block";
Velocity(contact,"transition.bounceDownIn",700,{easing:"spring"}); 




}
function contact_tooltip()
{
var k0= document.querySelector("#k0"),
k1= document.querySelector("#k1"),
k2= document.querySelector("#k2"),
k3= document.querySelector("#k3");  
 k3.classList.add("active");
    k0.classList.remove("active");
    k1.classList.remove("active");
    k2.classList.remove("active");
    
    var bg=document.querySelector("body"); 
    
    bg.className = "bg_contact";
    
     
}


//
//function add_slide(){
//
//    var boxslider = document.querySelector(".slider-cat");
//    
//   
////<a class="example-image-link" href="images/image-3.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><img class="example-image" src="images/image-3.jpg" alt=""/></a>
//
////var dc= document.createDocumentFragment();
////var i=12;
//var j;
//   
//
//for(j=1;j<43;j=j+1){
//     
//        
//        var img = document.createElement("a");
//        img.classList.add("example-image-link");
//        img.getAttribute("href");  
//        img.getAttribute("data-lightbox");
//        img.getAttribute("style");
//        var image = "images/image-"+j+".jpg";
//        img.setAttribute("href",image);
//        img.setAttribute("data-lightbox","example-set");
//        
//        var link = document.createElement("img");
//        link.classList.add("example-image");
//        link.getAttribute("src");
//        
//        link.setAttribute("src",image);
//        img.appendChild(link);
//        //dc.appendChild(img);
//      // img.getAttribute("style"); 
//      // img.setAttribute("style","opacity:0"); 
//       boxslider.appendChild(img);
//       if(j%13===0){link.getAttribute("style");link.setAttribute("style","margin-top:40px;");}
//          if(j <= 6 && j > 0){Velocity(img,{opacity:1},{stagger: 300,delay:750},1000);}
//        else if(j>=7 && j<=12){
//            Velocity(img,{opacity:1},{stagger: 300,delay:1500},1000);
//        }else if(j>=13 && j<=18){Velocity(img,{opacity:1},{stagger: 300,delay:2250},1000);
//        }else if(j>=19 && j<=24){Velocity(img,{opacity:1},{stagger: 300,delay:3000},1000);
//        }else if(j>=25 && j<=30){Velocity(img,{opacity:1},{stagger: 300,delay:4000},1000);
//        }else if(j>=31 && j<=36){Velocity(img,{opacity:1},{stagger: 300,delay:5000},1000);
//        }else if(j>=37 && j<=42){Velocity(img,{opacity:1},{stagger: 300,delay:5000},1000);
//            
//       
//     
//        
//       
//      //("transition.slideLeftIn", { stagger: 250 })
//      }
//}
//}
//



