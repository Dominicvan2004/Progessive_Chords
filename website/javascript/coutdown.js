// Function to calculate and update the countdown timer for each event
function updateCountdown() {
    const eventCards = document.querySelectorAll('.event-card');  // Get all event cards

    eventCards.forEach(card => {
        const eventDate = new Date(card.getAttribute('data-date')); // Get event date from data attribute
        const countdownElement = card.querySelector('.countdown'); // Find the countdown span in the card

        // Get the current date and time
        const now = new Date();

        // Calculate the time remaining in milliseconds
        const timeRemaining = eventDate - now;

        // If the event has passed, display 'Event is over'
        if (timeRemaining <= 0) {
            countdownElement.textContent = "Event is over";
            return; // Skip the rest of the code for this event
        }

        // Calculate days, hours, minutes, and seconds remaining
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update the countdown text
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    });
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial countdown update
updateCountdown();
