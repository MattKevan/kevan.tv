const triangles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 50; i++) {
    triangles.push(new Triangle());
  }
}

function draw() {
  background(255);
  for (const triangle of triangles) {
    triangle.update();
    triangle.display();
  }
}

class Triangle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(10, 50);
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.rotation = 0;
    this.rotationSpeed = random(-0.05, 0.05);
    this.color = color(255);
    this.collisionOffset = createVector(0, 0);
  }

  update() {
    this.x += this.vx + this.collisionOffset.x;
    this.y += this.vy + this.collisionOffset.y;
    this.rotation += this.rotationSpeed;

    if (this.x < 0 || this.x > width) this.vx = -this.vx;
    if (this.y < 0 || this.y > height) this.vy = -this.vy;

    this.collisionOffset.mult(0.95);

    for (const other of triangles) {
      if (other === this) continue;
      if (this.collidesWith(other)) {
        this.rotationSpeed = -this.rotationSpeed;
      }
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    stroke(0);
    strokeWeight(1);
    fill(this.color);
    triangle(-this.size / 2, this.size / 2, 0, -this.size / 2, this.size / 2, this.size / 2);
    pop();
  }

  collidesWith(other) {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const minDistance = (this.size + other.size) / 2;

    if (distance < minDistance) {
      const overlap = (minDistance - distance) * 0.5;
      const angle = atan2(dy, dx);
      this.collisionOffset.x += cos(angle) * overlap;
      this.collisionOffset.y += sin(angle) * overlap;
      return true;
    }

    return false;
  }
}
