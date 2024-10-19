

var typed = new Typed('#text', {
    strings: ["Web Developer", "Video Editor","Youtuber","Frontend Developer"],
    typeSpeed: 30,
    backSpeed:30,
    backDelay:1000,
    loop:true
  });


  gsap.from(".my_image",{
    opacity:0,
    duration:2,
    x:160,
    y:100,
    
  })


  gsap.from(".my_image h1",{
    opacity:0,
    duration:2,
    rotate:180,
    z:1000,
    stagger:2
    
  })

  gsap.from(".about-img i",{
    opacity:0,
    duration:0.4,
    scale:0,
    delay:0.2,
    y:100,
    x:-160,
    // rotate:180,
    scrollTrigger:{
      scroller:"body",
      trigger:".about-img",
      // markers:true,
      start:"top 55%",
      end:"top 50%",
      // pin:true,
      // stagger:true,
      scrub:2
    

    }
    
  })



//fOR sERVICES

  gsap.from(".services-list div",{
    opacity:0,
    duration:0.6,
    scale:0,
    // delay:0.2,
    y:100,
    x:-160,
    rotate:180,
    scrollTrigger:{
      scroller:"body",
      trigger:".services-list div",
      // markers:true,
      start:"top 50%",
      end:"top 55%",
      // pin:true,
      stagger:true,
      scrub:true,
      
    

    }
    
  })


