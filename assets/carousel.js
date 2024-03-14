const slides = [
	{
		"image":"./assets/images/slider/ryoji-iwata-wUZjnOv7t0g-unsplash.webp",
	},
	{
		"image":"./assets/images/slider/nicholas-green-nPz8akkUmDI-unsplash.webp",
	},
	{
		"image":"./assets/images/slider/edward-cisneros-3_h6-1NPDGw-unsplash.webp",
	}
]


const dotsContainer = document.querySelector('.dots');
const imgBanner = document.querySelector(".banner__all-img");
const chevronLeft = document.querySelector('.chevron_left');
const chevronRight = document.querySelector('.chevron_right');

let currentIndex = 0;

function updateCarouselContent() {
	imgBanner.innerHTML = `<img src=${slides[currentIndex].image} alt="Slide ${currentIndex + 1}" class="banner-img">`;
}

function createDots() {
	for (let i=0; i < slides.length; i++) {
		let bulletElement = document.createElement("a");
		bulletElement.href = '#';
		bulletElement.classList.add("dot");
		dotsContainer.appendChild(bulletElement);
	}
}

function updateDots() {
	const dotElements = document.querySelectorAll('.dot');
	dotElements.forEach((dot, index) =>  {
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

chevronRight.addEventListener('click', () => {
	changeSlide('right');
});

chevronLeft.addEventListener('click', () => {
	changeSlide('left');
});

createDots();
updateCarouselContent();
updateDots();