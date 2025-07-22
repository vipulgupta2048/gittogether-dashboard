import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

// Configure Geist Sans font with CSS variables for consistent typography
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configure Geist Mono font for code and monospace elements
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO metadata for the GitTogether Delhi dashboard
export const metadata: Metadata = {
  title: "GitTogether Delhi - Community Dashboard",
  description: "Showcasing the growth and impact of GitTogether Delhi developer community - from 0 to 4,986+ members",
};

/**
 * Root layout component for the GitTogether Delhi dashboard
 * Provides consistent structure, navigation, and footer across all pages
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900`}
      >
        {/* Main navigation component - appears on all pages */}
        <Navigation />
        
        {/* Main content area with minimum height to push footer down */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Site footer with attribution and links */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              Built with 💛 by{" "}
              <a 
                href="https://github.com/vipulgupta2048" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                aria-label="Visit Vipul Gupta's GitHub profile"
              >
                @vipulgupta2048
              </a>
              , may the{" "}
              <a 
                href="https://github.com/vipulgupta2048/gittogether-dashboard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                aria-label="View source code on GitHub"
              >
                source
              </a>
              {" "}be with you.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
