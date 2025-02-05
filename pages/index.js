import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaInstagram } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-white text-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-100 dark:text-black">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 bg-gray-900 dark:bg-gray-100">
          <h1 className="text-3xl font-bold text-blue-500">Vercent</h1>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/vercent.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white dark:text-black hover:text-blue-500"
            >
              <FaInstagram size={24} />
            </a>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-black"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative w-full h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 flex items-center justify-center overflow-hidden">
          <div className="text-center">
            <motion.h1
              className="text-6xl font-extrabold text-white"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Empowering Business Growth
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mt-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Automating outreach to increase conversions. Reclaim your time and focus on scaling your business.
            </motion.p>
            <motion.div
              className="mt-8 flex justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <button className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                Get Started
              </button>
              <button className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white font-semibold dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-black">
                Free Sample Leads
              </button>
            </motion.div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-16 bg-gray-800 dark:bg-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Automated BD Growth", "Data-Driven Targeting", "Scalable Strategies"].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-900 shadow-lg rounded-xl dark:bg-white dark:shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-white dark:text-black">
                  {feature}
                </h3>
                <p className="text-gray-400 mt-3 dark:text-gray-600">
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
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-center dark:bg-gray-200">
          <h2 className="text-4xl font-bold text-white dark:text-black">
            Ready to Transform Your Outreach?
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto dark:text-gray-600">
            Schedule a call with our team to explore solutions tailored to your business needs.
          </p>
          <a
            href="https://calendly.com/jvora-vercent/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            Book a Call
          </a>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center bg-gray-900 dark:bg-gray-100">
          <p className="text-gray-400 dark:text-gray-600">
            &copy; 2025 Vercent. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
