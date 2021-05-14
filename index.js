// slideshow 
const slideshowd = ()=>{
    for (i=1;i<=5;i++){
        let div = document.createElement("div");
        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`
        i===1 && div.classList.add("change");
        document.querySelector(".slideshow").appendChild(div)
    }
}

slideshowd();
var divs = document.querySelectorAll(".slideshow div");
var a = 1;

const slideshows = () =>{
    setInterval(()=>{
        a++
        let div = document.querySelector(".slideshow .change");
        div.classList.remove("change");
        if(a < divs.length){
            div.nextElementSibling.classList.add("change");
        }else{
            divs[0].classList.add("change")
            a = 1;
        }
        
    },10000)
}

slideshows();

// phoneanimation
var y = 0;
var x = 0;
var z = 0;
let interval;
let bool = true;
var phone = document.querySelector(".phone");

let xtop = document.querySelector(".x-top").
addEventListener("click",()=>{
    phone.style.transform = `rotateX(${x = x+20}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
let xbottom = document.querySelector(".x-bottom").
addEventListener("click",()=>{
    phone.style.transform = `rotateX(${x = x-20}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
let yleft = document.querySelector(".y-left").
addEventListener("click",()=>{
    phone.style.transform = `rotateX(${x}deg) rotateY(${y = y+20}deg) rotateZ(${z}deg)`;
});
let yright = document.querySelector(".y-right").
addEventListener("click",()=>{
    phone.style.transform = `rotateX(${x}deg) rotateY(${y-=20}deg) rotateZ(${z}deg)`;
});
let zleft = document.querySelector(".z-left").
addEventListener("click",()=>{
    phone.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z+=20}deg)`;
});
let zright = document.querySelector(".z-right").
addEventListener("click",()=>{
    phone.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z-=20}deg)`;
});
let rotate = ()=>{
    if(bool){
        interval = setInterval(()=>{
            phone.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
        },100)
    }else{
        clearInterval(interval)
    }
    
    
}
rotate();

document.querySelector(".controls").
addEventListener("mouseover",()=>{
    bool=false;
    rotate();
});
document.querySelector(".controls").
addEventListener("mouseout",()=>{
    bool=true;
    rotate();
});

// mac
const section3 = document.querySelector(".mac");
// scrolling animation
window.addEventListener("scroll",()=>{
    if(window.pageYOffset + window.innerHeight >= section3.offsetTop
         + section3.offsetHeight / 2){
            // console.log("scrolled")
            section3.classList.add("change1");
    }
})

// watches section
// document.querySelectorAll(".watch-control").forEach(c=>{
//     c.addEventListener("click",e=>{
//         e.preventDefault;
//     })
// })

const bands = document.querySelector(".watch-bands");
const cases = document.querySelector(".watch-cases");

const ctop = document.querySelector(".c-top");
const cbottom = document.querySelector(".c-bottom");
const cright = document.querySelector(".c-right");
const cleft = document.querySelector(".c-left");

let axisx = 0;
let axisy = 0;
const hidecon=()=>{
    if(axisy === -280){
        ctop.classList.add("hidden-control")
    }else{
        ctop.classList.remove("hidden-control")
    }
    if(axisy === 280){
        cbottom.classList.add("hidden-control")
    }else{
        cbottom.classList.remove("hidden-control")
    }
    if(axisx === -280){
        cright.classList.add("hidden-control")
    }else{
        cright.classList.remove("hidden-control")
    }
    if(axisx === 280){
        cleft.classList.add("hidden-control")
    }else{
        cleft.classList.remove("hidden-control")
    }
} 


ctop.addEventListener("click",()=>{
    cases.style.marginTop = `${axisy-=70}rem`
    hidecon();
})
cbottom.addEventListener("click",()=>{
    cases.style.marginTop = `${axisy+=70}rem`
    hidecon();
})
cright.addEventListener("click",()=>{
    bands.style.marginRight = `${axisx-=70}rem`
    hidecon();
})
cleft.addEventListener("click",()=>{
    bands.style.marginRight = `${axisx+=70}rem`
    hidecon();
})

