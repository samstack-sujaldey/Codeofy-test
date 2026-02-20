import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent text-white backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-400">Codeofy</div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li>
            {" "}
            <Link to="/" className="hover:text-white cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/about" className="hover:text-white cursor-pointer">
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/services" className="hover:text-white cursor-pointer">
              Services
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/portFolio" className="hover:text-white cursor-pointer">
              Portfolio
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/contact" className="hover:text-white cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>

        {/* Button */}
        <button className="hidden md:block bg-purple-500 hover:bg-purple-600 px-5 py-2 rounded-lg font-semibold">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
