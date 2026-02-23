import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/30 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-block mb-6 px-4 py-1 rounded-full bg-white/10 backdrop-blur text-purple-300 text-sm"
        >
          🚀 Building Digital Experiences
        </motion.span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6">
          Turning <span className="text-purple-400">Ideas</span> Into <br />
          Powerful <span className="text-indigo-400">Digital Products</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-10">
          We design and develop high-performance websites and apps that help
          businesses grow faster.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.08 }}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-4 rounded-xl font-semibold shadow-lg"
            >
              Get Started →
            </motion.button>
          </Link>

          <Link to="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-white/30 px-8 py-4 rounded-xl"
            >
              View Portfolio
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
