export const metadata = {
    title: 'Imperial Motors - Heritage',
    description:
        'For over three decades, Imperial Motors has pushed the absolute boundaries of what is possible on four wheels.',
};

export default function HeritagePage() {
    return (
        <main className="luxury-bg">
            {/* Heritage Section */}
            <section className="about-section" style={{ paddingTop: '150px', paddingBottom: '120px' }}>
                <div className="editorial-container">
                    <h1 className="editorial-title">Our Heritage</h1>
                    <p className="editorial-subtitle">Forged in Precision</p>

                    <p className="editorial-text">
                        For over three decades, Imperial Motors has pushed the absolute boundaries of what is possible
                        on four wheels. Born from a singular vision to craft the most uncompromising driving machines
                        in existence, our heritage is paved with shattered records and engineering breakthroughs.
                    </p>

                    <p className="editorial-text">
                        Every hypercar that leaves our atelier is not merely assembled; it is individually
                        commissioned and handcrafted by master technicians. From the meticulous carbon-fiber layup to
                        the intricately machined titanium components, the pursuit of perfection guides every stroke
                        of our design philosophy.
                    </p>

                    <blockquote className="quote">
                        &ldquo;We do not build cars to simply move you from point A to point B. We build instruments
                        of emotion designed to command the elements.&rdquo;
                    </blockquote>
                </div>
            </section>
        </main>
    );
}
