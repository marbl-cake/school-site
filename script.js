function search(){
    const btn = document.getElementById('search-btn');
    const bar = document.getElementById('search-bar');

    bar.classList.toggle('show');  // Mostra/nasconde la barra
    if (bar.classList.contains('show')) {
      bar.focus();  // mette il cursore nella barra
    }
}

function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-images img');
    slideIndex += step;

    if (slideIndex < 0) {
    slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
    slideIndex = 0;
    }

    const newTransformValue = -slideIndex * 100 + '%';
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue})`;
}

