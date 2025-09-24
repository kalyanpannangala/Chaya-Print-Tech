"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  Building2,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Shield,
  Users,
} from "lucide-react";

// export const metadata = {
//   title: "Contact Chaya Print Tech - Get Expert Label Solutions | Bengaluru",
//   description:
//     "Contact Chaya Print Tech for expert label solutions. Located at Eshwar Temple Road, Kanakapura Main Road, Doddakallasandra, Bangalore-560062. Call +91 90669 44070 or email chayaprinttech.2017@gmail.com",
// };

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
      {/* Enhanced Hero Section */}
      <section className="relative bg-[#04499C] py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#F4A405] rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-[#F4A405] rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#F4A405] rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-[#F4A405] rounded-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-white">
              <div className="inline-flex items-center px-4 py-2 bg-[#F4A405] text-[#04499C] rounded-full text-sm font-semibold mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                Bengaluru • Expert Support Available
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                <span className="text-[#F4A405]">Contact</span> Chaya Print Tech
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Whether you're looking for a{" "}
                <strong className="text-white">machine</strong>, have a{" "}
                <strong className="text-white">support question</strong> or a{" "}
                <strong className="text-white">business query</strong> - get in
                touch with our experts.
              </p>

              {/* Quick Contact Info */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F4A405] rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#04499C]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Call Directly
                    </div>
                    <div className="text-blue-100">+91 90669 44070</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#F4A405]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email Us</div>
                    <div className="text-blue-100">
                      chayaprinttech.2017@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F4A405] rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#04499C]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Visit Our Office
                    </div>
                    <div className="text-blue-100">
                      Doddakallasandra, Bangalore
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#F4A405] rounded-2xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <Image
                    src="/CPT.png"
                    alt="Chaya Print Tech Logo"
                    width={300}
                    height={300}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#04499C] mb-6 tracking-tight">
              Get In <span className="text-[#F4A405]">Touch</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Ready to discuss your labeling needs? Contact our experts for
              personalized solutions, competitive quotes, and professional
              consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-[#04499C] rounded-xl flex items-center justify-center mr-4">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#04499C]">
                    Send Us a <span className="text-[#F4A405]">Message</span>
                  </h3>
                </div>

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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#04499C] focus:border-[#04499C] transition-all duration-200 hover:border-[#F4A405]"
                        placeholder="Your Full Name"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#04499C] focus:border-[#04499C] transition-all duration-200 hover:border-[#F4A405]"
                        placeholder="your.email@company.com"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#04499C] focus:border-[#04499C] transition-all duration-200 hover:border-[#F4A405]"
                        placeholder="+91 90669 44070"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#04499C] focus:border-[#04499C] transition-all duration-200 hover:border-[#F4A405]"
                        placeholder="Your Company Name"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#04499C] focus:border-[#04499C] transition-all duration-200 hover:border-[#F4A405]"
                      >
                        <option value="">Select Your Industry</option>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#04499C] focus:border-[#04499C] transition-all duration-200 hover:border-[#F4A405]"
                      >
                        <option value="">Select Product Interest</option>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#04499C] focus:border-[#04499C] transition-all duration-200 hover:border-[#F4A405]"
                      placeholder="How can Chaya Print Tech help you today?"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#04499C] focus:border-[#04499C] transition-all duration-200 hover:border-[#F4A405] resize-vertical"
                      placeholder="Please provide details about your labeling requirements, quantities, specifications, or any questions you have..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#04499C] hover:bg-[#033875] text-white py-4 px-8 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message to CPT
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-[#04499C] to-blue-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Phone className="w-6 h-6 mr-3 text-[#F4A405]" />
                  Contact <span className="text-[#F4A405]">Information</span>
                </h3>

                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#F4A405] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-[#04499C]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">
                          Call Us Directly
                        </h4>
                        <a
                          href="tel:+919066944070"
                          className="block text-blue-100 hover:text-[#F4A405] transition-colors text-lg font-medium"
                        >
                          +91 90669 44070
                        </a>
                        <a
                          href="tel:+919985142346"
                          className="block text-blue-100 hover:text-[#F4A405] transition-colors text-lg font-medium"
                        >
                          +91 99851 42346
                        </a>
                        <p className="text-blue-200 text-sm mt-2">
                          Mon-Sat: 9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-[#F4A405]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">Email Us</h4>
                        <a
                          href="mailto:chayaprinttech.2017@gmail.com"
                          className="block text-blue-100 hover:text-[#F4A405] transition-colors font-medium"
                        >
                          chayaprinttech.2017@gmail.com
                        </a>
                        <a
                          href="mailto:sales@chayaprinttech.in"
                          className="block text-blue-100 hover:text-[#F4A405] transition-colors font-medium"
                        >
                          sales@chayaprinttech.in
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#F4A405] rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#04499C]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">
                          Visit Our Office
                        </h4>
                        <p className="text-blue-100 leading-relaxed">
                          <strong className="text-white">
                            CHAYA PRINT TECH
                          </strong>
                          <br />
                          1/2C, Eshwar Temple Road,
                          <br />
                          Kanakapura Main Road,
                          <br />
                          Doddakallasandra,
                          <br />
                          Bangalore-560 062
                        </p>
                        <a
                          href="https://maps.google.com/maps?ll=12.880849,77.556653&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=6612249809492980556"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center mt-3 text-[#F4A405] hover:text-white transition-colors font-medium"
                        >
                          <MapPin className="w-4 h-4 mr-1" />
                          View on Google Maps
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Quote */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-[#F4A405]/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#F4A405] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#04499C] mb-2">
                    Need a Quick Quote?
                  </h3>
                  <p className="text-gray-600">
                    For urgent requirements, get instant support through our
                    direct channels.
                  </p>
                </div>
                <div className="space-y-4">
                  <a
                    href="tel:+919066944070"
                    className="flex items-center justify-center bg-[#04499C] hover:bg-[#033875] text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +91 90669 44070
                  </a>
                  <a
                    href="https://wa.me/919066944070"
                    className="flex items-center justify-center border-2 border-[#F4A405] text-[#F4A405] hover:bg-[#F4A405] hover:text-white py-4 px-6 rounded-xl font-bold transition-all duration-300"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    WhatsApp Chat
                  </a>
                  <a
                    href="mailto:chayaprinttech.2017@gmail.com"
                    className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 px-6 rounded-xl font-bold transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#04499C] rounded-xl flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#04499C]">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">
                      Monday - Friday
                    </span>
                    <span className="font-bold text-[#04499C]">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="font-bold text-[#04499C]">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="text-red-600 font-bold">Closed</span>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6 p-4 bg-[#F4A405]/10 rounded-xl border border-[#F4A405]/20">
                  <p className="text-sm text-gray-700 text-center">
                    <strong className="text-[#04499C]">
                      Emergency Support:
                    </strong>{" "}
                    Available on weekends for urgent requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#04499C] mb-6 tracking-tight">
              Find Our <span className="text-[#F4A405]">Location</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Visit our office in Bangalore for personalized consultation and
              product demonstrations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Address Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#04499C] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#04499C]">
                  Our Address
                </h3>
              </div>
              <div className="text-center space-y-2">
                <p className="font-bold text-[#04499C] text-lg">
                  CHAYA PRINT TECH
                </p>
                <p className="text-gray-700">1/2C, Eshwar Temple Road</p>
                <p className="text-gray-700">Kanakapura Main Road</p>
                <p className="text-gray-700">Doddakallasandra</p>
                <p className="font-semibold text-[#04499C]">
                  Bangalore-560 062
                </p>
                <div className="pt-4">
                  <a
                    href="https://maps.google.com/maps?ll=12.880849,77.556653&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=6612249809492980556"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#F4A405] hover:bg-yellow-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?ll=12.880849,77.556653&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=6612249809492980556&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px]"
                title="Chaya Print Tech Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us CTA */}
      <section className="py-24 bg-[#04499C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Why Choose <span className="text-[#F4A405]">Chaya Print Tech</span>?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Industry-leading solutions, expert support, and proven results since
            2017
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-[#F4A405] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Industry Expertise</h3>
              <p className="text-blue-100">
                8+ years of experience serving diverse industries with
                specialized solutions
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-[#F4A405]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
              <p className="text-blue-100">
                Latest technology and stringent quality control for reliable
                products
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-[#F4A405] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Customer Focus</h3>
              <p className="text-blue-100">
                Dedicated support team ensuring your requirements are met
                perfectly
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 bg-[#F4A405] hover:bg-yellow-500 text-[#04499C] font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#04499C] font-bold rounded-xl transition-all duration-300"
            >
              View Our Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
