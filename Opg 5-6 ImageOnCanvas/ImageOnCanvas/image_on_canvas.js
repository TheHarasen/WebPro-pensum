window.onload = function() {
    class Sprite {
        constructor(imageSrc, x, y, width, height) {
            this.image = new Image();
            this.image.src = imageSrc; // Indlæser billede
            this.x = x; // Startposition på x-aksen
            this.y = y; // Startposition på y-aksen
            this.width = width; // Bredde på sprite
            this.height = height; // Højde på sprite
        }

        // Metode til at tegne Sprite på canvas
        draw(ctx) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }

        // Metode til at opdatere positionen af sprite
        update(newX, newY) {
            this.x = newX;
            this.y = newY;
        }
    }

    // Opretter et Sprite-objekt (f.eks. en bold)
    let ball = new Sprite('ball.png', 0, 0, 50, 50);

    let isDragging = false;
    let startX, startY;
    let startPosition = { boxX: 0, boxY: 0 };

    const canvasSelector = '#canvas';
    const canvas = document.querySelector(canvasSelector);
    const ctx = canvas.getContext('2d');

    // Håndtering af musens events
    const onMouseDown = function(e) {
        let mouseX = getX(e);
        let mouseY = getY(e);

        // Tjek om musen er over bolden
        if (mouseX >= ball.x && mouseX <= ball.x + ball.width &&
            mouseY >= ball.y && mouseY <= ball.y + ball.height) {
            isDragging = true;
            startX = mouseX;
            startY = mouseY;
            startPosition.boxX = ball.x;
            startPosition.boxY = ball.y;
        }
    };

    const onMouseMove = function(e) {
        if (isDragging) {
            let mouseX = getX(e);
            let mouseY = getY(e);

            let dx = mouseX - startX;
            let dy = mouseY - startY;

            ball.x = startPosition.boxX + dx;
            ball.y = startPosition.boxY + dy;

            // Tegn bolden
            render();
        }
    };

    const onMouseUp = function() {
        isDragging = false;
    };

    // Funktion til at få musens x- og y-koordinater
    const getX = function(e) {
        return e.clientX - canvas.getBoundingClientRect().left;
    };

    const getY = function(e) {
        return e.clientY - canvas.getBoundingClientRect().top;
    };

    // Funktion til at tegne på canvas
    const render = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Ryd canvas

        // Baggrund
        ctx.fillStyle = '#FFB';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Tegn bolden
        ball.draw(ctx); // Tegn bolden på canvas
    };

    // Når billedet er indlæst, så kør render-funktionen
    ball.image.onload = function() {
        render(); // Initial render
    };

    // Håndtering af musens events
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
};