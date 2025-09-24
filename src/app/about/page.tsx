import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About CPT - Chayaprinttech | Leading Label Manufacturing Company",
  description:
    "Learn about Chayaprinttech's journey, mission, and commitment to delivering premium label solutions across multiple industries.",
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cpt-primary to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                About <span className="text-cpt-secondary">CPT</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Chayaprinttech has been at the forefront of label manufacturing,
                delivering innovative solutions that meet the evolving needs of
                businesses across diverse industries.
              </p>
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

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our <span className="text-cpt-primary">Story</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to revolutionize the labeling industry,
                Chayaprinttech (CPT) has grown from a small printing business to
                a trusted name in high-quality label manufacturing. Our journey
                began with a simple mission: to provide reliable, durable, and
                innovative labeling solutions that help businesses succeed.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Over the years, we have continuously invested in cutting-edge
                technology, expanded our product range, and built strong
                relationships with clients across various industries. Today, CPT
                stands as a testament to quality, innovation, and
                customer-centricity.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-cpt-primary">
                    500+
                  </div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-cpt-primary">17+</div>
                  <div className="text-gray-600">Product Categories</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-br from-cpt-primary to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-4xl">🏭</span>
                </div>
                <div className="h-32 bg-gradient-to-br from-cpt-secondary to-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-3xl">⚡</span>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white text-3xl">🎯</span>
                </div>
                <div className="h-48 bg-gradient-to-br from-cpt-secondary to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-4xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & <span className="text-cpt-primary">Vision</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cpt-primary rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide innovative, high-quality labeling solutions that help
                businesses across industries achieve their goals. We are
                committed to excellence in manufacturing, customer service, and
                continuous improvement in our products and processes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cpt-secondary rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become the leading global provider of labeling solutions,
                recognized for our innovation, quality, and customer
                satisfaction. We envision a future where CPT labels are
                synonymous with reliability and excellence in every industry we
                serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-cpt-primary">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our every decision and interaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏆",
                title: "Quality Excellence",
                description:
                  "We never compromise on quality, ensuring every product meets the highest standards.",
              },
              {
                icon: "🤝",
                title: "Customer Focus",
                description:
                  "Our customers are at the heart of everything we do. Their success is our success.",
              },
              {
                icon: "💡",
                title: "Innovation",
                description:
                  "We continuously innovate to provide cutting-edge solutions for evolving needs.",
              },
              {
                icon: "🌱",
                title: "Sustainability",
                description:
                  "We are committed to environmentally responsible manufacturing practices.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-cpt-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-cpt-primary/20 transition-colors duration-200">
                  <span className="text-4xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-cpt-primary">CPT</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  title: "Advanced Manufacturing",
                  description:
                    "State-of-the-art equipment and processes ensure consistent quality and efficiency.",
                },
                {
                  title: "Industry Expertise",
                  description:
                    "Deep understanding of diverse industry requirements and compliance standards.",
                },
                {
                  title: "Custom Solutions",
                  description:
                    "Tailored products designed to meet your specific business needs.",
                },
                {
                  title: "Reliable Delivery",
                  description:
                    "On-time delivery with flexible scheduling to meet your deadlines.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cpt-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to Work Together?
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us today to discuss your labeling needs and discover how
                CPT can help your business achieve its goals with our premium
                solutions.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="block w-full bg-cpt-primary hover:bg-cpt-secondary text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/products"
                  className="block w-full border-2 border-cpt-primary text-cpt-primary hover:bg-cpt-primary hover:text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
