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