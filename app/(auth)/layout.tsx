import React from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import '../globals.css';

export const metadata: Metadata = {
    title: 'Auth',
    description: 'Linksync authentication and authorization'
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (<ClerkProvider>
        <html lang="en">
            <body className={`${inter.className} bg-dark-1`}>
                <div className="w-full flex justify-center items-center min-h-screen">
                    {children}
                </div>
            </body>
        </html>
    </ClerkProvider>)
}