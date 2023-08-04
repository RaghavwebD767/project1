//javascript aur gsap padhle

var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursorblur") 
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    
    blur.style.left = dets.x- 200 +"px"
    blur.style.top = dets.y- 200+"px"
})
   
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
console.log(elem)
elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 2
    crsr.style.border = "1px solid #fff"
    crsr.style.backgroundColor = "transparent"
})
elem.addEventListener("mouseleave",function(){
    crsr.style.scale = 1
    crsr.style.border = "0px solid #95C11E"
    crsr.style.backgroundColor = "#95C11E"
})

}) 

gsap.to("#nav",{
    backgroundColor :"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{

        trigger:"#nav",
        scroller:"body",
        markers:"body",
        markers:true,
        start:"top -10%",
        end:"bottom -10%",
        scrub: 1
    }

})

gsap.to("#main", {
     backgroundColor : "#000",
     scrollTrigger : {
        trigger:"#main",
        scroller: "body",
        markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub:2
     }

})

gsap.from("#aboutus img,#aboutusin",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:3,
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:3,
    }
})





































