// console.log("************* test if it works yes it does *************")

const Left  = document.querySelector(".Left")
const Right  = document.querySelector(".Right")
const slider  = document.querySelector(".slider")
const images  = document.querySelectorAll(".image")
const bottom  = document.querySelector(".bottom")

let slideNumber = 1;
const length = images.length;

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber ++;
};

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
    slideNumber --;
};

const getFirstSlide = () => {
    slider.style.transform = `translateX(-0px)`;
    slideNumber = 1;
};

const getLastSlide = () => {
    slider.style.transform = `transslatesX({(length - 1)8 800}px)`;
    slideNumber = length;

}

// first click is 800 = 800*1
// second click is 1600 = 800*2
// third click is 2400 = 800*3
// forth click is 3200 = 800*4


Right.addEventListener( "click",() => {
    
    slideNumber < length ? nextSlide()
    :
    getFirstSlide()
    
});


Left.addEventListener( "click",() => {

    slideNumber > 1 ? prevSlide() : getLastSlide()
});

for (let i = 0; i < length; i++){
    const div = document.createElement("div")
    div.className = "button"
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll(".button")
buttons[0].style.backgroundColor ="black";

const resetButton = () => {
    buttons.forEach(button =>{
        button.style.backgroundColor = "transparent";
    });
};

buttons.forEach((button, i) => {
    button.addEventListener( "click",() => {
        resetButton();
        slider.style.transform = `translateX(-${i * 800}px)`;
    });
});
