import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <h1 className="text-6xl font-bold text-center mb-8 text-gray-800">Welcome to FloraStack</h1>
      <p className="text-xl text-center mb-12 text-gray-600 max-w-2xl">Your Salesforce-like CRM with e-commerce storefront and AI superpowers. Manage leads, sell products, and get smart insights.</p>
      <div className="space-x-4">
        <Link href="/dashboard" className="btn-primary px-8 py-4">CRM Dashboard</Link>
        <Link href="/products" className="btn-primary px-8 py-4 bg-green-500 hover:bg-green-600">Shop Products</Link>
        <Link href="/ai-assistant" className="btn-primary px-8 py-4 bg-purple-500 hover:bg-purple-600">AI Assistant</Link>
      </div>
      <p className="mt-12 text-sm text-gray-500">Powered by Next.js, Stripe, and OpenAI</p>
    </main>
  )
}
