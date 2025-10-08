import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FloraStack",
  description: "AI-Powered SaaS & E-Commerce Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} gradient-bg`}>
        {/* 🌿 Main App Container */}
        <div className="min-h-screen flex flex-col">

          {/* 🌸 Navigation */}
          <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
            <nav className="container flex items-center justify-between py-4">
              <Link href="/" className="text-2xl font-bold tracking-tight">
                🌿 FloraStack
              </Link>
              <div className="hidden md:flex gap-8 text-sm font-medium">
                <Link href="/features" className="hover:text-indigo-400 transition">
                  Features
                </Link>
                <Link href="/pricing" className="hover:text-indigo-400 transition">
                  Pricing
                </Link>
                <Link href="/shop" className="hover:text-indigo-400 transition">
                  Shop
                </Link>
                <Link href="/docs" className="hover:text-indigo-400 transition">
                  Docs
                </Link>
              </div>
              <div className="flex gap-3">
                <Link href="/login" className="btn-secondary text-sm">
                  Login
                </Link>
                <Link href="/register" className="btn-primary text-sm">
                  Get Started
                </Link>
              </div>
            </nav>
          </header>

          {/* 🌿 Page Content */}
          <main className="flex-1 fade-in">{children}</main>

          {/* 🌸 Footer */}
          <footer className="mt-16 border-t border-white/10 backdrop-blur bg-black/30">
            <div className="container flex flex-col md:flex-row items-center justify-between py-6 text-sm text-gray-400">
              <p>© {new Date().getFullYear()} FloraStack. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="/privacy" className="hover:text-indigo-400 transition">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-indigo-400 transition">
                  Terms
                </Link>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition"
                >
                  Twitter
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
