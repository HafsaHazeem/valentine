document.addEventListener('DOMContentLoaded', function() {
    const hiddenImages = document.querySelector('.hidden-images');
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');

    let currentIndex = 0;

    // Hide all images initially
    const images = hiddenImages.querySelectorAll('img');
    images.forEach((image, index) => {
        if (index !== currentIndex) {
            image.style.display = 'none';
        }
    });

    // Function to show the next image
    function showNextImage() {
        if (currentIndex < images.length - 1) {
            images[currentIndex].style.display = 'none';
            currentIndex++;
            images[currentIndex].style.display = 'block';
        }
    }

    // Function to show the previous image
    function showPrevImage() {
        if (currentIndex > 0) {
            images[currentIndex].style.display = 'none';
            currentIndex--;
            images[currentIndex].style.display = 'block';
        }
    }

    // Event listeners for next and previous buttons
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
});
