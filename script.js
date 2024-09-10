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
            setTimeout(() => {
                typewriterElement.innerHTML = '';
                i = 0;
                typeWriter();
            }, 2000); 
        }
    }

    typeWriter();

    const styleLink = document.getElementById('styleLink');
    const styleText = document.getElementById('styleText');

    styleLink.addEventListener('click', (e) => {
        e.preventDefault();
        styleText.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!styleText.contains(e.target) && e.target !== styleLink) {
            styleText.classList.remove('active');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});