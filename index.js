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