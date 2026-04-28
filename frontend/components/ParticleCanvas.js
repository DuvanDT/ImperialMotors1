'use client';

import { useRef, useEffect } from 'react';
import styles from './HeroSection.module.css';

export default function ParticleCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let width, height;
        let animationId;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        // Mouse Interaction Setup
        const mouse = { x: null, y: null, radius: 200 };

        function handleMouseMove(event) {
            mouse.x = event.x;
            mouse.y = event.y;
        }

        function handleMouseOut() {
            mouse.x = null;
            mouse.y = null;
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        // Particle Configuration
        const particleCount = 300;
        const particles = [];
        const colors = [
            'rgba(255, 255, 255, 0.6)',
            'rgba(240, 240, 245, 0.4)',
            'rgba(200, 200, 210, 0.2)',
        ];

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.baseVx = (Math.random() - 0.5) * 0.3;
                this.baseVy = (Math.random() - 0.5) * 0.3;
                this.vx = this.baseVx;
                this.vy = this.baseVy;
                this.size = Math.random() * 2 + 0.5;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.alpha = Math.random() * 0.5 + 0.1;
                this.alphaDirection = Math.random() > 0.5 ? 1 : -1;
                this.alphaSpeed = Math.random() * 0.005 + 0.001;
            }

            update() {
                if (mouse.x != null && mouse.y != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        const directionX = forceDirectionX * force * 4;
                        const directionY = forceDirectionY * force * 4;

                        this.vx -= directionX * 0.15;
                        this.vy -= directionY * 0.15;
                    }
                }

                this.vx += (this.baseVx - this.vx) * 0.01;
                this.vy += (this.baseVy - this.vy) * 0.01;

                this.x += this.vx;
                this.y += this.vy;

                if (this.x > width + 50) this.x = -50;
                if (this.x < -50) this.x = width + 50;
                if (this.y > height + 50) this.y = -50;
                if (this.y < -50) this.y = height + 50;

                this.alpha += this.alphaDirection * this.alphaSpeed;
                if (this.alpha <= 0.1) this.alphaDirection = 1;
                if (this.alpha >= 0.7) this.alphaDirection = -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.alpha;
                ctx.shadowBlur = 12;
                ctx.shadowColor = 'rgba(255, 255, 255, 1)';
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            for (let p of particles) {
                p.update();
                p.draw();
            }
            animationId = requestAnimationFrame(animate);
        }

        animate();

        // Cleanup
        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.particles} id="particles" />;
}
