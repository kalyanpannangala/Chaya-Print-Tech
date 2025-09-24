"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tag,
  Cpu,
  Layers,
  ShieldCheck,
  Thermometer,
  Barcode,
  Keyboard,
  Flame,
  KeySquare,
  ShieldAlert,
  Ruler,
  Sparkle,
  PanelTopInactive,
  ScanBarcode,
  ArrowRight,
  Star,
} from "lucide-react";

interface ProductItem {
  name: string;
  category: "Commercial" | "Industrial";
  icon: any;
  slug: string;
  description: string;
}

const commercialProducts: ProductItem[] = [
  {
    name: "Appointment Cards",
    category: "Commercial",
    icon: Tag,
    slug: "appointment-cards",
    description: "Professional appointment reminder cards for your business"
  },
  {
    name: "Banners",
    category: "Commercial",
    icon: PanelTopInactive,
    slug: "banners",
    description: "Eye-catching promotional banners for events and marketing"
  },
  {
    name: "Brochures",
    category: "Commercial",
    icon: Layers,
    slug: "brochures",
    description: "Detailed informational brochures to showcase your services"
  },
  {
    name: "Business Card Magnets",
    category: "Commercial",
    icon: Tag,
    slug: "business-card-magnets",
    description: "Magnetic business cards that stick around"
  },
  {
    name: "Counter Cards",
    category: "Commercial",
    icon: Layers,
    slug: "counter-cards",
    description: "Point-of-sale promotional cards for countertops"
  },
  {
    name: "Door Hangers",
    category: "Commercial",
    icon: Tag,
    slug: "door-hangers",
    description: "Direct marketing materials for door-to-door campaigns"
  },
  { 
    name: "Flyers", 
    category: "Commercial", 
    icon: Layers, 
    slug: "flyers",
    description: "Cost-effective promotional flyers for mass distribution"
  },
  {
    name: "Greeting Cards",
    category: "Commercial",
    icon: Sparkle,
    slug: "greeting-cards",
    description: "Custom greeting cards for special occasions"
  },
  { 
    name: "Letterhead", 
    category: "Commercial", 
    icon: Tag, 
    slug: "letterhead",
    description: "Professional letterhead for business correspondence"
  },
  {
    name: "Mailing Labels",
    category: "Commercial",
    icon: ScanBarcode,
    slug: "mailing-labels",
    description: "Custom mailing labels for efficient shipping"
  },
];

const industrialProducts: ProductItem[] = [
  {
    name: "Polycarbonate Labels",
    category: "Industrial",
    icon: Layers,
    slug: "polycarbonate-labels",
    description: "Durable PC stickers for harsh environments"
  },
  {
    name: "Self Adhesive Labels",
    category: "Industrial",
    icon: Tag,
    slug: "self-adhesive-labels",
    description: "Versatile self-adhesive solutions for various applications"
  },
  { 
    name: "ESD Labels", 
    category: "Industrial", 
    icon: Cpu, 
    slug: "esd-labels",
    description: "Electrostatic discharge protection labels for electronics"
  },
  {
    name: "Bar Code Labels",
    category: "Industrial",
    icon: Barcode,
    slug: "bar-code-labels",
    description: "High-quality barcode labels for inventory management"
  },
  {
    name: "High Temperature Labels",
    category: "Industrial",
    icon: Thermometer,
    slug: "high-temperature-labels",
    description: "Heat-resistant labels for extreme conditions"
  },
  {
    name: "Key Pad Labels",
    category: "Industrial",
    icon: Keyboard,
    slug: "key-pad-labels",
    description: "Durable keypad overlays and labels"
  },
  {
    name: "Security Labels",
    category: "Industrial",
    icon: ShieldAlert,
    slug: "security-labels",
    description: "Tamper-evident security labels for protection"
  },
  {
    name: "Automotive Labels",
    category: "Industrial",
    icon: ShieldCheck,
    slug: "automotive-labels",
    description: "Specialized labels for automotive applications"
  },
  {
    name: "Safety Signs",
    category: "Industrial",
    icon: ShieldAlert,
    slug: "safety-signs",
    description: "Essential safety signage for workplace protection"
  },
  {
    name: "Laser Marking Labels",
    category: "Industrial",
    icon: Flame,
    slug: "laser-marking-labels",
    description: "Precision laser marking solutions"
  },
];

const TABS = ["Industrial", "Commercial"] as const;

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Industrial");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [rotationOffset, setRotationOffset] = useState(0);

  const activeProducts = activeTab === "Industrial" ? industrialProducts : commercialProducts;
  const itemsPerPage = 8;
  const totalPages = Math.ceil(activeProducts.length / itemsPerPage);
  const visibleProducts = activeProducts.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  // Smooth rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotationOffset(prev => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Auto-advance pages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage(prev => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  // Reset page when switching tabs
  useEffect(() => {
    setCurrentPage(0);
    setSelectedProduct(null);
  }, [activeTab]);

  const getProductPosition = (index: number, total: number) => {
    const baseAngle = (index / total) * 360 + rotationOffset;
    const radius = 180;
    const radian = (baseAngle * Math.PI) / 180;
    
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius,
      angle: baseAngle,
      depth: Math.sin(radian) * 0.5 + 0.5, // 0 to 1 for depth sorting
    };
  };

  const activeGradient = activeTab === "Industrial" 
    ? "from-blue-600 via-blue-700 to-blue-800"
    : "from-amber-500 via-orange-500 to-red-500";

  const activeBorder = activeTab === "Industrial"
    ? "border-blue-400/30"
    : "border-orange-400/30";

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main glow */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial ${activeGradient} opacity-20 blur-3xl`}
        />
        
        {/* Animated rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-[500px] h-[500px] rounded-full border border-white/10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 rounded-full border border-white/5"
          />
        </div>
        
        {/* Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            animate={{
              x: [0, Math.cos(i * 18) * 200, 0],
              y: [0, Math.sin(i * 18) * 200, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
            style={{
              left: "50%",
              top: "50%",
            }}
          />
        ))}
      </div>

      {/* Tab Switcher */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30">
        <motion.div 
          className="flex bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl p-1 shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {TABS.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-8 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${
                activeTab === tab
                  ? "text-white"
                  : "text-white/60 hover:text-white/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${activeGradient} shadow-lg`}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {tab === "Industrial" ? <Cpu size={16} /> : <Sparkle size={16} />}
                {tab}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Central CTA Button */}
      <motion.div
        className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 0.3 
        }}
      >
        <motion.button
          className={`group relative w-40 h-40 rounded-full bg-gradient-to-br from-white to-gray-100 shadow-2xl border-2 ${activeBorder} overflow-hidden`}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: "0 20px 60px -10px rgba(0,0,0,0.3)" 
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert("Navigate to products page")}
        >
          {/* Inner glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${activeGradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-gray-800">
            <Star className="mb-2 group-hover:rotate-180 transition-transform duration-500" size={28} />
            <span className="text-xs font-bold uppercase tracking-wider mb-1">Explore</span>
            <span className="text-sm font-semibold">Products</span>
          </div>
          
          {/* Hover effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
            animate={{
              translateX: ["100%", "-100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        </motion.button>
      </motion.div>

      {/* Product Orbit */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {visibleProducts.map((product, index) => {
            const position = getProductPosition(index, visibleProducts.length);
            const Icon = product.icon;
            const isHovered = hoveredIndex === index;
            const isSelected = selectedProduct === index;
            
            return (
              <motion.div
                key={`${activeTab}-${currentPage}-${index}`}
                className="absolute top-1/2 left-1/2"
                initial={{ 
                  opacity: 0, 
                  scale: 0.3,
                  x: 0,
                  y: 0,
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 0.7 + position.depth * 0.3,
                  x: position.x,
                  y: position.y,
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.3,
                  transition: { duration: 0.2 }
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 25,
                  delay: index * 0.1
                }}
                style={{
                  zIndex: Math.round(position.depth * 100) + (isHovered ? 1000 : 0),
                  filter: `brightness(${0.7 + position.depth * 0.3})`,
                }}
              >
                <motion.button
                  className={`group relative w-24 h-24 rounded-2xl backdrop-blur-md border transition-all duration-300 ${
                    activeTab === "Industrial"
                      ? "bg-gradient-to-br from-blue-600/30 to-blue-800/20 border-blue-400/40 hover:border-blue-300/60"
                      : "bg-gradient-to-br from-orange-500/30 to-red-600/20 border-orange-400/40 hover:border-orange-300/60"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedProduct(isSelected ? null : index)}
                  whileHover={{ 
                    scale: 1.2,
                    rotateY: 10,
                    rotateX: 5,
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Glow effect */}
                  {isHovered && (
                    <motion.div
                      className={`absolute -inset-2 rounded-3xl bg-gradient-to-r ${activeGradient} opacity-50 blur-lg`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full p-2">
                    <motion.div
                      animate={{ rotateY: isHovered ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon 
                        size={28} 
                        className="text-white drop-shadow-lg mb-1" 
                        style={{ transform: "translateZ(10px)" }}
                      />
                    </motion.div>
                    <span 
                      className="text-[10px] font-semibold text-white text-center leading-tight line-clamp-2"
                      style={{ transform: "translateZ(5px)" }}
                    >
                      {product.name}
                    </span>
                  </div>

                  {/* Category badge */}
                  <motion.div
                    className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wide ${
                      activeTab === "Industrial"
                        ? "bg-blue-500 text-white"
                        : "bg-orange-500 text-white"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0, 
                      y: isHovered ? 0 : 10 
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {product.category}
                  </motion.div>
                </motion.button>

                {/* Product Detail Popup */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      className="absolute left-1/2 top-full mt-4 -translate-x-1/2 w-72 z-50"
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
                        {/* Close button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProduct(null);
                          }}
                          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                        >
                          <span className="text-white text-lg leading-none">×</span>
                        </button>

                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${
                            activeTab === "Industrial" 
                              ? "bg-blue-500/20" 
                              : "bg-orange-500/20"
                          }`}>
                            <Icon size={24} className="text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-bold text-white mb-2 text-lg">
                              {product.name}
                            </h3>
                            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                              {product.description}
                            </p>
                            
                            <motion.button
                              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                                activeTab === "Industrial"
                                  ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600"
                                  : "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500"
                              } text-white shadow-lg hover:shadow-xl`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => alert(`Learn more about ${product.name}`)}
                            >
                              Learn More
                              <ArrowRight size={16} />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Page Indicators */}
      {totalPages > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <motion.button
              key={pageIndex}
              onClick={() => setCurrentPage(pageIndex)}
              className={`h-3 rounded-full transition-all duration-300 ${
                pageIndex === currentPage 
                  ? `w-8 ${activeTab === "Industrial" ? "bg-blue-400" : "bg-orange-400"}` 
                  : "w-3 bg-white/30 hover:bg-white/50"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      )}

      {/* Bottom CTA */}
      <motion.div 
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.button
          className="text-white/80 hover:text-white text-sm font-semibold uppercase tracking-wider transition-colors group"
          whileHover={{ scale: 1.05 }}
          onClick={() => alert("View all products")}
        >
          View All {activeTab} Solutions
          <motion.div 
            className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mt-1"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProductShowcase;