import Link from 'next/link';
import ParticleCanvas from './ParticleCanvas';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            {/* Video Background Layer */}
            <video className={styles.heroVideo} autoPlay loop muted playsInline>
                <source
                    src="/videos/Imperial_motors_promotional_video_921275a997 (online-video-cutter.com) (1).mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            {/* Deep Black Overlay */}
            <div className={styles.videoOverlay}></div>

            {/* Floor Reflection */}
            <div className={styles.floorReflection}></div>

            {/* Interactive Particles Canvas */}
            <ParticleCanvas />

            {/* Main Content Overlay */}
            <div className={styles.heroContent}>
                <div className={styles.ctaContainer}>
                    <Link href="/models" className={styles.btnPrimary}>
                        Discover the Fleet
                    </Link>
                    <Link href="/contact" className={styles.btnSecondary}>
                        Request Consultation
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <span>Explore</span>
                <div className={styles.scrollLine}></div>
            </div>
        </section>
    );
}
