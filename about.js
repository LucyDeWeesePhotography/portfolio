document.addEventListener('DOMContentLoaded', () => {
    const storyToggleBtn = document.getElementById('storyToggleBtn');
    const storyContent = document.getElementById('fullStoryContent');

    if (storyToggleBtn && storyContent) {
        storyToggleBtn.addEventListener('click', function () {

            const isHidden = storyContent.classList.contains('full-story-hidden');

            if (isHidden) {
                storyContent.classList.remove('full-story-hidden');
                storyContent.classList.add('full-story-visible');

                this.innerHTML = 'Hide Story <i class="fas fa-chevron-up"></i>';
            } else {
                storyContent.classList.remove('full-story-visible');
                storyContent.classList.add('full-story-hidden');

                this.innerHTML = 'Read Full Story <i class="fas fa-chevron-down"></i>';

                this.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }
});