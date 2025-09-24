"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TrustedBy from "@/components/TrustedBy";
import Hero from "@/components/Hero";
import {
  Target,
  Zap,
  Shield,
  Lightbulb,
  Tag,
  Heart,
  Factory,
  ShoppingCart,
  Building2,
  GraduationCap,
  Car,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const products = [
    "Polycarbonate Labels (PC Stickers)",
    "Self Adhesive Labels",
    "ESD Labels",
    "Bar code Labels",
    "Roll Form Labels",
    "High Temperature Labels",
  ];

  const industries = [
    { name: "Healthcare", icon: "Heart" },
    { name: "Manufacturing", icon: "Factory" },
    { name: "Retail", icon: "ShoppingCart" },
    { name: "Banking", icon: "Building2" },
    { name: "Education", icon: "GraduationCap" },
    { name: "Automotive", icon: "Car" },
  ];

  const iconComponents: { [key: string]: React.ElementType } = {
    Heart,
    Factory,
    ShoppingCart,
    Building2,
    GraduationCap,
    Car,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              The <span className="text-cpt-primary">CPT Advantage</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We fuse cutting-edge technology with deep industry expertise to
              deliver labeling solutions that drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Precision Quality",
                desc: "Every label is crafted to meet the highest standards of quality, accuracy, and durability.",
              },
              {
                icon: Zap,
                title: "Rapid Turnaround",
                desc: "Our streamlined processes ensure fast delivery times without ever compromising on quality.",
              },
              {
                icon: Shield,
                title: "Certified Reliability",
                desc: "Fully compliant with key industry standards and regulations, ensuring peace of mind.",
              },
              {
                icon: Lightbulb,
                title: "Innovative Solutions",
                desc: "We provide custom, forward-thinking labeling solutions tailored to your unique challenges.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 border border-transparent hover:border-cpt-primary group"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-cpt-primary/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-cpt-primary">
                    <feature.icon className="w-8 h-8 text-cpt-primary transition-colors duration-300 group-hover:text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Explore Our{" "}
              <span className="text-cpt-primary">Product Range</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From basic adhesive labels to specialized, high-performance
              industrial solutions, we have a product for every need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/products/${product
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[()]/g, "")}`}
                  className="group block bg-white p-8 rounded-xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-cpt-primary/10 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-cpt-primary">
                      <Tag className="w-7 h-7 text-cpt-primary transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-300 group-hover:text-cpt-secondary transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {product}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    High-quality, durable solutions for professional
                    applications.
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/products"
              className="bg-cpt-primary hover:bg-cpt-secondary text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Serving{" "}
              <span className="text-cpt-primary">Diverse Industries</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by leading companies across a wide spectrum of sectors for
              our reliability and expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = iconComponents[industry.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-gray-50 p-6 rounded-xl hover:bg-cpt-primary transition-colors duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-12 h-12 text-cpt-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                    {industry.name}
                  </h3>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/industries"
              className="bg-cpt-primary hover:bg-cpt-secondary text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
            >
              Explore All Industries
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white text-black">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
              Contact us today for a free consultation and discover how our
              precision labeling solutions can solve your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-cpt-secondary hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2 text-lg"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-gray-900"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
