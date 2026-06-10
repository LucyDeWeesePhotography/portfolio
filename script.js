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
        // Clicks the button -> plays the video -> hides the button
        playButton.addEventListener('click', () => {
            video.play();
            playButton.classList.add('is-hidden');
        });

        // Brings the button back if they pause using browser video controls
        video.addEventListener('pause', () => {
            playButton.classList.remove('is-hidden');
        });

        // Fallback: hides the button if they somehow start it without clicking the button itself
        video.addEventListener('play', () => {
            playButton.classList.add('is-hidden');
        });
    }
});