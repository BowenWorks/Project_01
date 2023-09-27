$(document).ready(function () {
    var isOpen = false;
    var $toggleText = $('.details-right .toggle-text');
    var $toggleButton = $('#toggle-button');

    $toggleButton.on('click', function () {
        if (isOpen) {
            $toggleText.removeClass('expanded');
            $toggleButton.text('Read More');
            // Scroll up to the top of the project container
            $('html, body').animate(
                {
                    scrollTop: $('.project-container').offset().top - 50, // Adjust the offset as needed
                },
                500 // Duration of the scroll animation (in milliseconds)
            );
        } else {
            $toggleText.addClass('expanded');
            $toggleButton.text('Show Less');
            // Scroll down to the expanded text
            $('html, body').animate(
                {
                    scrollTop: $toggleText.offset().top - 50, // Adjust the offset as needed
                },
                500 // Duration of the scroll animation (in milliseconds)
            );
        }
        isOpen = !isOpen;
    });
});

// Get all video elements with class "large-video"
const videoElements = document.querySelectorAll(".large-image video");

// Function to apply grayscale filter to the video
function applyGrayscaleFilter(video) {
    video.style.filter = "grayscale(100%)"; // Set grayscale filter to 100%
}

// Function to remove the grayscale filter from the video
function removeGrayscaleFilter(video) {
    video.style.filter = "none"; // Remove the filter
}

// Iterate through each video element and add event listeners
videoElements.forEach((video, index) => {
    video.addEventListener("mouseenter", () => {
        video.play(); // Autoplay when cursor hovers over the video
        removeGrayscaleFilter(video); // Remove grayscale filter
    });

    video.addEventListener("mouseleave", () => {
        video.pause(); // Pause when cursor leaves the video
        video.currentTime = 0; // Reset to the beginning of the video
        applyGrayscaleFilter(video); // Apply grayscale filter
    });
});

// Apply grayscale filter to all videos initially
videoElements.forEach((video) => {
    applyGrayscaleFilter(video);
});


const arrow = document.querySelector('.arrow');
const videoContainer = document.querySelector('.video-container');

// Function to update arrow position based on video container scroll
function updateArrowPosition() {
    const scrollLeft = videoContainer.scrollLeft;
    arrow.style.left = `${850 + scrollLeft}px`; // Adjust left position as needed
}

// Add a scroll event listener to the video container
videoContainer.addEventListener('scroll', updateArrowPosition);

// Initialize arrow position
updateArrowPosition();
