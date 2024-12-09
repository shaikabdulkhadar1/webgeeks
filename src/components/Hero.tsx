import { Suspense, memo } from "react";
import Scene from "./3d/Scene";

const Hero = memo(() => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(113,113,113,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(113,113,113,0.3),transparent_50%)]" />

        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </div>

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
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative px-8 py-4 overflow-hidden rounded-lg bg-gray-600 backdrop-blur-sm hover:bg-transparent transition-all border border-gray-300 text-white hover:text-black font-medium"
              >
                Start Your Journey
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="group relative px-8 py-4 overflow-hidden rounded-lg font-medium text-gray-500 hover:text-white backdrop-blur-sm border border-gray-300 hover:bg-gray-600 transition-all"
              >
                Explore Our Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

Hero.displayName = "Hero";
export default Hero;
