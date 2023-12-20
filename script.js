// Declaring variables according to justify the active container
var c1a=false, c2a=false, c3a=false, c4a=false, c5a=false, c6a=false;
var c1b=false, c2b=false, c3b=false, c4b=false, c5b=false, c6b=false;



// Calling functions according to the scroll value in Y axis
window.addEventListener("scroll", ()=> {
console.log(scrollY)
  if(scrollY > 150) {
      if(c1b == false) {
      c1b = true;
      c1a = false;
      animationTwo();
      setTimeout(function() {
        document.querySelector(".container-2-left").style.display = "flex";
        document.querySelector(".container-2-right").style.display = "block";
        document.querySelector(".circle").style.backgroundColor = "#4921d8";

        document.querySelector(".circle-text1").style.display = "none";
        document.querySelector(".circle-text2").style.display = "block";
      }, 350)
    }
  }
  else if(scrollY < 150) {
       if(c1a == false) {
      c1a = true;
      c1b = false;
      animationOne();
      setTimeout(function() {
        document.querySelector(".container-2-left").style.display = "none";
        document.querySelector(".container-2-right").style.display = "none";
        document.querySelector(".circle").style.backgroundColor = "#6411A9";

        document.querySelector(".circle-text1").style.display = "block";
        document.querySelector(".circle-text2").style.display = "none";
      }, 350)
    }
  }

  if(scrollY > 300) {
      if(c2b == false) {
      c2b = true;
      c2a = false
      animationFour();
      setTimeout(()=> {
        document.querySelector(".container-3-left").style.display = "flex";
        document.querySelector(".container-3-right").style.display = "block";
        document.querySelector(".circle").style.backgroundColor = "#12033a";
        
        document.querySelector(".circle-text2").style.display = "none";
        document.querySelector(".circle-text3").style.display = "block";
      }, 350)
    }
  }
  else if(scrollY < 300) {
      if(c2a == false) {
      c2a = true;
      c2b = false;
      animationThree();
      setTimeout(()=> {
        document.querySelector(".container-3-left").style.display = "none";
        document.querySelector(".container-3-right").style.display = "none";
        document.querySelector(".circle").style.backgroundColor = "#4921d8";

        document.querySelector(".circle-text2").style.display = "block";
        document.querySelector(".circle-text3").style.display = "none";
      }, 350)
    }
  }

  if(scrollY > 450) {
      if(c3b == false) {
      c3b = true;
      c3a = false
      animationSix();
      setTimeout(()=> {
        document.querySelector(".container-4-left").style.display = "flex";
        document.querySelector(".container-4-right").style.display = "block";
        document.querySelector(".circle").style.backgroundColor = "#142741";
        
        document.querySelector(".circle-text3").style.display = "none";
        document.querySelector(".circle-text4").style.display = "block";
      }, 350)
    }
  }
  else if(scrollY < 450) {
      if(c3a == false) {
      c3a = true;
      c3b = false;
      animationFive();
      setTimeout(()=> {
        document.querySelector(".container-4-left").style.display = "none";
        document.querySelector(".container-4-right").style.display = "none";
        document.querySelector(".circle").style.backgroundColor = "#12033a";
        
        document.querySelector(".circle-text3").style.display = "block";
        document.querySelector(".circle-text4").style.display = "none";
      }, 350)
    }
  }

  if(scrollY > 600) {
      if(c4b == false) {
      c4b = true;
      c4a = false
      animationEight();
      setTimeout(()=> {
        document.querySelector(".container-5-left").style.display = "flex";
        document.querySelector(".container-5-right").style.display = "block";
        document.querySelector(".circle").style.backgroundColor = "#2865c7";
        
        document.querySelector(".circle-text4").style.display = "none";
        document.querySelector(".circle-text5").style.display = "block";
      }, 350)
    }
  }
  else if(scrollY < 600) {
      if(c4a == false) {
      c4a = true;
      c4b = false;
      animationSeven();
      setTimeout(()=> {
        document.querySelector(".container-5-left").style.display = "none";
        document.querySelector(".container-5-right").style.display = "none";
        document.querySelector(".circle").style.backgroundColor = "#142741";

        document.querySelector(".circle-text4").style.display = "block";
        document.querySelector(".circle-text5").style.display = "none";
      }, 350)
    }
  }
  
  if(scrollY > 750) {
    if(c5b == false) {
      c5b = true;
      c5a = false
      animationTen();
      setTimeout(()=> {
        document.querySelector(".container-6-left").style.display = "flex";
        document.querySelector(".container-6-right").style.display = "block";
        document.querySelector(".circle").style.backgroundColor = "#0c2f81";
        
        document.querySelector(".circle-text5").style.display = "none";
        document.querySelector(".circle-text6").style.display = "block";
      }, 350)
    }
  }
  else if(scrollY < 750) {
    if(c5a == false) {
      c5a = true;
      c5b = false;
      animationNine();
      setTimeout(()=> {
        document.querySelector(".container-6-left").style.display = "none";
        document.querySelector(".container-6-right").style.display = "none";
        document.querySelector(".circle").style.backgroundColor = "#2865c7";
        
        document.querySelector(".circle-text5").style.display = "block";
        document.querySelector(".circle-text6").style.display = "none";
      }, 350)
    }
  }

  if(scrollY > 900) {
    if(c6b == false) {
      c6b = true;
      c6a = false
      animationTwelve();
      setTimeout(()=> {
        document.querySelector(".container-7-left").style.display = "flex";
        document.querySelector(".container-7-right").style.display = "block";
        document.querySelector(".circle").style.backgroundColor = "#088350";
        
        document.querySelector(".circle-text6").style.display = "none";
        document.querySelector(".circle-text7").style.display = "block";
      }, 350)
    }
  }
  else if(scrollY < 900) {
    if(c6a == false) {
      c6a = true;
      c6b = false;
      animationEleven();
      setTimeout(()=> {
        document.querySelector(".container-7-left").style.display = "none";
        document.querySelector(".container-7-right").style.display = "none";
        document.querySelector(".circle").style.backgroundColor = "#0c2f81";
        
        document.querySelector(".circle-text6").style.display = "block";
        document.querySelector(".circle-text7").style.display = "none";
      }, 350)
    }
  }
})

// Creating timeline in GSAP and making the main container pinned
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    end: "150% 0",
    pin: true
  }
}) 

var tl2 = gsap.timeline();

// Functions
function animationTwo() {
  tl.to(".image-1a, .image-1b", {
    y: "300"
  },"p1")
  .to("#header1, .subtext1, .footer-left-text1, .info-img1", {
    y: "-200"
  }, "p1")
  .to("#Opaque_Ring", {
    strokeDasharray: "34% 1000",
  }, "p1")
  .to(".middle-text1, .lower-text1", {
    y: "-200"
  }, "p1")
  
  tl2.clear();

  tl2.from(".image-2a", {
    y: "300"
  }, "c2")
  .from(".image-2b", {
    y: "-300"
  }, "c2")
  .from("#header2, .subtext2, .footer-left-text2", {
    y: "200"
  }, "c2")
  .from(".upper-text2, .middle-text2, .lower-text2", {
    y: "200"
  }, "c2")
}
function animationOne() {
  tl.clear();
  tl.to(".image-1a, .image-1b", {
    y: "0"
  }, "h1")
  .to("#header1, .subtext1, .footer-left-text1, .info-img1", {
    y: "0"
  }, "h1")
  .to("#Opaque_Ring", {
    strokeDasharray: "0 1000",
  }, "h1")
  .to(".middle-text1, .lower-text1", {
    y: "0"
  }, "h1")
}


function animationFour() {
  tl.clear();
  tl2.clear();
  tl.to(".image-2a", {
    y: "400"
  }, "p2")
  .to(".image-2b", {
    y: "-300"
  }, "p2")
  .to("#header2, .subtext2, .footer-left-text2", {
    y: "-200"
  }, "p2")
  .to("#Opaque_Ring", {
    strokeDasharray: "68% 1000",
  }, "p2")
  .to(".upper-text2, .middle-text2, .lower-text2", {
    y: "-200"
  }, "p2")

  tl2.from(".image-3a", {
    y: "350"
  }, "c3")
  .from(".image-3b", {
    y: "-350"
  }, "c3")
  .from("#header3, .subtext3, .footer-left-text3", {
    y: "200"
  }, "c3")
  .from(".upper-text3, .middle-text3, .lower-text3", {
    y: "200"
  }, "c3")
  
}
function animationThree() {
  tl.clear();
  tl.to(".image-2a, .image-2b", {
    y: "0"
  }, "h2")
  .to("#header2, .subtext2, .footer-left-text2", {
    y: "0"
  }, "h2")
  .to("#Opaque_Ring", {
    strokeDasharray: "34% 1000",
  }, "h2")
  .to(".upper-text2, .middle-text2, .lower-text2", {
    y: "0"
  }, "h2")
}

function animationSix() {
  tl.clear();
  tl.to(".image-3a", {
    y: "350"
  }, "p3")
  tl.to(".image-3b", {
    y: "-350"
  }, "p3")
  .to("#header3, .subtext3, .footer-left-text3", {
    y: "-200"
  }, "p3")
  .to("#Opaque_Ring", {
    strokeDasharray: "100% 1000",
  }, "p3")
  .to(".upper-text3, .middle-text3, .lower-text3", {
    y: "-200"
  }, "p3")

  tl.from(".image-4a", {
    x: "-200"
  }, "c4")
  tl.from(".image-4b", {
    y: "-200"
  }, "c4")
  tl.from(".image-4c", {
    y: "-300"
  }, "c4")
  tl.from(".image-4d", {
    y: "300"
  }, "c4")
  tl.from(".image-4e", {
    x: "200"
  }, "c4")
  .from("#header4, .subtext4, .footer-left-text4", {
    y: "200"
  }, "c4")
  .from(".upper-text4, .middle-text4, .lower-text4", {
    y: "0"
  }, "c4")
}
function animationFive() {
  tl.to(".image-3a, .image-3b", {
    y: "0"
  }, "h3")
  .to("#header3, .subtext3, .footer-left-text3", {
    y: "0"
  }, "h3")
  .to("#Opaque_Ring", {
    strokeDasharray: "68% 1000",
  }, "h3")
  .to(".upper-text3, .middle-text3, .lower-text3", {
    y: "0"
  }, "h3")
}

function animationEight() {
  tl.to(".image-4a", {
    x: "-200"
  }, "p4")
  tl.to(".image-4b", {
    y: "-200"
  }, "p4")
  tl.to(".image-4c", {
    y: "300"
  }, "p4")
  tl.to(".image-4d", {
    y: "-300"
  }, "p4")
  tl.to(".image-4e", {
    x: "200"
  }, "p4")
  .to("#header4, .subtext4, .footer-left-text4", {
    y: "-200"
  }, "p4")
  .to("#Opaque_Ring", {
    strokeDasharray: "130% 1000",
  }, "p4")
  .to(".upper-text4, .middle-text4, .lower-text4", {
    y: "-200"
  }, "p4")

  tl2.from(".image-5a", {
    y: "-300"
  }, "c5")
  .from(".image-5b", {
    y: "-300"
  }, "c5")
  .from(".image-5c", {
    y: "300"
  }, "c5")
  .from(".image-5d", {
    y: "300"
  }, "c5")
  .from(".image-5e", {
    x: "300"
  }, "c5")
  .from("#header5, .subtext5, .footer-left-text5", {
    y: "200"
  }, "c5")
  .from(".upper-text5, .middle-text5, .lower-text5", {
    y: "200"
  }, "c5")
}
function animationSeven() {
  tl.clear();
  tl.to(".image-4a, .image-4e", {
    x: "0"
  }, "h4")
  tl.to(".image-4b, .image-4c, .image-4d", {
    y: "0"
  }, "h4")
  .to("#header4, .subtext4, .footer-left-text4", {
    y: "0"
  }, "h4")
  .to("#Opaque_Ring", {
    strokeDasharray: "100% 1000",
  }, "h4")
  .to(".upper-text4, .middle-text4, .lower-text4", {
    y: "0"
  }, "h4")
}

function animationTen() {
  tl2.clear();
  tl.clear();
  tl2.to(".image-5a", {
    y: "-300"
  }, "p5")
  .to(".image-5b", {
    y: "-300"
  }, "p5")
  .to(".image-5c", {
    y: "300"
  }, "p5")
  .to(".image-5d", {
    y: "300"
  }, "p5")
  .to(".image-5e", {
    x: "300"
  }, "p5")
  .to("#header5, .subtext5, .footer-left-text5", {
    y: "-200"
  }, "p5")
  .to("#Opaque_Ring", {
    strokeDasharray: "162% 1000",
  }, "p5")
  .to(".upper-text5, .middle-text5, .lower-text5", {
    y: "-200"
  }, "p5")

  tl.from(".image-6a", {
    y: "400"
  }, "c6")
  .from("#header6, .subtext6, .footer-left-text6", {
    y: "200"
  }, "c6")
  .from(".upper-text6, .middle-text6, .lower-text6", {
    y: "200"
  }, "c6")

}
function animationNine() {
  tl2.clear();
  tl2.to(".image-5a, .image-5b, .image-5c, .image-5d", {
    y: "0"
  }, "h5")
  .to(".image-5e", {
    x: "0"
  }, "h5")
  .to("#header5, .subtext5, .footer-left-text5", {
    y: "0"
  }, "h5")
  .to("#Opaque_Ring", {
    strokeDasharray: "130% 1000",
  }, "h5")
  .to(".upper-text5, .middle-text5, .lower-text5", {
    y: "0"
  }, "h5")
}

function animationTwelve() {
  tl.clear();
  tl2.clear();
  tl.to(".image-6a", {
    y: "400"
  }, "p6")
  .to("#header6, .subtext6, .footer-left-text6", {
    y: "-200"
  }, "p6")
  .to("#Opaque_Ring", {
    strokeDasharray: "200% 1000",
  }, "p6")
  .to(".upper-text6, .middle-text6, .lower-text6", {
    y: "-200"
  }, "p6")

  tl2.from(".image-7a, .image-7b", {
    y: "400"
  }, "c7")
  .from("#header7, .subtext7, .footer-left-text7", {
    y: "200"
  }, "c7")
  .from(".info-img2", {
    y: "-200"
  }, "c7")
  .from(".upper-text7, .middle-text7, .lower-text7", {
    y: "200"
  }, "c7")

}
function animationEleven() {
  tl.clear();
  tl.to(".image-6a", {
    y: "0"
  }, "h6")
  .to("#header6, .subtext6, .footer-left-text6", {
    y: "0"
  }, "h6")
  .to("#Opaque_Ring", {
    strokeDasharray: "162% 1000",
  }, "h6")
  .to(".upper-text6, .middle-text6, .lower-text6", {
    y: "0"
  }, "h6")
}

// Carousel
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:0,
  nav:false,
  // autoplay: true,
  // autoplayTimeout: 4000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
