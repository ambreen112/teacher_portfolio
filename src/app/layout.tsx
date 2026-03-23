import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Amber | Passionate Educator from Karachi",
    template: "%s | Amber - Educator Portfolio",
  },
  description:
    "Portfolio of Amber, a passionate and dedicated educator from Karachi, committed to inspiring learners through innovative teaching methods.",
  keywords: [
    "teacher",
    "educator",
    "Karachi",
    "portfolio",
    "lesson plans",
    "teaching",
  ],
  authors: [{ name: "Amber" }],
  openGraph: {
    title: "Amber | Passionate Educator from Karachi",
    description:
      "Dedicated to inspiring learners through innovative teaching methods.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1 pt-16 sm:pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
