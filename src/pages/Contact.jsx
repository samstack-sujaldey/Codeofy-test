import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-br from-[#2b1b4d] via-[#3a236a] to-[#1b1436] text-white px-6 py-24">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to start your project? Get in touch with us today and let's
            discuss how we can bring your vision to life.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="space-y-8">
            {/* Get in Touch */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300 text-sm">info@codeofy.in</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-300 text-sm">+91 6377385333</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-300 text-sm">
                      Jaipur, Rajasthan, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-10 border border-white/10 text-center">
              <MapPin className="mx-auto text-purple-400 mb-4" size={40} />
              <h3 className="text-lg font-semibold">Our Location</h3>
              <p className="text-gray-400 text-sm mt-2">
                Interactive map coming soon
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-semibold mb-6">Send Message</h2>

            <form className="space-y-5">
              <div>
                <label className="text-sm text-gray-300">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:border-purple-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition py-3 rounded-lg font-semibold"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contact;
