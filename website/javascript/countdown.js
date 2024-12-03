
function updateCountdown() {
    const eventCards = document.querySelectorAll('.event-card');  
    eventCards.forEach(card => {
        const eventDate = new Date(card.getAttribute('data-date'));
        const countdownElement = card.querySelector('.countdown'); 

       
        const now = new Date();

        
        const timeRemaining = eventDate - now;

        
        if (timeRemaining <= 0) {
            countdownElement.textContent = "Event is over";
            return; // Skip the rest of the code for this event
        }

       
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update the countdown text
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    });
}


setInterval(updateCountdown, 1000);


updateCountdown();
