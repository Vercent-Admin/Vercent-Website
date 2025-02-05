import React, { useState } from "react";
import { FaSun, FaMoon, FaCheckCircle, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white dark:bg-white dark:text-black">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 bg-gray-900 dark:bg-gray-100">
          <h1 className="text-3xl font-bold text-blue-500">Vercent</h1>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-black"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>

        {/* Hero Section */}
        <header className="text-center py-20 px-6">
          <h1 className="text-6xl font-extrabold text-gradient bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 inline-block">
            Vercent BD System
          </h1>
          <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto dark:text-gray-600">
            Empowering SMBs with automated LinkedIn & email outreach campaigns. Scale your business with data-driven strategies.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white font-semibold dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-black">
              Contact Us
            </button>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-16 bg-gray-800 dark:bg-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Automated Outreach",
                description: "Leverage AI-powered email and LinkedIn campaigns to maximize engagement.",
                icon: <FaCheckCircle />
              },
              {
                title: "Data-Driven Targeting",
                description: "Enrich your data to connect with the most relevant prospects for your business.",
                icon: <FaEnvelope />
              },
              {
                title: "Scalable Growth",
                description: "Scale your outbound campaigns seamlessly with automation.",
                icon: <FaLinkedin />
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900 shadow-lg rounded-xl dark:bg-white dark:shadow-sm"
              >
                <div className="text-blue-500 text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400 mt-3 dark:text-gray-600">{feature.description}</p>
              </div>
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
            &copy; 2025 Vercent BD System. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}


