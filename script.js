document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');

    let width, height;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // Mouse Interaction Setup
    const mouse = {
        x: null,
        y: null,
        radius: 200 // Increased distance within which particles are affected
    };

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Particle Configuration
    const particleCount = 300; // Increased volume for brighter smoke style
    const particles = [];
    const colors = [
        'rgba(255, 255, 255, 0.6)', // Pure white
        'rgba(240, 240, 245, 0.4)', // Soft blue-white
        'rgba(200, 200, 210, 0.2)'  // Translucent grey
    ];

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            // Base slowly drifting speed
            this.baseVx = (Math.random() - 0.5) * 0.3;
            this.baseVy = (Math.random() - 0.5) * 0.3;
            this.vx = this.baseVx;
            this.vy = this.baseVy;
            this.size = Math.random() * 2 + 0.5;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            // Subtly flickering glow
            this.alpha = Math.random() * 0.5 + 0.1;
            this.alphaDirection = Math.random() > 0.5 ? 1 : -1;
            this.alphaSpeed = Math.random() * 0.005 + 0.001;
        }

        update() {
            // Interactive Mouse Repulsion
            if (mouse.x != null && mouse.y != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    // Calculate repulsion force
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    // Stronger near the center, decaying outward
                    const force = (mouse.radius - distance) / mouse.radius;
                    // Increased repulsion multiplier from 2 to 4 for more dramatic evasion
                    const directionX = forceDirectionX * force * 4;
                    const directionY = forceDirectionY * force * 4;

                    // Push particle away with stronger velocity
                    this.vx -= directionX * 0.15;
                    this.vy -= directionY * 0.15;
                }
            }

            // Friction/Decay to return to base velocity
            this.vx += (this.baseVx - this.vx) * 0.01;
            this.vy += (this.baseVy - this.vy) * 0.01;

            this.x += this.vx;
            this.y += this.vy;

            // Wrap around edges dynamically
            if (this.x > width + 50) this.x = -50;
            if (this.x < -50) this.x = width + 50;
            if (this.y > height + 50) this.y = -50;
            if (this.y < -50) this.y = height + 50;

            // Twinkling effect
            this.alpha += this.alphaDirection * this.alphaSpeed;
            if (this.alpha <= 0.1) this.alphaDirection = 1;
            if (this.alpha >= 0.7) this.alphaDirection = -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.alpha;

            // Add intense white glowing effect
            ctx.shadowBlur = 12;
            ctx.shadowColor = 'rgba(255, 255, 255, 1)';
            ctx.fill();
        }
    }

    // Initialize Particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Animation Loop
    function animate() {
        // Clear frame completely to ensure zero residue haze
        ctx.clearRect(0, 0, width, height);

        for (let p of particles) {
            p.update();
            p.draw();
        }

        requestAnimationFrame(animate);
    }

    animate();
});
