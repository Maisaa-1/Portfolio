document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const textToType = typingElement.textContent;
        typingElement.textContent = '';
        let charIndex = 0;
        function typeText() {
            if (charIndex < textToType.length) {
                typingElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 100);
            }
        }
        setTimeout(typeText, 500);
    }
    const skillContainers = document.querySelectorAll('.proficiency-bar');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const container = entry.target;
            const innerBar = container.querySelector('.progress-bar');
            const level = container.getAttribute('data-level');
            if (entry.isIntersecting) {
                if (innerBar && level) {
                    innerBar.style.width = level;
                }
                observer.unobserve(container);
            } else {
                if (innerBar) {
                    innerBar.style.width = "0%";
                }
            }
        });
    }, {
        threshold: 0.5
    });
    setTimeout(() => {
        skillContainers.forEach(container => {
            const innerBar = container.querySelector('.progress-bar');
            if (innerBar) {
                innerBar.style.width = "0%";
            }
            observer.observe(container);
        });
    }, 50);
});

const flipCards=document.querySelectorAll(".flipping-card")



