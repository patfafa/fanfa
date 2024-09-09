document.addEventListener('DOMContentLoaded', () => {
    const paths = document.querySelectorAll('path');

    anime({
        targets: paths,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: (el, i) => i * 250,
        direction: 'alternate',
        loop: true
    });
});