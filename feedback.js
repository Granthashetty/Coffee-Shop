const seeMoreBtn = document.getElementById('seeMoreBtn');
const hiddenCards = document.querySelectorAll('.review-card.hidden');

seeMoreBtn.addEventListener('click', function() {
    hiddenCards.forEach(card => {
        card.classList.toggle('hidden');
    });

    // Toggle button text between "Show More" and "Show Less"
    if (seeMoreBtn.textContent === 'Show More') {
        seeMoreBtn.textContent = 'Show Less';
    } else {
        seeMoreBtn.textContent = 'Show More';
    }
});
document.querySelector('.back-to-top').addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });