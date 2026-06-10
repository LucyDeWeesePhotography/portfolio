// Mobile Navigation Menu Interaction Controls
const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileNavbar = document.getElementById('mobileNavbar');

// Open menu action
openMenuBtn.addEventListener('click', () => {
    mobileNavbar.classList.add('nav-active');
    document.body.style.overflow = 'hidden'; // Prevents background layout scroll while menu drawer is open
});

// Close menu action
closeMenuBtn.addEventListener('click', () => {
    mobileNavbar.classList.remove('nav-active');
    document.body.style.overflow = 'auto'; // Restores page scroll mechanics
});

// Auto-fallback reset when viewport transitions out of mobile context layout
window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        mobileNavbar.classList.remove('nav-active');
        document.body.style.overflow = 'auto';
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('familyVideo');
    const playButton = document.getElementById('playButton');

    if (video && playButton) {
        // When the custom overlay button is clicked
        playButton.addEventListener('click', () => {
            video.play();
            playButton.classList.add('is-hidden'); // Smoothly hides the button
        });

        // If the user pauses using native video player controls, bring the button back
        video.addEventListener('pause', () => {
            playButton.classList.remove('is-hidden');
        });

        // Safetynet: If video plays by any other means, hide the button
        video.addEventListener('play', () => {
            playButton.classList.add('is-hidden');
        });
    }
});