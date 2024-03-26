const imgBanner = document.querySelector(".banner__all-img");
const chevronLeft = document.querySelector('.chevron_left');
const chevronRight = document.querySelector('.chevron_right');
const dotsContainer = document.querySelector('.dots');
const slides = imgBanner.querySelectorAll("img");
let currentIndex = 0;

function createDots() {
    slides.forEach((slide, index) => {
        let bulletElement = document.createElement("a");
        bulletElement.href = '#';
        bulletElement.classList.add("dot");
        bulletElement.addEventListener('click', () => {
            changeSlide(index);
        });
        dotsContainer.appendChild(bulletElement);
    });
}

function changeSlide(index) {
    currentIndex = index;
    updateCarouselContent();
}

chevronRight.addEventListener('click', () => {
    changeSlide((currentIndex + 1) % slides.length);
});

chevronLeft.addEventListener('click', () => {
    changeSlide((currentIndex - 1 + slides.length) % slides.length);
});

createDots();

function updateCarouselContent() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
        slide.style.display = index === currentIndex ? "block" : "none";
    });

    const dotElements = document.querySelectorAll('.dot');
    dotElements.forEach((dot, index) => {
        dot.classList.toggle('dot_selected', index === currentIndex);
    });
}

updateCarouselContent();
