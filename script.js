
function page1animation(){
    var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y:-30,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:0.15
    
})
tl.from(".center-part1",{
    x:-70,
    opacity:0,
    duration:0.5

})
tl.from(".center-part1 p, .center-part1 button",{
    x:-70,
    opacity:0,
    duration:0.5
})
tl.from(".center-part2 img",{
    x:70,
    opacity:0,
    duration:0.7,
},"-=0.3")
tl.from(".section-bottom img",{
    y:30,
    opacity:0,
    duration:0.5,
    stagger:0.2
})
}

function page2animation(){
    var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 50%",
        end:"top 0",
        scrub:2,
    }
})

tl2.from(".services",{
    opacity:0,
    y:30
})

tl2.from(".line1.left",{
    x:-100,
    scrub:2,
    opacity:0,
    duration:1
},"anim1")
tl2.from(".line1.right",{
    x:100,
    scrub:2,
    opacity:0,
    duration:1
},"anim1")
tl2.from(".line2.left",{
    x:-100,
    scrub:2,
    opacity:0,
    duration:1
},"anim2")
tl2.from(".line2.right",{
    x:100,
    scrub:2,
    opacity:0,
    duration:1
},"anim2")

}
page1animation();
page2animation();



