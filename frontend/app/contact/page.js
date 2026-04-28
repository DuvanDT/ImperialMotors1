'use client';

import { useState } from 'react';
import Footer from '../../components/Footer';
import styles from './contact.module.css';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        inquiry: 'reserve',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry. We will contact you shortly.');
        setFormData({ name: '', email: '', inquiry: 'reserve', message: '' });
    };

    return (
        <main className="luxury-bg">
            {/* Contact Section */}
            <div className={styles.contactPage}>
                <div className={styles.contactFormContainer}>
                    <h1 className={styles.contactTitle}>Private Consultation</h1>
                    <p className={styles.contactSubtitle}>
                        Reserve a viewing or inquire about bespoke allocations.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="client@example.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="inquiry">Nature of Inquiry</label>
                            <select
                                id="inquiry"
                                name="inquiry"
                                value={formData.inquiry}
                                onChange={handleChange}
                            >
                                <option value="reserve">Reserve a Model</option>
                                <option value="bespoke">Bespoke Commission</option>
                                <option value="media">Media &amp; Press</option>
                                <option value="other">General Inquiry</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                placeholder="Detail your specific requirements or preferences..."
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className={styles.btnSubmit}>
                            Submit Inquiry
                        </button>
                    </form>
                </div>
            </div>

            {/* Contact Info Strip */}
            <section className="contact-info-section">
                <div className="contact-info-grid">
                    <div className="info-item">
                        <h3>Our Atelier</h3>
                        <p>Mayfair, London</p>
                    </div>
                    <div className="info-item">
                        <h3>Private Line</h3>
                        <p>+44 20 7946 0123</p>
                    </div>
                    <div className="info-item">
                        <h3>Hours</h3>
                        <p>Mon — Sat: 10:00 — 18:00</p>
                    </div>
                    <div className="info-item">
                        <h3>Digital</h3>
                        <p>client@imperialmotors.com</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
