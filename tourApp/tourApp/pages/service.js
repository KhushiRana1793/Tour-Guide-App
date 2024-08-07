const carouselContainer = document.getElementById("carouselContainer");
let currentIndex = 0;

function showSlide(index) {
  currentIndex = index;
  const translateValue = -currentIndex * 100 + "%";
  carouselContainer.style.transform = "translateX(" + translateValue + ")";
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + carouselContainer.children.length) %
    carouselContainer.children.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselContainer.children.length;
  showSlide(currentIndex);
}

setInterval(() => {
  nextSlide();
}, 2000);
