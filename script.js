document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');

    // Simulate loading time
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            content.style.opacity = '1';
        }, 500);
    }, 3000); // 3 seconds loading time, adjust as needed

    // Add click event listeners for links
    document.getElementById('our-work').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Our work section is coming soon!');
    });

    document.getElementById('contact').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Contact form is coming soon!');
    });


});