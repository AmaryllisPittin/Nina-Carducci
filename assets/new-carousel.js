const carousel = document.getElementById("carouselExampleIndicators");
const slides = carousel.querySelectorAll(".carousel-item");
const chevronLeft = carousel.querySelector(".carousel-control-prev");
const chevronRight = carousel.querySelector(".carousel-control-next");
const dotsContainer = carousel.querySelector(".carousel-indicators");

let currentIndex = 0;

function changeSlide(index) {
    currentIndex = index;
    updateCarouselContent();
}

chevronRight.addEventListener("click", () => {
    changeSlide((currentIndex + 1) % slides.length);
});

chevronLeft.addEventListener("click", () => {
    changeSlide((currentIndex - 1 + slides.length) % slides.length);
});

function updateCarouselContent() {
    slides.forEach((slide, index) => {
        const isActive = index === currentIndex;
        slide.classList.toggle("active", isActive);
        slide.style.display = isActive ? "block" : "none";

        const picture = slide.querySelector("picture");
        const sources = picture.querySelectorAll("source");

        sources.forEach(source => {
            const mediaQuery = source.getAttribute("media");
            const matchMedia = window.matchMedia(mediaQuery);

            if (matchMedia.matches) {
                const srcset = source.getAttribute("srcset");
                const img = slide.querySelector("img");
                img.src = srcset;
            }
        });
    });

    const dotElements = dotsContainer.querySelectorAll("button");
    dotElements.forEach((dot, index) => {
        dot.setAttribute("aria-current", index === currentIndex ? "true" : "false");
        dot.classList.toggle("active-dot", index === currentIndex);
    });
}



updateCarouselContent();

