document.addEventListener('DOMContentLoaded', function() {
    const originalTitle = document.title;
    const messages = ["Komm zurück!", "Wir vermissen dich!", "Hier gibt es mehr!"];
    let currentMessage = 0;
    let currentChar = 0;
    let title = '';
    let interval;

    function animateTitle() {
        if (currentChar < messages[currentMessage].length) {
            title += messages[currentMessage].charAt(currentChar);
            currentChar++;
            document.title = title;
            interval = setTimeout(animateTitle, 200); // Geschwindigkeit der Zeichen
        } else {
            currentChar = 0;
            title = '';
            currentMessage = (currentMessage + 1) % messages.length;
            interval = setTimeout(animateTitle, 1000); // Zeit bis zur nächsten Nachricht
        }
    }

    function startAnimation() {
        if (!interval) {
            animateTitle();
        }
    }

    function stopAnimation() {
        clearTimeout(interval);
        interval = null;
        document.title = originalTitle;
    }

    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            startAnimation();
        } else {
            stopAnimation();
        }
    });
});
