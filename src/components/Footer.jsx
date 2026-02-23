import { Github, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#020617] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">Codeofy</span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Transforming ideas into powerful digital solutions with innovative
              technology and creative design.
            </p>

            <div className="flex gap-4 text-gray-400">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="hover:text-white hover:scale-110 transition-transform duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                className="hover:text-white hover:scale-110 transition-transform duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://linkedin.com/company/codeofy-tech"
                target="_blank"
                className="hover:text-white hover:scale-110 transition-transform duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com/codeofy.in"
                target="_blank"
                className="hover:text-white hover:scale-110 transition-transform duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                className="hover:text-white hover:scale-110 transition-transform duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">
                Web Development
              </li>
              <li className="hover:text-white cursor-pointer">Mobile Apps</li>
              <li className="hover:text-white cursor-pointer">UI/UX Design</li>
              <li className="hover:text-white cursor-pointer">E-commerce</li>
              <li className="hover:text-white cursor-pointer">Consulting</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                {" "}
                <Link to="/about" className="hover:text-white cursor-pointer">
                  About Us
                </Link>
              </li>

              <li>
                {" "}
                <Link to="/about" className="hover:text-white cursor-pointer">
                  Our Team
                </Link>
              </li>

              <li>
                {" "}
                <Link to="/about" className="hover:text-white cursor-pointer">
                  Careers
                </Link>
              </li>

              <li>
                {" "}
                <Link to="/contact" className="hover:text-white cursor-pointer">
                  Contact
                </Link>
              </li>

              <li>
                {" "}
                <Link to="/about" className="hover:text-white cursor-pointer">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Remote</li>
              <li>Jaipur, Rajasthan, India</li>
              <li>+91 6377385333</li>
              <li>info@codeofy.in</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400">
          © 2025 Codeofy. All rights reserved. Built with passion and
          innovation.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
