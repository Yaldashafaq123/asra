

//menu
var navLink =document.getElementById("navLink");
function hideMenu(){
navLink.style.right="-200px";
}
function showMenu(){
navLink.style.right="0";
}

//slide
const slides = document.querySelectorAll(".slides img");
let slideIndex= 0;
let intervalId= null;

//initializeSlider();
document.addEventListener("DOMContentLoaded",initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide")
        intervalId= setInterval(nextslide, 5000);
    }

}

function showSlide(index ){

    if(index >= slides.length){
        slideIndex= 0;

    }
    else if(index < 0)
        {
        slideIndex=slides.length-1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevslide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextslide(){
    slideIndex++;
    showSlide(slideIndex);
}