import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaCalendarAlt, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-gray-900 text-white dark:bg-gradient-to-b dark:from-gray-100 dark:to-white dark:text-black">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 bg-gray-900 dark:bg-gray-200">
          <h1 className="text-3xl font-bold text-blue-400">Vercent</h1>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/vercent.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaInstagram size={24} />
            </a>
            <button
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative w-full h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-center flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-6xl font-extrabold text-white mb-4">
              Empowering Business Growth
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Automating outreach to increase conversions. Reclaim your time and focus on scaling your business.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                Get Started
              </button>
              <button className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white font-semibold">
                Free Sample Leads
              </button>
            </div>
          </motion.div>
        </header>

        {/* Features Section */}
        <section className="py-16 bg-gray-900 dark:bg-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white dark:text-black mb-12">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Automated BD Growth", "Data-Driven Targeting", "Scalable Strategies"].map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-gray-800 rounded-lg shadow-lg dark:bg-white"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <h3 className="text-2xl font-semibold text-white dark:text-black">
                    {feature}
                  </h3>
                  <p className="text-gray-400 dark:text-gray-600 mt-4">
                    {feature === "Automated BD Growth" &&
                      "Leverage AI-powered email and LinkedIn campaigns to maximize engagement."}
                    {feature === "Data-Driven Targeting" &&
                      "Connect with high-intent prospects using enriched data insights."}
                    {feature === "Scalable Strategies" &&
                      "Build a predictable pipeline of leads without manual prospecting."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-center dark:bg-gray-300">
          <h2 className="text-4xl font-bold text-white dark:text-black mb-4">
            Ready to Transform Your Outreach?
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-700 max-w-2xl mx-auto mb-8">
            Schedule a call with our team to explore solutions tailored to your business needs.
          </p>
          <a
            href="https://calendly.com/jvora-vercent/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full"
          >
            Book a Call
          </a>
        </section>

        {/* Footer */}
        <footer className="py-10 bg-gray-800 dark:bg-gray-200 text-center">
          <p className="text-gray-400 dark:text-gray-600">
            &copy; 2025 Vercent. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
