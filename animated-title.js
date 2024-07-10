document.addEventListener('DOMContentLoaded', function() {
    const messages = ["Willkommen!", "Schön, dass du hier bist!", "Viel Spaß auf unserer Seite!"];
    let currentMessage = 0;
    let currentChar = 0;
    let title = '';

    function animateTitle() {
        if (currentChar < messages[currentMessage].length) {
            title += messages[currentMessage].charAt(currentChar);
            currentChar++;
            document.title = title;
            setTimeout(animateTitle, 200); // Geschwindigkeit der Zeichen
        } else {
            setTimeout(nextMessage, 1000); // Zeit bis zur nächsten Nachricht
        }
    }

    function nextMessage() {
        currentChar = 0;
        title = '';
        currentMessage = (currentMessage + 1) % messages.length;
        animateTitle();
    }

    animateTitle();
});
