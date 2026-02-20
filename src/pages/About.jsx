import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen pt-32 pb-24 bg-gradient-to-br from-[#1b1a3a] via-[#2e245e] to-[#3a2a6d] text-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Page Heading */}
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-purple-400">Codeofy</span>
            </h1>
            <p className="text-gray-300">
              We are a team of passionate developers and designers committed to
              delivering exceptional digital solutions that drive business
              growth and user engagement.
            </p>
          </div>

          {/* Mission + Stats */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

            {/* Mission */}
            <div>
              <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                To empower businesses with innovative technology solutions that
                transform ideas into reality. We believe in creating digital
                experiences that are not just functional, but also beautiful
                and intuitive.
              </p>
              <p className="text-gray-300">
                Our team combines years of experience with cutting-edge
                technologies to deliver solutions that exceed expectations and
                drive real business results.
              </p>
            </div>

            {/* Stats Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 grid grid-cols-2 gap-10 text-center">
              <Stat value="5+" label="Years Experience" color="text-purple-400" />
              <Stat value="10+" label="Team Members" color="text-blue-400" />
              <Stat value="15+" label="Technologies" color="text-purple-400" />
              <Stat value="24/7" label="Support" color="text-blue-400" />
            </div>

          </div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-8">
            <Feature
              title="Fast Delivery"
              text="Quick turnaround times without compromising quality"
            />
            <Feature
              title="Responsive Design"
              text="Perfect user experience across all devices"
            />
            <Feature
              title="Expert Team"
              text="Skilled developers and designers working together"
            />
            <Feature
              title="AI Integration"
              text="Cutting-edge AI solutions for modern challenges"
            />
          </div>

        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

const Stat = ({ value, label, color }) => (
  <div>
    <h3 className={`text-3xl font-bold ${color}`}>{value}</h3>
    <p className="text-gray-300">{label}</p>
  </div>
);

const Feature = ({ title, text }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition">
    <h4 className="text-xl font-semibold mb-3">{title}</h4>
    <p className="text-gray-300 text-sm">{text}</p>
  </div>
);

export default About;