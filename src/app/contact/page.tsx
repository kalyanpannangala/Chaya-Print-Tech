"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    subject: "",
    message: "",
    productInterest: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      subject: "",
      message: "",
      productInterest: "",
    });
  };

  const industries = [
    "Healthcare",
    "Manufacturing",
    "Retail",
    "Banking",
    "Education",
    "Service Center",
    "Automotive",
    "Entertainment",
  ];

  const products = [
    "Polycarbonate Labels (PC Stickers)",
    "Self Adhesive Labels",
    "ESD Labels",
    "Bar code Labels",
    "Roll Form Labels",
    "High Temperature Labels",
    "Key Pad Labels",
    "Dome Labels",
    "Automotive Labels",
    "Security Labels",
    "Polyester Labels",
    "Warning & Caution Labels",
    "Aluminum Labels",
    "Insulator & Gaskets",
    "Safety Signs",
    "Laser Marking Labels",
    "Branding Solutions",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cpt-primary to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-cpt-secondary">Contact</span> CPT
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Ready to discuss your labeling needs? Get in touch with our
                experts for personalized solutions and competitive quotes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cpt-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📧</span>
                  </div>
                  <span className="text-blue-100">info@chayaprinttech.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cpt-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📞</span>
                  </div>
                  <span className="text-blue-100">+91 XXXX-XXXX-XX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cpt-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📍</span>
                  </div>
                  <span className="text-blue-100">Your Business Address</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/CPT.png"
                alt="Chayaprinttech Logo"
                width={300}
                height={300}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Us a <span className="text-cpt-primary">Message</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cpt-primary focus:border-cpt-primary transition-colors duration-200"
                        placeholder="Your Name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cpt-primary focus:border-cpt-primary transition-colors duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cpt-primary focus:border-cpt-primary transition-colors duration-200"
                        placeholder="+91 XXXX-XXXX-XX"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cpt-primary focus:border-cpt-primary transition-colors duration-200"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="industry"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cpt-primary focus:border-cpt-primary transition-colors duration-200"
                      >
                        <option value="">Select Industry</option>
                        {industries.map((industry, index) => (
                          <option key={index} value={industry}>
                            {industry}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="productInterest"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Product Interest
                      </label>
                      <select
                        id="productInterest"
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cpt-primary focus:border-cpt-primary transition-colors duration-200"
                      >
                        <option value="">Select Product</option>
                        {products.map((product, index) => (
                          <option key={index} value={product}>
                            {product}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cpt-primary focus:border-cpt-primary transition-colors duration-200"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cpt-primary focus:border-cpt-primary transition-colors duration-200 resize-vertical"
                      placeholder="Please provide details about your labeling requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-cpt-primary hover:bg-cpt-secondary text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-cpt-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email Us</h4>
                      <p className="text-gray-600">info@chayaprinttech.com</p>
                      <p className="text-gray-600">sales@chayaprinttech.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-cpt-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Call Us</h4>
                      <p className="text-gray-600">+91 XXXX-XXXX-XX</p>
                      <p className="text-gray-600 text-sm">
                        Mon-Fri: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-cpt-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Visit Us</h4>
                      <p className="text-gray-600">
                        Your Business Address
                        <br />
                        City, State - PIN Code
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Quote */}
              <div className="bg-cpt-primary text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Need a Quick Quote?</h3>
                <p className="text-blue-100 mb-6">
                  For urgent requirements, call us directly or send us your
                  specifications via WhatsApp.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+91XXXXXXXXXX"
                    className="block bg-cpt-secondary hover:bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg font-semibold text-center transition-colors duration-200"
                  >
                    📞 Call Now
                  </a>
                  <a
                    href="https://wa.me/91XXXXXXXXXX"
                    className="block border-2 border-white hover:bg-white hover:text-cpt-primary text-white py-3 px-6 rounded-lg font-semibold text-center transition-colors duration-200"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Business Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-gray-900">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-900">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-red-600 font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Our <span className="text-cpt-primary">Location</span>
            </h2>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600">
                  Interactive map will be embedded here
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Your Business Address, City, State
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
