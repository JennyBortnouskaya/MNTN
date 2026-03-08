import type { Metadata } from "next";
import "./globals.scss";

import Header from "@/components/header/Header";
import RightSidebar from "@/components/rightSidebar/RightSidebar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
    title: "MNTN",
    description: "Hiking guide landing page",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>

        <Header />

        <RightSidebar />

        <main>
            {children}
        </main>

        <Footer />

        </body>
        </html>
    );
}