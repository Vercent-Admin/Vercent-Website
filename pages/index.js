import React from "react";
const Button = ({ children, className }) => (
  <button className={`px-6 py-3 rounded-xl ${className}`}>{children}</button>
);

const Card = ({ children, className }) => (
  <div className={`p-6 shadow-lg rounded-xl ${className}`}>{children}</div>
);

const CardContent = ({ children }) => <div>{children}</div>;

import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="w-full text-center py-20 px-6 bg-gradient-to-r from-gray-900 to-black">
        <motion.h1 
          className="text-6xl font-bold" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
        >
          Vercent BD System
        </motion.h1>
        <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
          Automated LinkedIn & Email Outreach for B2B Growth. Helping SMBs scale efficiently with personalized, data-driven campaigns.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">Get Started</Button>
          <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl">Contact Us</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Automated Outreach", "Data-Driven Targeting", "Scalable Growth"].map((feature, index) => (
          <Card key={index} className="p-8 bg-gray-900 shadow-lg border border-gray-700 rounded-xl text-center">
            <CardContent>
              <h3 className="text-2xl font-semibold text-white">{feature}</h3>
              <p className="text-gray-400 mt-3">
                {feature === "Automated Outreach" && "Leverage AI-driven email and LinkedIn campaigns to maximize engagement with minimal effort."}
                {feature === "Data-Driven Targeting" && "Utilize top-tier data enrichment and verification to connect with the right prospects."}
                {feature === "Scalable Growth" && "Scale your outbound marketing seamlessly with our tech stack and automation."}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Booking & Lead Sample */}
      <section className="py-20 bg-black text-center">
        <h2 className="text-4xl font-bold text-white">Book a Meeting</h2>
        <p className="text-gray-400 mt-2">Schedule a 30-minute chat with our team to explore solutions.</p>
        <a href="https://calendly.com/jvora-vercent/30min" target="_blank" className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">Book a Call</a>
      </section>

      <section className="py-20 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold text-white">Get a Free Lead Sample</h2>
        <p className="text-gray-400 mt-2">Receive a sample of 5-10 high-quality leads to see how we can help.</p>
        <Button className="mt-4 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl">Get Free Leads</Button>
      </section>

      {/* Footer */}
      <footer className="py-10 text-gray-400 text-center border-t border-gray-700">
        <p>Follow us:</p>
        <div className="flex justify-center gap-4 mt-2">
          <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-500" />
          <FaEnvelope className="text-2xl cursor-pointer hover:text-red-500" />
        </div>
        <p className="mt-4">&copy; 2025 Vercent BD System. All rights reserved.</p>
      </footer>
    </div>
  );
}
