"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container py-20">
      {/* 🪴 HERO SECTION */}
      <section className="text-center mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-400 via-pink-400 to-teal-300 bg-clip-text text-transparent mb-6"
        >
          Build smarter with FloraStack 🌿
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-10"
        >
          A new generation of AI-powered SaaS and commerce solutions to scale your business faster, smarter, and beautifully.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link href="/register" className="btn-primary text-lg px-6 py-3">
            🚀 Get Started
          </Link>
          <Link href="/features" className="btn-secondary text-lg px-6 py-3">
            Learn More
          </Link>
        </motion.div>
      </section>

      {/* 🌸 FEATURE SECTION */}
      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Automation",
              text: "Harness advanced AI to automate complex workflows and boost efficiency.",
              icon: "🤖",
            },
            {
              title: "Smart Commerce",
              text: "Powerful tools to scale your business and streamline online sales.",
              icon: "🛍️",
            },
            {
              title: "Seamless Integration",
              text: "Connect your ecosystem with one-click integrations and API magic.",
              icon: "🔗",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-8 rounded-2xl text-center border border-white/10 shadow-lg hover:border-indigo-400/50 transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🌿 CTA SECTION */}
      <section className="text-center max-w-3xl mx-auto p-10 rounded-3xl glass-card border border-white/10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Ready to grow with FloraStack?
        </motion.h2>
        <p className="text-gray-300 mb-8">
          Join thousands of businesses already using FloraStack to build the future of commerce and SaaS.
        </p>
        <Link href="/register" className="btn-primary text-lg px-8 py-3">
          🌟 Get Started for Free
        </Link>
      </section>
    </div>
  );
}
