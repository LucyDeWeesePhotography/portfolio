// Structural Interface Initializations
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MOBILE NAVIGATION MENU CONTROLS ---
    const openMenuBtn = document.getElementById('openMenuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileNavbar = document.getElementById('mobileNavbar');

    if (openMenuBtn && closeMenuBtn && mobileNavbar) {
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

        // --- 1.1 AUTO-CLOSE MENU & SMOOTH SCROLL ON LINK CLICK ---
        const navLinks = mobileNavbar.querySelectorAll('a');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');

                // 1. Immediately close the mobile menu and restore background scrolling
                mobileNavbar.classList.remove('nav-active');
                document.body.style.overflow = 'auto';

                // 2. Handle smooth scrolling for anchor links (#collections, #testimonials)
                if (href && href.includes('#')) {
                    const targetId = href.split('#')[1];
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        e.preventDefault();
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });

        // Auto-fallback reset when viewport transitions out of mobile context layout
        window.addEventListener('resize', () => {
            if (window.innerWidth > 900) {
                mobileNavbar.classList.remove('nav-active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // --- 2. FEATURED VIDEO CONTROLS ---
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

    // --- 3. BRANDING TYPEWRITER REVEAL EFFECT ---
    const nameContainer = document.getElementById('typewriter-name');
    
    if (nameContainer) {
        const nameText = nameContainer.textContent.trim();
        nameContainer.textContent = ''; // Clear static text to prepare for injection
        
        // Break string into an array of letters
        const letters = nameText.split('');
        
        letters.forEach((char, index) => {
            const span = document.createElement('span');
            
            if (char === ' ') {
                span.classList.add('space');
            } else {
                span.textContent = char;
            }
            
            // Adjusted from 0.07s to 0.20s for a luxurious, unhurried reveal rhythm
            span.style.animationDelay = `${index * 0.20}s`;
            
            nameContainer.appendChild(span);
        });
    }
});