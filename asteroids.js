var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var sentence = "Your sentence here";
var letters = [];
var bullets = [];

// Create the player's ship
var ship = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    speed: 0,
    maxSpeed: 2,
    size: 20,
    dx: 0,
    dy: 0,
    angle: 0,
    rotateSpeed: 0.05, // Increase rotation speed
    friction: 0.99 // Add friction to slow down over time
};
// Create a bullet
function createBullet(x, y, dx, dy) {
    var bullet = {
        x: x,
        y: y,
        speed: 5,
        size: 5,
        dx: dx,
        dy: dy
    };
    bullets.push(bullet);
}

// Create a letter
function createLetter(char, x, y, size) {
    var letter = {
        char: char,
        x: x,
        y: y,
        size: size,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1
    };
    letters.push(letter);
}

// Explode a letter
function explodeLetter(index) {
    var letter = letters[index];
    letters.splice(index, 1);

    // Create smaller letters
    for (var i = 0; i < 5; i++) {
        createLetter(letter.char, letter.x, letter.y, letter.size / 2);
    }
}

// Handle key press
window.addEventListener('keydown', function(e) {
    switch (e.key) {
        case 'ArrowUp':
            ship.speed = ship.maxSpeed;
            break;
        case 'ArrowDown':
            ship.speed = -ship.maxSpeed;
            break;
        case 'ArrowLeft':
            ship.angle -= ship.rotateSpeed;
            break;
        case 'ArrowRight':
            ship.angle += ship.rotateSpeed;
            break;
        case ' ':
            var dx = Math.cos(ship.angle);
            var dy = Math.sin(ship.angle);
            createBullet(ship.x + dx * ship.size, ship.y + dy * ship.size, dx, dy);
            break;
    }
});

window.addEventListener('keyup', function(e) {
    switch (e.key) {
        case 'ArrowUp':
            // Don't set speed to 0
            break;
        case 'ArrowDown':
            ship.speed = 0;
            break;
    }
});

// Update the game state
function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move the ship
    ship.dx = Math.cos(ship.angle) * ship.speed;
    ship.dy = Math.sin(ship.angle) * ship.speed;
    ship.x += ship.dx;
    ship.y += ship.dy;

    // Draw the ship
    ctx.beginPath();
    ctx.moveTo(ship.x + Math.cos(ship.angle) * ship.size, ship.y + Math.sin(ship.angle) * ship.size);
    ctx.lineTo(ship.x + Math.cos(ship.angle + Math.PI * 2 / 3) * ship.size, ship.y + Math.sin(ship.angle + Math.PI * 2 / 3) * ship.size);
    ctx.lineTo(ship.x + Math.cos(ship.angle + Math.PI * 4 / 3) * ship.size, ship.y + Math.sin(ship.angle + Math.PI * 4 / 3) * ship.size);
    ctx.closePath();
    ctx.fill();

    // Move each bullet
    for (var i = 0; i < bullets.length; i++) {
        var bullet = bullets[i];
        bullet.x += bullet.dx * bullet.speed;
        bullet.y += bullet.dy * bullet.speed;

        // Draw the bullet
        ctx.beginPath();
        ctx.arc(bullet.x, bullet.y, bullet.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

        // Check for collisions with letters
        for (var j = 0; j < letters.length; j++) {
            var letter = letters[j];
            var dx = bullet.x - letter.x;
            var dy = bullet.y - letter.y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < bullet.size + letter.size) {
                explodeLetter(j);
                bullets.splice(i, 1);
                break;
            }
        }
    }

    // Move and draw each letter
    for (var i = 0; i < letters.length; i++) {
        var letter = letters[i];
        letter.x += letter.speedX;
        letter.y += letter.speedY;

        ctx.font = letter.size + "px Arial";
        ctx.fillText(letter.char, letter.x, letter.y);
    }

    // Call updateGame again after a delay
    requestAnimationFrame(updateGame);
}

// Create initial letters
for (var i = 0; i < sentence.length; i++) {
    createLetter(sentence[i], Math.random() * canvas.width, Math.random() * canvas.height, 100);
}

// Start the game
updateGame();
