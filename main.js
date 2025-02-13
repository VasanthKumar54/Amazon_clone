function scrollToTop(){
    window.scrollTo(0,0);
}

document.addEventListener('DOMContentLoaded', function () {
    let imgItem = document.querySelectorAll(".image-item");
    let startSlider = 0;
    let endSlider = (imgItem.length-1)*100
    let slideId;
    let prevBtn = document.getElementById('prev-btn');
    let nextBtn = document.getElementById('next-btn');

    console.log(imgItem)

    function slideRight() {
        if(startSlider >= -endSlider + 100){
            startSlider = startSlider - 100;
        }
        else{
            startSlider = 0;
        }

        imgItem.forEach(element => {
            element.style.transition = 'transform 0.2s ease-in-out';
            element.style.transform = `translateX(${startSlider}%)`;
        });
    }

    function slideLeft() {
        if(startSlider < 0){
            startSlider = startSlider + 100;
        }
        else{
            startSlider = -(imgItem.length - 1)*100;
        }

        imgItem.forEach(element => {
            element.style.transition = 'transform 0.2s ease-in-out';
            element.style.transform = `translateX(${startSlider}%)`;
        });
    }

    document.getElementById('slide-btn-left').addEventListener('click', slideLeft);
    document.getElementById('slide-btn-right').addEventListener('click', slideRight);

    //Carousel render automatic

    function renderSlideAuto(){
        slideRight()
        if (startSlider === 0) {
            clearInterval(slideId);
          }
    }

    slideId = setInterval(renderSlideAuto,5000);

    prevBtn.addEventListener('click',()=>{
        clearInterval(slideId);
    })

    nextBtn.addEventListener('click',()=>{
        clearInterval(slideId);
    })
});


//shop slider1 control

let shopItem = document.querySelector(".slider-item ul");
let start = 0;
console.log(shopItem);

let shopLeft = document.querySelector(".shop-left");
let shopRight = document.querySelector(".shop-right");

let shopSliderBtnPrev = document.getElementById("shop-slider-btn-prev");

let shopSliderBtnNext = document.getElementById("shop-slider-btn-next");

shopSliderBtnPrev.addEventListener("click",()=>{
    if(start < 0){
        start += 19;
        
    }

    if(start > -19){
        shopLeft.style.background = '#ffffff73';
        shopLeft.style.color = '#9d9b9b';
    }
    if(start > -76){
        shopRight.style.background = '#fff';
        shopRight.style.color = '#666666';
    }
    
    shopItem.style.transition = 'transform 0.2s ease-in-out'
    shopItem.style.transform = `translateX(${start}%)`;
})

shopSliderBtnNext.addEventListener("click",()=>{

    if(start > -76){
        start -= 19;
    }

    if(start < 0){
        shopLeft.style.background = '#fff';
        shopLeft.style.color = '#666666';
    }
    if(start <= -76){
        shopRight.style.background = '#ffffff73';
        shopRight.style.color = '#9d9b9b';
    }

    shopItem.style.transition = 'transform 0.2s ease-in-out';
    shopItem.style.transform = `translateX(${start}%)`;
    console.log(shopItem.style.transform)
})

// shop slider2 control

let shopItem2 = document.querySelector(".slider2-item ul");
let start2 = 0;
console.log(shopItem);

let shopLeft2 = document.querySelector(".shop2-left");
let shopRight2 = document.querySelector(".shop2-right");

let shopSliderBtnPrev2 = document.getElementById("shop2-slider-btn-prev");

let shopSliderBtnNext2 = document.getElementById("shop2-slider-btn-next");

shopSliderBtnPrev2.addEventListener("click",()=>{
    if(start2 < 0){
        start2 += 20.6;
        
    }

    if(start2 > -20.6){
        shopLeft2.style.background = '#ffffff73';
        shopLeft2.style.color = '#9d9b9b';
    }
    if(start2 > -80.8){
        shopRight2.style.background = '#fff';
        shopRight2.style.color = '#666666';
    }
    
    shopItem2.style.transition = 'transform 0.2s ease-in-out'
    shopItem2.style.transform = `translateX(${start2}%)`;
})

shopSliderBtnNext2.addEventListener("click",()=>{

    if(start2 > -80.8){
        start2 -= 20.6;
    }

    if(start2 < 0){
        shopLeft2.style.background = '#fff';
        shopLeft2.style.color = '#666666';
    }
    if(start2 <= -80.8){
        shopRight2.style.background = '#ffffff73';
        shopRight2.style.color = '#9d9b9b';
    }

    shopItem2.style.transition = 'transform 0.2s ease-in-out';
    shopItem2.style.transform = `translateX(${start2}%)`;
})

// disable inspect

// document.addEventListener("contextmenu",function(e){
//     e.preventDefault()
// },false)

