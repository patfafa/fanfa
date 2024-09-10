document.addEventListener('DOMContentLoaded', () => {
    const text = "We're FA&FA";
    const typewriterElement = document.getElementById('typewriter');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Reset and start over after a delay
            setTimeout(() => {
                typewriterElement.innerHTML = '';
                i = 0;
                typeWriter();
            }, 2000); // Wait 2 seconds before restarting
        }
    }

    typeWriter();

    // Style text toggle functionality with animation
    const styleLink = document.getElementById('styleLink');
    const styleText = document.getElementById('styleText');

    styleLink.addEventListener('click', (e) => {
        e.preventDefault();
        styleText.classList.toggle('active');
    });

    // Close the text when clicking outside
    document.addEventListener('click', (e) => {
        if (!styleText.contains(e.target) && e.target !== styleLink) {
            styleText.classList.remove('active');
        }
    });

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // You can add more interactivity here as needed
});