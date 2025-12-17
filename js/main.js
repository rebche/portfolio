// navbar pop-up
window.addEventListener('DOMContentLoaded', () => {
    let prevScrollPosition = window.scrollY;
    window.addEventListener("scroll", fade);
    
    function fade() {
        let currentScrollPosition = window.scrollY;
    
        if (prevScrollPosition > currentScrollPosition) {
            document.getElementById("navbar").style.bottom = "0";
        }
        else {
            document.getElementById("navbar").style.bottom = "-100px";
        }
    
        prevScrollPosition = currentScrollPosition;
    }
})

// drop-down for work page

function dropdown(project, event) {
    const content = document.getElementById(project);
    const arrow = event.target;

    content.classList.toggle("show");


    if (content.classList.contains("show")) {
        arrow.src = arrow.dataset.upArrow;
    }
    else {
        arrow.src = arrow.dataset.downArrow;
    }
}


window.onclick = function(event) {
    if (!event.target.closest(".dropdown-arrow")) {
        var dropdowns = document.getElementsByClassName("content");
        var arrows = document.querySelectorAll(".dropdown-arrow");

        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }

        arrows.forEach(function(arrow) {
            arrow.src = arrow.dataset.downArrow;
        });
    }
}
// snackbar pop-up
function snackbar() {
    var x = document.getElementById("snackbar");

    x.className = "show";

    setTimeout(function(){x.className = x.className.replace("show", "");}, 3000);
}

// home page greeting animation + fade

window.addEventListener('DOMContentLoaded', () => {
    var greetings = ["Hello!", "你好!"];
    var counter = 1;
    var currentLanguage = document.getElementById('greeting');
    setInterval(changeLanguage, 3500);

    function changeLanguage() {
        currentLanguage.style.opacity = '0';
        setTimeout(() => {
        currentLanguage.innerHTML = greetings[counter];
        counter++;
        if (counter >= greetings.length) {counter = 0;}   
        currentLanguage.style.opacity = '1';
        }, 500);
    }

})


// candle maker lightbox

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

var slideIndices = {};
// showSlides(slideIndex);

function initModal(modalId) {
    if (!slideIndices[modalId]) {
        slideIndices[modalId] = 1;
        showSlides(modalId, slideIndices[modalId]);
    }
}

// next/prev controls
function plusSlides(modalId, n) {
    showSlides(modalId, slideIndices[modalId] += n);
}

// thumbnail image controls

function currentSlide(modalId, n) {
    showSlides(modalId, slideIndices[modalId] = n);
}

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("thumbnail");
//     var captionText = document.getElementById("caption");

//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }

//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     captionText.innerHTML = dots[slideIndex-1].alt;

// }


function showSlides(modalId, n) {
    var modal = document.getElementById(modalId);
    var slides = modal.getElementsByClassName("mySlides");
    var dots = modal.getElementsByClassName("thumbnail");
    var captionText = modal.querySelector("#caption");

    if (n > slides.length) {slideIndices[modalId] = 1}
    if (n < 1) {slideIndices[modalId] = slides.length}
    
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndices[modalId]-1].style.display = "block";
    dots[slideIndices[modalId]-1].className += " active";
    captionText.innerHTML = dots[slideIndices[modalId]-1].alt;
}
