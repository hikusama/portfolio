import type { Metadata } from "next";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/about.css";
import "./styles/sknt.css";
import "./styles/projects.css";
import "./styles/education.css";
import "./styles/contact.css";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ramillano, Incent | Full Stack Developer Portfolio",
  description: "Portfolio of Incent Ramillano - Full Stack Developer specializing in React, Laravel, Flutter, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4KEHHFXWQG"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-4KEHHFXWQG');
    `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
