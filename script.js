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

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});