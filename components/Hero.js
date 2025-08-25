"use client";

function Hero() {
  try {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const heroImages = [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    ];
    const total = heroImages.length;

    // Auto-slide every 3 seconds
    React.useEffect(() => {
      const id = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % total);
      }, 3000);
      return () => clearInterval(id);
    }, [total]);

    return (
      <section
        id="home"
        className="min-h-screen flex items-center relative bg-gradient-to-r from-gray-900 to-gray-700"
        data-name="hero"
        data-file="components/Hero.js"
      >
        {/* Background Images Carousel */}
        <div className="absolute inset-0 overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              aria-hidden={index !== currentSlide}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          {/* Subtle dark overlay so text pops */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 fade-in text-shadow">
              Premium Pipes & Motors
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-200 mb-8 fade-in text-shadow"
              style={{ animationDelay: "0.3s" }}
            >
              Your trusted partner for industrial-grade piping solutions and
              high-performance motor systems
            </p>
            <div className="fade-in" style={{ animationDelay: "0.6s" }}>
              <button
                onClick={() =>
                  document
                    .getElementById("products")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary mr-4 mb-4"
              >
                View Products
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="btn-secondary mb-4"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Hero component error:", error);
    return null;
  }
}
