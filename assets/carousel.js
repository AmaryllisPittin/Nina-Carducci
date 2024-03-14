const slides = [
    {
        "imageMobile": "./assets/images/slider/ryoji-iwata-wUZjnOv7t0g-unsplash-mobile.webp",
        "imageDesktop": "./assets/images/slider/ryoji-iwata-wUZjnOv7t0g-unsplash.webp",
    },
    {
        "imageMobile": "./assets/images/slider/nicholas-green-nPz8akkUmDI-unsplash.webp",
        "imageDesktop": "./assets/images/slider/nicholas-green-nPz8akkUmDI-unsplash.webp",
    },
    {
        "imageMobile": "./assets/images/slider/edward-cisneros-3_h6-1NPDGw-unsplash.webp",
        "imageDesktop": "./assets/images/slider/edward-cisneros-3_h6-1NPDGw-unsplash.webp",
    }
];

const dotsContainer = document.querySelector('.dots');
const imgBanner = document.querySelector(".banner__all-img");
const chevronLeft = document.querySelector('.chevron_left');
const chevronRight = document.querySelector('.chevron_right');

let currentIndex = 0;

function updateCarouselContent() {
    const slide = slides[currentIndex];
    const screenWidth = window.innerWidth;

    // Créer l'élément picture
    const pictureElement = document.createElement("picture");

    // Créer les balises sources
    const sourceMobile = document.createElement("source");
    sourceMobile.srcset = slide.imageMobile;
    sourceMobile.media = "(max-width: 768px)";
    sourceMobile.type = "image/webp";

    const sourceDesktop = document.createElement("source");
    sourceDesktop.srcset = slide.imageDesktop;
    sourceDesktop.type = "image/webp";

    // Créer l'élément img de secours
    const imageElement = document.createElement("img");
    imageElement.src = slide.imageDesktop; // Image de secours pour les navigateurs ne prenant pas en charge la balise picture
    imageElement.alt = "Slide " + (currentIndex + 1);
    imageElement.classList.add("banner-img");

    // Ajouter les balises sources et l'élément img à la balise picture
    pictureElement.appendChild(sourceMobile);
    pictureElement.appendChild(sourceDesktop);
    pictureElement.appendChild(imageElement);

    // Remplacer le contenu de la bannière
    imgBanner.innerHTML = '';
    imgBanner.appendChild(pictureElement);
}

function createDots() {
    for (let i = 0; i < slides.length; i++) {
        let bulletElement = document.createElement("a");
        bulletElement.href = '#';
        bulletElement.classList.add("dot");
        dotsContainer.appendChild(bulletElement);
    }
}

function updateDots() {
    const dotElements = document.querySelectorAll('.dot');
    dotElements.forEach((dot, index) => {
        dot.classList.toggle('dot_selected', index === currentIndex);
    });
}

function changeSlide(direction) {
    if (direction === 'right') {
        currentIndex = (currentIndex + 1) % slides.length;
    } else {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }
    updateCarouselContent();
    updateDots();
}

// Ajouter des écouteurs d'événements pour les flèches gauche et droite
chevronRight.addEventListener('click', () => {
    changeSlide('right');
});

chevronLeft.addEventListener('click', () => {
    changeSlide('left');
});

// Créer les points
createDots();

// Mettre à jour le contenu du carousel et les points
updateCarouselContent();
updateDots();
