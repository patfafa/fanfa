document.addEventListener('DOMContentLoaded', function() {
    console.log("Script is running");

    const styleButton = document.getElementById('style-button');
    const strategyButton = document.getElementById('strategy-button');
    const spectacleButton = document.getElementById('spectacle-button');
    const stylePage = document.getElementById('style-page');
    const strategyPage = document.getElementById('strategy-page');
    const spectraclePage = document.getElementById('spectacle-page');
    const closeButtons = document.querySelectorAll('.close-button');

    console.log("Style button:", styleButton);
    console.log("Strategy button:", strategyButton);
    console.log("Spectacle button:", spectacleButton);
    console.log("Style page:", stylePage);
    console.log("Strategy page:", strategyPage);
    console.log("Spectacle page:", spectraclePage);

    function showPage(page) {
        if (page) {
            console.log("Showing page:", page);
            page.classList.add('active');
        } else {
            console.error("Attempted to show a page that doesn't exist");
        }
    }

    function hidePage(page) {
        if (page) {
            console.log("Hiding page:", page);
            page.classList.remove('active');
        }
    }

    if (styleButton) {
        styleButton.addEventListener('click', () => {
            console.log("Style button clicked");
            showPage(stylePage);
        });
    } else {
        console.error("Style button not found");
    }

    if (strategyButton) {
        strategyButton.addEventListener('click', () => {
            console.log("Strategy button clicked");
            showPage(strategyPage);
        });
    } else {
        console.error("Strategy button not found");
    }

    if (spectacleButton) {
        spectacleButton.addEventListener('click', () => {
            console.log("Spectacle button clicked");
            showPage(spectraclePage);
        });
    } else {
        console.error("Spectacle button not found");
    }

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log("Close button clicked");
            hidePage(stylePage);
            hidePage(strategyPage);
            hidePage(spectraclePage);
        });
    });

    const loadingScreen = document.getElementById('loading-screen');
    const loadingBar = document.getElementById('loading-bar');
    const content = document.getElementById('content');

    let progress = 0;
    const intervalId = setInterval(() => {
        progress += Math.random() * 3; 
        if (progress >= 100) {
            progress = 100;
            clearInterval(intervalId);
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                content.style.display = 'block';
                animateContent();
            }, 500);
        }
        loadingBar.style.width = `${progress}%`;
    }, 50);

    // Custom cursor
    document.addEventListener('mousemove', (e) => {
        const cursor = document.getElementById('cursor');
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Hover effect for cursor
    document.querySelectorAll('.text-line, .nav-item, .logo, .close-button').forEach(item => {
        item.addEventListener('mouseenter', () => {
            document.getElementById('cursor').classList.add('cursor-hover');
        });
        item.addEventListener('mouseleave', () => {
            document.getElementById('cursor').classList.remove('cursor-hover');
        });
    });

    // Info page toggle
    infoButton.addEventListener('click', () => {
        infoPage.classList.add('active');
    });

    // Contact page toggle
    contactButton.addEventListener('click', () => {
        contactPage.classList.add('active');
    });

    // Close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            infoPage.classList.remove('active');
            contactPage.classList.remove('active');
        });
    });

    function animateContent() {
        const elements = document.querySelectorAll('.text-line, .nav-item');
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            setTimeout(() => {
                el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
});