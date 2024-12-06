import { Suspense, useState, useEffect } from "react";
import Scene from "./3d/Scene";
import Loader from "./Loader";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(113,113,113,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(113,113,113,0.3),transparent_50%)]" />

        {/* 3D Scene */}
        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              Digital Innovation Studio
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12">
              Crafting exceptional digital experiences for forward-thinking
              brands
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#contact"
                className="group relative px-8 py-4 overflow-hidden rounded-lg bg-gray-600 backdrop-blur-sm hover:bg-transparent transition-all border border-gray-300"
              >
                <span className="relative z-10 text-white group-hover:text-gray-500 font-medium">
                  Start Your Journey
                </span>
                {/* <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-500 opacity-0 group-hover:opacity-20 transition-opacity" /> */}
              </a>
              <a
                href="#work"
                className="group relative px-8 py-4 overflow-hidden rounded-lg backdrop-blur-sm border border-gray-300 hover:bg-gray-600 transition-all"
              >
                <span className="relative z-10 text-gray-500 group-hover:text-white font-medium transition-colors">
                  Explore our Projects
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-500 opacity-0 group-hover:opacity-20 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
