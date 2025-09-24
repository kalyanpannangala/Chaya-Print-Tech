import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: "Industrial Labels", href: "/products?category=industrial-labels" },
    { name: "Commercial Labels", href: "/products?category=commercial-labels" },
    {
      name: "Polycarbonate Labels",
      href: "/products/polycarbonate-labels-pc-stickers",
    },
    {
      name: "High Temperature Labels",
      href: "/products/high-temperature-labels",
    },
    { name: "Self Adhesive Labels", href: "/products/self-adhesive-labels" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "All Products", href: "/products" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ];

  const contactInfo = {
    phones: ["+91 90669 44070", "+91 99851 42346"],
    emails: ["chayaprinttech.2017@gmail.com", "sales@chayaprinttech.in"],
    address:
      "1/2C, Eshwar Temple Road, Kanakapura Main Road, Doddakallasandra, Bangalore-560 062",
  };

  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#04499C] to-[#032F63] text-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/CPT.png"
                alt="Chayaprinttech Logo"
                width={80}
                height={80}
                className="object-contain bg-white rounded-full p-2 shadow-md hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-200 text-base leading-relaxed max-w-md">
              Leading manufacturer of high-quality labels and printing
              solutions. We serve diverse industries with innovative and
              reliable products.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-200 hover:bg-[#F4A405] hover:text-black transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#F4A405] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-200 hover:text-white relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4A405] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-[#F4A405] mb-4">
              Our Products
            </h3>
            <ul className="space-y-3">
              {productLinks.map((product, index) => (
                <li key={index}>
                  <Link
                    href={product.href}
                    className="text-gray-200 hover:text-white relative group"
                  >
                    {product.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4A405] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#F4A405] mb-4">
              Get in Touch
            </h3>
            <div className="space-y-4 text-gray-200">
              <div>
                <h4 className="font-medium text-white mb-1">Call Us:</h4>
                {contactInfo.phones.map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone}`}
                    className="block hover:text-[#F4A405] transition-colors duration-300"
                  >
                    {phone}
                  </a>
                ))}
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Mail Us:</h4>
                {contactInfo.emails.map((email, i) => (
                  <a
                    key={i}
                    href={`mailto:${email}`}
                    className="block hover:text-[#F4A405] transition-colors duration-300 break-all"
                  >
                    {email}
                  </a>
                ))}
              </div>
              <div className="flex items-start space-x-2 pt-2">
                <MapPin className="w-5 h-5 text-[#F4A405] mt-1 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
            <p>© {currentYear} Chayaprinttech (CPT). All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="hover:text-[#F4A405] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-[#F4A405] transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
