import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Services = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen pt-32 pb-24 bg-gradient-to-br from-[#141126] via-[#1e1a3a] to-[#1b1535] text-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-purple-400">Services</span>
            </h1>
            <p className="text-gray-300">
              Premium website solutions tailored for freelancers, businesses,
              and startups. Each plan includes responsive design, quality
              support, and expert development.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Starter */}
            <PricingCard
              title="Starter"
              price="₹9,999"
              subtitle="One-Time"
              features={[
                "1-Page Responsive Website",
                "Basic SEO Optimization",
                "WhatsApp Contact + Inquiry Form",
                "2 Revisions Included",
                "Delivery in 5–6 Days",
              ]}
            />

            {/* Growth (Popular) */}
            <PricingCard
              popular
              title="Growth"
              price="₹19,999"
              subtitle="One-Time"
              features={[
                "Up to 5 Custom Pages",
                "Brand-Aligned Design",
                "Social Media & Contact Integration",
                "Basic Admin Panel or Blog",
                "3 Revisions Included",
                "Delivery in 7–10 Days",
              ]}
            />

            {/* Scale */}
            <PricingCard
              title="Scale"
              price="₹29,999+"
              subtitle="Project Based"
              features={[
                "Everything in Growth Plan",
                "E-commerce Integration (Up to 25 Products)",
                "Payment Gateway Setup",
                "Custom CMS or Dashboard",
                "Priority Support",
                "5 Revisions Included",
                "Delivery in 10–14 Days",
              ]}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

const PricingCard = ({ title, price, subtitle, features, popular }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout", {
      state: { plan: title, price },
    });
  };

  return (
    <div
      className={`relative rounded-2xl p-10 bg-gradient-to-b from-[#4c6ef5] to-[#5f3dc4]
      ${popular ? "scale-105 shadow-2xl" : "opacity-95"}`}
    >
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-sm px-4 py-1 rounded-full">
          ⭐ Most Popular
        </div>
      )}

      <h3 className="text-2xl font-semibold mb-2 text-center">{title}</h3>
      <h2 className="text-4xl font-bold text-center mb-1">{price}</h2>
      <p className="text-center text-sm mb-8">{subtitle}</p>

      <ul className="space-y-3 mb-10">
        {features.map((item, index) => (
          <li key={index} className="flex items-center gap-3 text-sm">
            <span className="text-green-400">✔</span>
            {item}
          </li>
        ))}
      </ul>

      <button
        onClick={handleClick}
        className={`w-full py-3 rounded-lg font-semibold
        ${popular ? "bg-white text-purple-600" : "bg-white/20 hover:bg-white/30"}`}
      >
        Get Started
      </button>
    </div>
  );
};

export default Services;
