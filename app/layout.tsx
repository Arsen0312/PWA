import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "@/styles/tailwind.css";
import Head from "next/head";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Pwa",
    description: "Pwa приложение"
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
        <Head>
            <link rel="manifest" href="/manifest.json" />
        </Head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-[var(--gray)]`}
        >
        {children}
        </body>
        </html>
    );
}