"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Factory,
  Package,
  ArrowRight,
} from "lucide-react";

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const productCategories = [
    {
      title: "Industrial Labels",
      description: "Heavy-duty labels for industrial applications",
      icon: Factory,
      products: [
        "Polycarbonate Labels (PC Stickers)",
        "High Temperature Labels",
        "ESD Labels",
        "Automotive Labels",
      ],
    },
    {
      title: "Commercial Labels",
      description: "Versatile labels for business and commercial use",
      icon: Package,
      products: [
        "Self Adhesive Labels",
        "Bar code Labels",
        "Roll Form Labels",
        "Key Pad Labels",
      ],
    },
  ];

  const navLinkVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15 } },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/CPT.png"
              alt="Chayaprinttech Logo"
              width={60}
              height={60}
              className="object-contain hover:scale-105 transition-transform duration-300"
            />
            <span className="font-bold text-xl text-[#04499C]">
              Chayaprinttech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
            ].map((item, i) => (
              <motion.div
                key={item.href}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navLinkVariants}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-[#04499C] font-medium text-base relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4A405] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}

            {/* Products Dropdown */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
              onHoverStart={() => setIsProductsOpen(true)}
              onHoverEnd={() => setIsProductsOpen(false)}
              className="relative"
            >
              <button className="text-gray-700 hover:text-[#04499C] font-medium flex items-center gap-1 text-base group">
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isProductsOpen ? "rotate-180 text-[#04499C]" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-white shadow-2xl rounded-xl border border-gray-100 p-6 mt-4"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {productCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                          <div key={index}>
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-[#04499C]/10 rounded-lg flex items-center justify-center">
                                <Icon className="w-6 h-6 text-[#04499C]" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">
                                  {category.title}
                                </h3>
                                <p className="text-xs text-gray-500">
                                  {category.description}
                                </p>
                              </div>
                            </div>
                            <div className="space-y-1">
                              {category.products.map((product, idx) => (
                                <Link
                                  key={idx}
                                  href={`/products/${product
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")
                                    .replace(/[()]/g, "")}`}
                                  className="group flex items-center justify-between text-sm text-gray-600 hover:text-[#04499C] hover:bg-gray-50 px-3 py-1.5 rounded-md transition-colors duration-200"
                                >
                                  <span>{product}</span>
                                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
            >
              <Link
                href="/industries"
                className="text-gray-700 hover:text-[#04499C] font-medium text-base relative group"
              >
                Industries
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4A405] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#04499C] to-[#F4A405] text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#04499C]"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden fixed top-0 right-0 w-3/4 h-full bg-white shadow-2xl z-50"
          >
            <div className="flex items-center justify-between p-4 border-b bg-[#04499C] text-white">
              <span className="font-bold text-lg">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-4 p-6">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F4A405]">Home</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F4A405]">About</Link>
              <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F4A405]">Products</Link>
              <Link href="/industries" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F4A405]">Industries</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-gradient-to-r from-[#04499C] to-[#F4A405] text-white px-5 py-3 rounded-full text-center font-medium">Contact Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
