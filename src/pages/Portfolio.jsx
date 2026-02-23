import Navbar from "../components/Navbar";
import analytics from "../assets/analytics.jpeg";
import Food from "../assets/Food.jpeg";
import saas from "../assets/saas.jpeg";
import ecommerce from "../assets/ecommerce.jpeg";
import TaskManager from "../assets/TaskManager.jpeg";
import portfolioWeb from "../assets/portfolioWeb.jpeg";
import Footer from "../components/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const projects = [
  {
    type: "Web Application",
    title: "Analytics Dashboard",
    desc: "Real-time analytics dashboard with data visualization",
    img: analytics,
  },
  {
    type: "Mobile App",
    title: "Restaurant App",
    desc: "Food delivery app with real-time tracking",
    img: Food,
  },
  {
    type: "Web Application",
    title: "SaaS Platform",
    desc: "Cloud-based SaaS solution for business management",
    img: saas,
  },
  {
    type: "Web Application",
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce solution with payment integration",
    img: ecommerce,
  },
  {
    type: "Mobile App",
    title: "Task Management App",
    desc: "Cross-platform mobile app for team collaboration",
    img: TaskManager,
  },
  {
    type: "Website",
    title: "Portfolio Website",
    desc: "Modern portfolio website with dynamic content",
    img: portfolioWeb,
  },
];

const Portfolio = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-[#2b1b4d] to-[#3b2663] text-white pt-32 px-6 pb-30">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h1>
          <p className="text-gray-300">
            Explore our recent projects and see how we've helped businesses
            transform their digital presence.
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e1638] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
            >
              {/* Image */}
              <LazyLoadImage
                src={item.img}
                alt={item.title}
                effect="blur"
                className="h-full w-full object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-purple-400 mb-2">{item.type}</p>

                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <div className="flex gap-3 text-gray-400">
                    <span className="cursor-pointer hover:text-white">🔗</span>
                    <span className="cursor-pointer hover:text-white">↗</span>
                  </div>
                </div>

                <p className="text-gray-300 mt-3 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Portfolio;
