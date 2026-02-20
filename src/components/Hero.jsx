const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center text-white">
      {/* Hero */}
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Your Vision, <span className="text-purple-400">Our Code.</span>
        </h1>

        <p className="text-gray-300 text-lg mb-8">
          We transform your ideas into powerful digital solutions with
          cutting-edge technology and innovative design.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg font-semibold">
            Get Started →
          </button>

          <button className="border border-gray-400 px-6 py-3 rounded-lg">
            ▶ See Portfolio
          </button>
        </div>

        {/* Stats */}
        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-3xl font-bold">10+</h2>
            <p className="text-gray-400">Projects</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">5+</h2>
            <p className="text-gray-400">Clients</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">24/7</h2>
            <p className="text-gray-400">Support</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">100%</h2>
            <p className="text-gray-400">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
