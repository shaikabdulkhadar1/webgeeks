import { useNavigate } from "react-router-dom";
import WorkCard from "./WorkCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with seamless payment integration and inventory management.",
    imageUrl:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    category: "Web Development",
  },
  {
    title: "Financial Dashboard",
    description:
      "Real-time analytics dashboard for monitoring market trends and portfolio performance.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    category: "Data Visualization",
  },
  {
    title: "Healthcare App",
    description:
      "Patient management system with telemedicine capabilities and health tracking.",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    category: "Mobile App",
  },
];

const Work = () => {
  const navigate = useNavigate();

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600">
            Showcasing our latest projects and success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <WorkCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/works")}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 backdrop-blur-sm hover:bg-gray-800 md:py-4 md:text-lg md:px-10"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
