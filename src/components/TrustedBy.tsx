"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/logo-placeholder.svg", alt: "Client Logo 1" },
  { src: "/logo-placeholder.svg", alt: "Client Logo 2" },
  { src: "/logo-placeholder.svg", alt: "Client Logo 3" },
  { src: "/logo-placeholder.svg", alt: "Client Logo 4" },
  { src: "/logo-placeholder.svg", alt: "Client Logo 5" },
  { src: "/logo-placeholder.svg", alt: "Client Logo 6" },
];

const TrustedBy = () => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-500 mb-12">
          Trusted by Industry Leaders
        </h2>
        <div className="relative h-12">
          <motion.div
            className="absolute left-0 flex"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 flex items-center justify-center mx-8"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
