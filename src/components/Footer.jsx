import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

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
              Transforming ideas into powerful digital solutions with
              innovative technology and creative design.
            </p>

            <div className="flex gap-4 text-gray-400">
              <Github className="hover:text-white cursor-pointer" size={18} />
              <Twitter className="hover:text-white cursor-pointer" size={18} />
              <Linkedin className="hover:text-white cursor-pointer" size={18} />
              <Instagram className="hover:text-white cursor-pointer" size={18} />
              <Facebook className="hover:text-white cursor-pointer" size={18} />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Web Development</li>
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
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Team</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
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
          © 2025 Codeofy. All rights reserved. Built with passion and innovation.
        </div>

      </div>
    </footer>
  );
};

export default Footer;