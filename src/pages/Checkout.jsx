import { useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Checkout = () => {
  const { state } = useLocation();
  const [managementPeriod, setManagementPeriod] = useState("");
  const basePrice = Number(state?.price?.replace(/[₹,]/g, "")) || 0;

  const managementCharges = {
    "1_5_years": 5000,
    "2_years": 8000,
  };

  const extraCharge =
    managementPeriod === "1_5_years" || managementPeriod === "2_years"
      ? managementCharges[managementPeriod]
      : 0;

  const finalPrice = basePrice + extraCharge;


  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
    websiteType: "",
    budget: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Selected Plan:", state);
    console.log("User Details:", form);

    alert("Proceeding to payment...");
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen pt-32 pb-24 bg-[#0f0c1d] text-white">
        <div className="max-w-lg mx-auto px-6">
          <h1 className="text-3xl font-bold mb-1">{state?.plan} Plan</h1>
          <p className="text-gray-300 mb-2">
            Base Price: ₹{basePrice.toLocaleString()}
          </p>

          {extraCharge > 0 && (
            <p className="text-yellow-400 mb-2">
              Management Charges: +₹{extraCharge.toLocaleString()}
            </p>
          )}

          <p className="text-green-400 font-semibold mb-8">
            Total Payable: ₹{finalPrice.toLocaleString()}
          </p>
          {/* Name */}
          <input
            name="name"
            placeholder="Full Name"
            className="w-full p-3 mb-4 rounded bg-[#1a1630] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={handleChange}
          />

          {/* Email */}
          <input
            name="email"
            placeholder="Email Address"
            className="w-full p-3 mb-4 rounded bg-[#1a1630] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={handleChange}
          />

          {/* Phone */}
          <input
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 mb-4 rounded bg-[#1a1630] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={handleChange}
          />

          {/* Website Type */}
          <select
            name="websiteType"
            className="w-full p-3 mb-4 rounded bg-[#1a1630] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={handleChange}
          >
            <option value="">Website Type</option>
            <option>Business Website</option>
            <option>Portfolio</option>
            <option>E-commerce</option>
            <option>Landing Page</option>
            <option>Other</option>
          </select>

          {/* Requirement */}
          <textarea
            name="requirement"
            placeholder="Briefly describe what you want..."
            className="w-full p-3 mb-4 rounded bg-[#1a1630] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="4"
            onChange={handleChange}
          />

          {/* Budget */}
          <select
            className="w-full p-3 mb-4 rounded bg-[#1a1630] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setManagementPeriod(e.target.value)}
          >
            <option value="">Mangement Period</option>
            <option value="6_months">6 Months</option>
            <option value="1_year">1 Year</option>
            <option value="1_5_years">1 Year & 6 Months</option>
            <option value="2_years">2 Year</option>
          </select>

          {managementPeriod && (
            <p className="mb-4 text-sm font-semibold">
              {managementPeriod === "6_months" ||
              managementPeriod === "1_year" ? (
                <span className="text-green-400">✔ Management: FREE</span>
              ) : (
                <span className="text-yellow-400">
                  ⚠ Management: Charges Apply
                </span>
              )}
            </p>
          )}

          {/* Button */}
          <button
            onClick={handleSubmit}
            className="w-full mt-6 bg-purple-600 py-3 rounded font-semibold"
          >
            Continue to Payment
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Checkout;
