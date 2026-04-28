import Link from 'next/link';

export const metadata = {
    title: 'Imperial Motors - Bespoke Commissions',
    description:
        'The Imperial Bespoke division exists to fulfill the wildest imaginations of our clientele with infinite customization possibilities.',
};

export default function BespokePage() {
    return (
        <main className="luxury-bg">
            {/* Bespoke Section */}
            <section className="about-section" style={{ paddingTop: '150px', paddingBottom: '120px' }}>
                <div className="editorial-container">
                    <h1 className="editorial-title">Bespoke Commissions</h1>
                    <p className="editorial-subtitle">Your Vision, Materialized</p>

                    <p className="editorial-text">
                        The Imperial Bespoke division exists to fulfill the wildest imaginations of our clientele. We
                        offer an infinite palette of exterior finishes, interior materials sourced from around the
                        globe, and tailored aerodynamic configurations. If you can dream it, our craftsmen can
                        engineer it into reality.
                    </p>

                    <div style={{ textAlign: 'center' }}>
                        <Link href="/contact" className="btn-discover">
                            Commission Your Masterpiece
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
