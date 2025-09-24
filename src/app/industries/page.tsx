import Link from "next/link";

export const metadata = {
  title: "Industries We Serve - CPT | Label Solutions Across Multiple Sectors",
  description:
    "CPT serves Healthcare, Manufacturing, Retail, Banking, Education, Automotive and more industries with specialized labeling solutions.",
};

export default function Industries() {
  const industries = [
    {
      name: "Healthcare",
      icon: "🏥",
      description:
        "Medical-grade labels for hospitals, clinics, and pharmaceutical companies requiring compliance with stringent regulations.",
      products: [
        "Medical Device Labels",
        "Pharmaceutical Labels",
        "Patient ID Bands",
        "Laboratory Labels",
        "Sterilization Indicators",
      ],
      benefits: [
        "FDA Compliant",
        "Biocompatible Materials",
        "Sterilization Compatible",
        "Tamper Evident",
      ],
      applications: [
        "Medical Devices",
        "Drug Packaging",
        "Patient Records",
        "Laboratory Samples",
      ],
      color: "from-red-500 to-pink-600",
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      description:
        "Industrial-strength labels designed to withstand harsh manufacturing environments and processes.",
      products: [
        "Asset Tags",
        "Inventory Labels",
        "Safety Labels",
        "Process Control Labels",
        "Quality Control Labels",
      ],
      benefits: [
        "Chemical Resistance",
        "High Temperature Tolerance",
        "Durable Adhesives",
        "Machine Readable",
      ],
      applications: [
        "Equipment Identification",
        "Work-in-Process Tracking",
        "Quality Control",
        "Safety Compliance",
      ],
      color: "from-blue-600 to-indigo-700",
    },
    {
      name: "Retail",
      icon: "🛒",
      description:
        "Eye-catching retail labels that enhance product presentation and improve customer experience.",
      products: [
        "Price Labels",
        "Promotional Stickers",
        "Product Labels",
        "Brand Labels",
        "Shelf Labels",
      ],
      benefits: [
        "Attractive Designs",
        "Easy Application",
        "Cost Effective",
        "Brand Enhancement",
      ],
      applications: [
        "Product Pricing",
        "Promotions",
        "Brand Identity",
        "Inventory Management",
      ],
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Banking",
      icon: "🏦",
      description:
        "Secure labeling solutions for financial institutions requiring high security and professional appearance.",
      products: [
        "Security Labels",
        "Document Labels",
        "Asset Tags",
        "Tamper Evident Labels",
        "Card Labels",
      ],
      benefits: [
        "High Security",
        "Professional Appearance",
        "Tamper Evidence",
        "Regulatory Compliance",
      ],
      applications: [
        "Document Security",
        "Asset Protection",
        "Card Production",
        "Branch Identification",
      ],
      color: "from-purple-600 to-violet-700",
    },
    {
      name: "Education",
      icon: "🎓",
      description:
        "Educational labels for schools, universities, and training institutions to organize and identify resources.",
      products: [
        "Student ID Labels",
        "Asset Labels",
        "Library Labels",
        "Equipment Tags",
        "Safety Signs",
      ],
      benefits: [
        "Cost Effective",
        "Easy Application",
        "Durable",
        "Child Safe Materials",
      ],
      applications: [
        "Student Identification",
        "Asset Management",
        "Library Systems",
        "Safety Signage",
      ],
      color: "from-yellow-500 to-orange-600",
    },
    {
      name: "Service Center",
      icon: "🔧",
      description:
        "Service and repair labels for tracking maintenance, warranty, and service history of equipment.",
      products: [
        "Service Labels",
        "Maintenance Tags",
        "Warranty Labels",
        "Repair History Labels",
        "QR Code Labels",
      ],
      benefits: [
        "Trackable",
        "Weather Resistant",
        "Sequential Numbering",
        "Scannable Codes",
      ],
      applications: [
        "Service Tracking",
        "Maintenance Schedules",
        "Warranty Management",
        "Repair Documentation",
      ],
      color: "from-gray-600 to-slate-700",
    },
    {
      name: "Automotive",
      icon: "🚗",
      description:
        "Automotive-grade labels meeting OEM standards for vehicle manufacturing and aftermarket applications.",
      products: [
        "VIN Labels",
        "Engine Bay Labels",
        "Interior Labels",
        "Tire Labels",
        "Parts Identification",
      ],
      benefits: [
        "OEM Approved",
        "Temperature Cycling",
        "Chemical Resistance",
        "Long-term Durability",
      ],
      applications: [
        "Vehicle Identification",
        "Parts Tracking",
        "Safety Compliance",
        "Service Information",
      ],
      color: "from-red-600 to-rose-700",
    },
    {
      name: "Entertainment",
      icon: "🎭",
      description:
        "Creative labeling solutions for entertainment venues, events, and media production facilities.",
      products: [
        "Event Labels",
        "Admission Stickers",
        "Equipment Tags",
        "Brand Labels",
        "Promotional Labels",
      ],
      benefits: [
        "Creative Designs",
        "Custom Shapes",
        "Vibrant Colors",
        "Special Effects",
      ],
      applications: [
        "Event Management",
        "Equipment Identification",
        "Brand Promotion",
        "Access Control",
      ],
      color: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cpt-primary to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-cpt-secondary">Industries</span> We Serve
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Specialized labeling solutions tailored to meet the unique
            requirements and standards of diverse industries worldwide.
          </p>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted Across{" "}
              <span className="text-cpt-primary">Multiple Sectors</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across various industries, each with unique
              challenges and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-6xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-cpt-primary transition-colors duration-200">
                  {industry.name}
                </h3>
                <div className="mt-4 w-full h-1 bg-gradient-to-r {industry.color} rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industry Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <div
                key={index}
                id={industry.name.toLowerCase()}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-6">
                    <div className="text-5xl mr-4">{industry.icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {industry.name}
                      </h3>
                      <div
                        className={`w-20 h-1 bg-gradient-to-r ${industry.color} rounded-full mt-2`}
                      ></div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Products:
                      </h4>
                      <ul className="space-y-2">
                        {industry.products.map((product, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <div className="w-2 h-2 bg-cpt-primary rounded-full mr-3"></div>
                            {product}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Benefits:
                      </h4>
                      <ul className="space-y-2">
                        {industry.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <div className="w-2 h-2 bg-cpt-secondary rounded-full mr-3"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-block bg-cpt-primary hover:bg-cpt-secondary text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Get Industry-Specific Quote
                  </Link>
                </div>

                <div
                  className={`bg-white p-8 rounded-xl shadow-lg ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-6">
                    Applications in {industry.name}
                  </h4>
                  <div className="space-y-4">
                    {industry.applications.map((app, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="w-8 h-8 bg-cpt-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-cpt-primary font-bold text-sm">
                            {idx + 1}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{app}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-20 bg-cpt-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry <span className="text-cpt-secondary">Impact</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our solutions make a difference across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cpt-secondary mb-2">
                8+
              </div>
              <div className="text-blue-100">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cpt-secondary mb-2">
                1000+
              </div>
              <div className="text-blue-100">Clients Worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cpt-secondary mb-2">
                99.9%
              </div>
              <div className="text-blue-100">Quality Compliance</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cpt-secondary mb-2">
                24/7
              </div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your{" "}
            <span className="text-cpt-primary">Industry Operations</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact our industry experts to discuss how CPT&apos;s specialized
            labeling solutions can address your specific industry challenges and
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cpt-primary hover:bg-cpt-secondary text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Speak with an Expert
            </Link>
            <Link
              href="/products"
              className="border-2 border-cpt-primary text-cpt-primary hover:bg-cpt-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
