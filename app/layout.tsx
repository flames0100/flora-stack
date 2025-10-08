import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'FloraStack - AI-Powered SaaS E-Commerce CRM',
    template: '%s | FloraStack',
  },
  description: 'Salesforce-inspired CRM with e-commerce payments and AI insights for your business.',
  keywords: ['SaaS', 'CRM', 'e-commerce', 'AI', 'Stripe', 'OpenAI'],
  authors: [{ name: 'FloraStack Team' }],
  creator: 'FloraStack',
  openGraph: {
    title: 'FloraStack',
    description: 'AI-powered CRM and e-commerce platform.',
    url: 'https://florastack.vercel.app',
    siteName: 'FloraStack',
    images: [
      {
        url: 'https://florastack.vercel.app/og-image.png', // Add your OG image later
        width: 1200,
        height: 630,
        alt: 'FloraStack',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FloraStack',
    description: 'Salesforce-like CRM with AI and e-commerce.',
    images: ['https://florastack.vercel.app/twitter-image.png'], // Add Twitter image
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
