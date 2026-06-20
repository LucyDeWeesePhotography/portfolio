// =========================================================================
// INDEPENDENT INTERACTIVE TOGGLE SYSTEM (About Me Page Exclusives)
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const storyToggleBtn = document.getElementById('storyToggleBtn');
    const storyContent = document.getElementById('fullStoryContent');

    if (storyToggleBtn && storyContent) {
        storyToggleBtn.addEventListener('click', function() {
            const isHidden = storyContent.classList.contains('full-story-hidden');
            
            if (isHidden) {
                storyContent.classList.remove('full-story-hidden');
                storyContent.classList.add('full-story-visible');
                this.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
            } else {
                storyContent.classList.remove('full-story-visible');
                storyContent.classList.add('full-story-hidden');
                this.innerHTML = 'Read My Story <i class="fas fa-chevron-down"></i>';
                
                this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    }
});