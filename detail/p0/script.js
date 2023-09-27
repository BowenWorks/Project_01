$(document).ready(function () {
    var isOpen = false;
    var $toggleText = $('.details-right .toggle-text');
    var $toggleButton = $('#toggle-button');

    $toggleButton.on('click', function () {
        isOpen = !isOpen;
        if (isOpen) {
            $toggleText.addClass('expanded');
            $toggleText.css('max-height', 'none');
            $toggleButton.text('Show Less');
        } else {
            $toggleText.removeClass('expanded');
            $toggleText.css('max-height', '100px'); // Adjust the height as needed
            $toggleButton.text('Read More');
            // Scroll to the top of the .details-right container
            $('html, body').animate(
                {
                    scrollTop: $toggleText.parent().offset().top - 50, // Adjust the offset as needed
                },
                500 // Duration of the scroll animation (in milliseconds)
            );
        }
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const beforeImage = document.querySelector(".before-image");
    const afterImage = document.querySelector(".after-image");

    function toggleImages() {
        beforeImage.classList.toggle("hidden");
        afterImage.classList.toggle("hidden");
    }

    // Toggle images every 3 seconds (3000 milliseconds)
    setInterval(toggleImages, 3000);
});



