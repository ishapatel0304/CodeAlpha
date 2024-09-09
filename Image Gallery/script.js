let currentIndex = 0;
const images = document.querySelectorAll('.image-item');

// Function to show the image at the current index
function showImage(index) {
    images.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

// Function to show the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Function to show the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Initialize the gallery by showing the first image
showImage(currentIndex);
