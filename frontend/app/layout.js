import { Cinzel, Montserrat, Cormorant_Garamond } from 'next/font/google';
import Navbar from '../components/Navbar';
import './globals.css';

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-cinzel',
    display: 'swap',
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['200', '300', '400'],
    variable: '--font-montserrat',
    display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '600'],
    style: ['normal', 'italic'],
    variable: '--font-cormorant',
    display: 'swap',
});

export const metadata = {
    title: 'Imperial Motors - Luxury Beyond Motion',
    description:
        'Imperial Motors — the pinnacle of luxury hypercar curation. Explore bespoke commissions, world-class collections, and a heritage forged in precision.',
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${cinzel.variable} ${montserrat.variable} ${cormorantGaramond.variable}`}
        >
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
