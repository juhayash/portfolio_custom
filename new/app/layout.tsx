import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const intertight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jun Hayashida",
    description: "Jun Hayashida's Software Development Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={intertight.className}>{children}</body>
        </html>
    );
}
