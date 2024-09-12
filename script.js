document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');

    const buttons = {
        'agency-button': 'agency-page',
        'fakes-button': 'fakes-page',
        'universes-button': 'universes-page',
        'case-study-button': 'case-study-page',
        'contact-button': 'contact-page'
    };

    const closeButtons = document.querySelectorAll('.close-button');
    const overlayPages = document.querySelectorAll('.overlay-page');

    setTimeout(() => {
        loadingScreen.style.display = 'none';
        content.style.opacity = '1';
        content.classList.add('animate');
    }, 2500); 

    for (const [buttonId, pageId] of Object.entries(buttons)) {
        const button = document.getElementById(buttonId);
        const page = document.getElementById(pageId);
        
        button.addEventListener('click', () => {
            page.style.display = 'flex';
        });
    }

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            overlayPages.forEach(page => {
                page.style.display = 'none';
            });
        });
    });
});