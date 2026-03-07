import './globals.scss';
import RightSidebar from "../components/rightSidebar/RightSidebar";
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400','700'],
    variable: '--font-playfair',
    display: 'swap'
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['400','500','700'],
    variable: '--font-inter',
    display: 'swap'
});

export const metadata = {
    title: 'MNTN Landing Page',
    description: 'Explore the mountains with MNTN – hiking guides, tips, and community.',
    viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
        <body>
        <RightSidebar />
        {children}
        </body>
        </html>
    );
}
