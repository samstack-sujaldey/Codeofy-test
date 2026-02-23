import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Startup Founder",
    text: "Codeofy delivered our product faster than expected. Clean design and solid code!",
  },
  {
    name: "Neha Verma",
    role: "Business Owner",
    text: "Amazing experience. Their team really understands business needs.",
  },
  {
    name: "Rahul Singh",
    role: "Product Manager",
    text: "Top-notch UI/UX and excellent communication throughout the project.",
  },
];

const Testimonials = () => {
  return (
    <>
      <Navbar />
      <section className="py-24 bg-gradient-to-br from-[#1a1446] to-[#0f0c29] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-gray-300 mb-14">
            Trusted by startups, businesses, and entrepreneurs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10"
              >
                <p className="text-gray-200 mb-6">“{t.text}”</p>
                <h4 className="font-semibold">{t.name}</h4>
                <span className="text-sm text-purple-300">{t.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Testimonials;
