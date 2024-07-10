document.addEventListener('DOMContentLoaded', function() {
    const originalTitle = document.title;
    const messages = ["Komm zurück!", "Wir vermissen dich!"];
    let currentMessage = 0;
    let interval;

    function startAnimation() {
        if (!interval) {
            interval = setInterval(function() {
                document.title = messages[currentMessage];
                currentMessage = (currentMessage + 1) % messages.length;
            }, 1000); // Wechsel alle 1 Sekunde
        }
    }

    function stopAnimation() {
        clearInterval(interval);
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
