import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ChatbotWidget from "@/components/chatbot-widget";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abubakar | Senior Software Engineer",
  description: "A premium personal portfolio built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (() => {
              const savedTheme = localStorage.getItem("theme");
              const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;
              document.documentElement.classList.toggle("dark", shouldUseDark);
            })();
          `}
        </Script>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="mx-auto flex w-full max-w-6xl flex-1 px-6 py-10">
            {children}
          </main>
          <SiteFooter />
        </div>
        <ChatbotWidget />
      </body>
    </html>
  );
}
