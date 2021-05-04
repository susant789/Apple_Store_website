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
console.log(divs)
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
let y = 0;
let rotate = ()=>{
    setInterval(()=>{
        let phone = document.querySelector(".phone");
        phone.style.transform = `rotateY(${y++}deg)`;
    },100)
    
}
rotate();