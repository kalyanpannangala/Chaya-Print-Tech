import Link from "next/link";
import {
  Tag,
  ClipboardList,
  Zap,
  ScanBarcode,
  Layers,
  ThermometerSun,
  Keyboard,
  Gem,
  Car,
  ShieldCheck,
  Beaker,
  TriangleAlert,
  PanelsTopLeft,
  Cable,
  ShieldAlert,
  ScanLine,
  Palette,
} from "lucide-react";
import { type ComponentType } from "react";

export const metadata = {
  title: "Products - CPT | Premium Labels & Stickers for All Industries",
  description:
    "Explore CPT's comprehensive range of high-quality labels including Polycarbonate Labels, Self Adhesive Labels, ESD Labels, Barcode Labels and more.",
};

export default function Products() {
  interface ProductCategory {
    name: string;
    description: string;
    features: string[];
    applications: string[];
    icon: ComponentType<{ className?: string }>;
  }

  const productCategories: ProductCategory[] = [
    {
      name: "Polycarbonate Labels (PC Stickers)",
      description:
        "Durable, chemical-resistant labels perfect for harsh environments and industrial applications.",
      features: [
        "Chemical Resistance",
        "High Temperature Tolerance",
        "Scratch Resistant",
        "Long-lasting",
      ],
      applications: [
        "Industrial Equipment",
        "Electronic Devices",
        "Automotive Components",
      ],
      icon: Tag,
    },
    {
      name: "Self Adhesive Labels",
      description:
        "Versatile, easy-to-apply labels suitable for a wide range of applications and surfaces.",
      features: [
        "Strong Adhesion",
        "Easy Application",
        "Various Materials",
        "Custom Designs",
      ],
      applications: ["Packaging", "Product Labeling", "Promotional Items"],
      icon: ClipboardList,
    },
    {
      name: "ESD Labels",
      description:
        "Electrostatic discharge safe labels designed for sensitive electronic components and environments.",
      features: [
        "ESD Protection",
        "Anti-Static Properties",
        "Clean Room Compatible",
        "Traceable",
      ],
      applications: [
        "Electronics Manufacturing",
        "PCB Assembly",
        "Clean Room Operations",
      ],
      icon: Zap,
    },
    {
      name: "Bar code Labels",
      description:
        "High-quality barcode labels for inventory management, tracking, and identification systems.",
      features: [
        "High Scan Accuracy",
        "Durable Print Quality",
        "Various Sizes",
        "Thermal Transfer Compatible",
      ],
      applications: ["Inventory Management", "Asset Tracking", "Point of Sale"],
      icon: ScanBarcode,
    },
    {
      name: "Roll Form Labels",
      description:
        "Continuous roll labels ideal for high-volume applications and automated dispensing systems.",
      features: [
        "High Volume Production",
        "Consistent Quality",
        "Easy Dispensing",
        "Cost Effective",
      ],
      applications: [
        "Manufacturing Lines",
        "Automated Systems",
        "Bulk Labeling",
      ],
      icon: Layers,
    },
    {
      name: "High Temperature Labels",
      description:
        "Specialized labels engineered to withstand extreme temperatures and harsh conditions.",
      features: [
        "Heat Resistance up to 300°C",
        "Chemical Resistance",
        "No Residue",
        "Long-term Durability",
      ],
      applications: [
        "Automotive Manufacturing",
        "Aerospace",
        "Industrial Processes",
      ],
      icon: ThermometerSun,
    },
    {
      name: "Key Pad Labels",
      description:
        "Custom membrane switches and keypad labels with excellent tactile response and durability.",
      features: [
        "Tactile Response",
        "Backlit Compatible",
        "Chemical Resistance",
        "Custom Graphics",
      ],
      applications: [
        "Control Panels",
        "Medical Devices",
        "Industrial Equipment",
      ],
      icon: Keyboard,
    },
    {
      name: "Dome Labels",
      description:
        "3D domed labels that provide a premium look with excellent protection and branding appeal.",
      features: [
        "3D Effect",
        "UV Protection",
        "Scratch Resistant",
        "Premium Appearance",
      ],
      applications: ["Branding", "Automotive Emblems", "Electronics"],
      icon: Gem,
    },
    {
      name: "Automotive Labels",
      description:
        "Specialized labels designed to meet stringent automotive industry standards and requirements.",
      features: [
        "Automotive Grade Adhesive",
        "Temperature Cycling",
        "Chemical Resistance",
        "OEM Approved",
      ],
      applications: [
        "Vehicle Components",
        "Engine Bay",
        "Interior Applications",
      ],
      icon: Car,
    },
    {
      name: "Security Labels",
      description:
        "Tamper-evident and security labels for product authentication and anti-counterfeiting.",
      features: [
        "Tamper Evidence",
        "Void Patterns",
        "Holographic Effects",
        "Unique Numbering",
      ],
      applications: [
        "Product Authentication",
        "Asset Protection",
        "Anti-Counterfeiting",
      ],
      icon: ShieldCheck,
    },
    {
      name: "Polyester Labels",
      description:
        "Durable polyester labels offering excellent chemical resistance and long-term performance.",
      features: [
        "Chemical Resistance",
        "Tear Resistant",
        "Outdoor Durability",
        "Print Stability",
      ],
      applications: [
        "Industrial Equipment",
        "Outdoor Applications",
        "Chemical Containers",
      ],
      icon: Beaker,
    },
    {
      name: "Warning & Caution Labels",
      description:
        "Safety and warning labels compliant with international standards for workplace safety.",
      features: [
        "High Visibility",
        "Standard Compliance",
        "Weather Resistant",
        "Clear Messaging",
      ],
      applications: [
        "Industrial Safety",
        "Equipment Warnings",
        "Hazard Identification",
      ],
      icon: TriangleAlert,
    },
    {
      name: "Aluminum Labels",
      description:
        "Metal labels offering superior durability and professional appearance for demanding applications.",
      features: [
        "Corrosion Resistant",
        "Professional Appearance",
        "Laser Engravable",
        "Long-lasting",
      ],
      applications: [
        "Asset Tags",
        "Equipment Identification",
        "Outdoor Signage",
      ],
      icon: PanelsTopLeft,
    },
    {
      name: "Insulator & Gaskets",
      description:
        "Custom insulators and gaskets for electrical and mechanical applications requiring precision.",
      features: [
        "Electrical Insulation",
        "Custom Die-Cut",
        "Various Materials",
        "Precise Tolerances",
      ],
      applications: [
        "Electrical Panels",
        "Electronic Devices",
        "Mechanical Assemblies",
      ],
      icon: Cable,
    },
    {
      name: "Safety Signs",
      description:
        "Professional safety signage meeting regulatory requirements for workplace and public safety.",
      features: [
        "Regulation Compliant",
        "High Visibility",
        "Durable Materials",
        "Standard Symbols",
      ],
      applications: ["Workplace Safety", "Public Areas", "Emergency Exits"],
      icon: ShieldAlert,
    },
    {
      name: "Laser Marking Labels",
      description:
        "Specialized labels designed for laser marking and engraving applications with excellent contrast.",
      features: [
        "Laser Responsive",
        "High Contrast",
        "Permanent Marking",
        "Various Colors",
      ],
      applications: [
        "Product Identification",
        "Traceability",
        "Serial Numbering",
      ],
      icon: ScanLine,
    },
    {
      name: "Branding Solutions",
      description:
        "Complete branding solutions including custom logos, promotional labels, and brand identity materials.",
      features: [
        "Custom Design",
        "Brand Consistency",
        "Multiple Formats",
        "Marketing Support",
      ],
      applications: [
        "Brand Promotion",
        "Product Marketing",
        "Corporate Identity",
      ],
      icon: Palette,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cpt-primary to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-cpt-secondary">Products</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive range of high-quality labels and stickers designed to
            meet the diverse needs of industries worldwide. From basic
            identification to specialized industrial applications.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete <span className="text-cpt-primary">Product Range</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our extensive collection of premium labeling solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-cpt-primary bg-cpt-primary/5 rounded-xl p-3">
                      <product.icon className="w-10 h-10" />
                    </div>
                    <div className="w-3 h-3 bg-cpt-secondary rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cpt-primary transition-colors duration-200">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-2 h-2 bg-cpt-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Applications:
                    </h4>
                    <div className="space-y-1">
                      {product.applications.map((app, idx) => (
                        <div
                          key={idx}
                          className="text-sm text-gray-600 flex items-center"
                        >
                          <span className="text-cpt-secondary mr-2">•</span>
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/products/${product.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[()&]/g, "")}`}
                    className="block w-full bg-cpt-primary hover:bg-cpt-secondary text-white text-center py-3 rounded-lg font-semibold transition-colors duration-200 group-hover:scale-105 transform"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Need Something <span className="text-cpt-primary">Custom</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Can't find exactly what you're looking for? Our team of experts
              can design and manufacture custom labeling solutions tailored to
              your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-cpt-primary hover:bg-cpt-secondary text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Request Custom Quote
              </Link>
              <Link
                href="/about"
                className="border-2 border-cpt-primary text-cpt-primary hover:bg-cpt-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Summary */}
      <section className="py-20 bg-cpt-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cpt-secondary mb-2">
                17+
              </div>
              <div className="text-blue-100">Product Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cpt-secondary mb-2">
                500+
              </div>
              <div className="text-blue-100">Custom Solutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cpt-secondary mb-2">
                8+
              </div>
              <div className="text-blue-100">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cpt-secondary mb-2">
                24/7
              </div>
              <div className="text-blue-100">Customer Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
