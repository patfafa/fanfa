document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    const categories = document.querySelectorAll('.category');
    const svg = document.getElementById('creative-connections');

    function createChaoticPath(start, end) {
        const midX = (start.x + end.x) / 2;
        const midY = (start.y + end.y) / 2;
        
        const controlPoint1 = {
            x: midX + (Math.random() - 0.5) * 200,
            y: midY + (Math.random() - 0.5) * 200
        };
        
        const controlPoint2 = {
            x: midX + (Math.random() - 0.5) * 200,
            y: midY + (Math.random() - 0.5) * 200
        };

        return `M${start.x},${start.y} C${controlPoint1.x},${controlPoint1.y} ${controlPoint2.x},${controlPoint2.y} ${end.x},${end.y}`;
    }

    function updateConnections() {
        const logoRect = logo.getBoundingClientRect();
        const logoCenter = {
            x: logoRect.left + logoRect.width / 2,
            y: logoRect.top + logoRect.height / 2
        };

        categories.forEach((category) => {
            const rect = category.getBoundingClientRect();
            const center = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            };

            const path = document.getElementById(`path-${category.id}`);
            path.setAttribute('d', createChaoticPath(logoCenter, center));
        });
    }

    function animatePathOnHover(category) {
        const path = document.getElementById(`path-${category.id}`);
        anime({
            targets: path,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            direction: 'alternate',
            loop: true
        });
    }

    function resetPathAnimation(category) {
        const path = document.getElementById(`path-${category.id}`);
        anime.remove(path);
        path.setAttribute('stroke-dasharray', '');
        path.setAttribute('stroke-dashoffset', '');
    }

    window.addEventListener('resize', updateConnections);
    updateConnections();

    categories.forEach(category => {
        category.addEventListener('mouseenter', () => {
            animatePathOnHover(category);
            anime({
                targets: category,
                scale: 1.1,
                color: '#8e44ad',
                duration: 300,
                easing: 'easeOutElastic(1, .5)'
            });
        });

        category.addEventListener('mouseleave', () => {
            resetPathAnimation(category);
            anime({
                targets: category,
                scale: 1,
                color: '#333',
                duration: 300,
                easing: 'easeInElastic(1, .5)'
            });
        });
    });

    // Initial animation
    anime({
        targets: '#creative-connections path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
    });
});