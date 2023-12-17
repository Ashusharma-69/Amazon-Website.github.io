document.querySelector('.l-btn').addEventListener('click',(event)=>{
    document.querySelector('.product-slide').scrollLeft -= 1100;
    event.preventDefault();
})
// The Element.scrollLeft property gets or sets the number of pixels that an element's content is scrolled from its left edge.
document.querySelector('.r-btn').addEventListener('click',(event)=>{
        document.querySelector('.product-slide').scrollLeft += 1100;
        event.preventDefault();
})

document.querySelector('.l-btn2').addEventListener('click',(event)=>{
    document.querySelector('.product-slide2').scrollLeft -= 1100;
    event.preventDefault();
})
document.querySelector('.r-btn2').addEventListener('click',(event)=>{
    document.querySelector('.product-slide2').scrollLeft += 1100;
    event.preventDefault();
})


let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnRight = document.getElementById("slide-btn-right");
let imgItems = document.querySelectorAll(".image-item");

let startSlider = 0;
let endSlider = (imgItems.length - 1) * 100;

slideBtnLeft.addEventListener("click", handleLiftbtn)

function handleLiftbtn (){
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    }

    imgItems.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    });
}


slideBtnRight.addEventListener("click",handleRightbtn)
 
function handleRightbtn(){
    if (startSlider > -endSlider) {
        startSlider = startSlider - 100;
    }

    imgItems.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    });
}

function renderSlideAuto(){
   if (startSlider > -endSlider+100){
        handleRightbtn()
    }
    else{
        startSlider = 0;
    }
}
setInterval(renderSlideAuto,2000);


const sidebarNavigationE1 = document.getElementById("sidebar-container-navigation")
const sidebarOpenNavigationE1 = document.getElementById("open-nav-sidebar")
const sidebarCloseNavigationE1 = document.getElementById("sidebar-navigation-close")

console.log(sidebarNavigationE1)


sidebarOpenNavigationE1.addEventListener("click",()=>{
    sidebarNavigationE1.classList.toggle("sidebar-show")
})

sidebarCloseNavigationE1.addEventListener("click", ()=>{
    sidebarNavigationE1.classList.toggle("sidebar-show")
})
