import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProductShowcase from "./ProductShowcase";

const Hero = () => {
  return (
    <section className="relative animated-gradient-bg text-white overflow-hidden">
      {/* Floating Bubbles Layer */}
      <div className="hero-bubbles">
        {Array.from({ length: 22 }).map((_, i) => {
          const size = Math.random() * 80 + 30;
          const left = Math.random() * 100;
          const delay = Math.random() * 12;
          const duration = Math.random() * 18 + 18;
          return (
            <span
              key={i}
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                bottom: -120,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Industrial & Commercial
              <br />
              <span className="text-cpt-secondary">Label Solutions</span>
              <span className="block text-lg md:text-xl font-normal text-white/70 mt-4">
                Engineered for durability, clarity & compliance.
              </span>
            </h1>

            <p className="text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
              From high‑temperature, ESD & security labels to branding and
              commercial print essentials—CPT powers products & brands with
              precision-engineered print solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/products"
                className="group relative overflow-hidden bg-cpt-secondary text-cpt-primary px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Products
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#f4b52e] to-[#F4A405] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="/contact"
                className="relative overflow-hidden px-10 py-4 rounded-full font-semibold border border-white/40 text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <span className="relative z-10">Request a Quote</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Product Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative flex justify-center items-center h-[460px]"
          >
            <ProductShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
