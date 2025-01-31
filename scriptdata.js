// Apply Now Button Functionality
function applyNow(position) {
    alert(`You are applying for the ${position} position. Best of luck!`);
}

// Smooth Scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Detect when the card comes into view and trigger movement
const cards = document.querySelectorAll('.custom-card');

// Function to check visibility and apply 'visible' class for animation
function checkVisibility() {
    cards.forEach(card => {
        if (card.getBoundingClientRect().top < window.innerHeight) {
            card.classList.add('visible');
        }
    });
}

// Check visibility on page load and whenever user scrolls
window.addEventListener('scroll', checkVisibility);
document.addEventListener('DOMContentLoaded', checkVisibility);
