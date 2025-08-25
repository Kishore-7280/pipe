"use client";


export default function Products() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [expanded, setExpanded] = React.useState(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const products = [
    { id: 1, title: "Steel Pipes", description: "High-grade carbon steel pipes for industrial applications", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80", category: "Pipes", specifications: ["Various diameters", "Corrosion resistant", "High pressure rated"] },
    { id: 2, title: "PVC Pipes", description: "Durable PVC pipes for plumbing and drainage systems", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=400&q=80", category: "Pipes", specifications: ["Chemical resistant", "Lightweight", "Easy installation"] },
    { id: 3, title: "AC Motors", description: "Efficient three-phase AC motors for industrial machinery", image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=400&q=80", category: "Motors", specifications: ["Energy efficient", "Low maintenance", "Variable speeds"] },
    { id: 4, title: "DC Motors", description: "High-torque DC motors for precise control applications", image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=400&q=80", category: "Motors", specifications: ["Precise control", "High torque", "Compact design"] },
    { id: 5, title: "Copper Pipes", description: "Premium copper pipes for HVAC and plumbing systems", image: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?auto=format&fit=crop&w=400&q=80", category: "Pipes", specifications: ["Antimicrobial", "Heat resistant", "Long lasting"] },
    { id: 6, title: "Servo Motors", description: "Precision servo motors for automation and robotics", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80", category: "Motors", specifications: ["High precision", "Fast response", "Programmable"] },
  ];

  const categories = ["All", "Pipes", "Motors"];
  const filteredProducts = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory);

  // Detect mobile
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile slider
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % filteredProducts.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-3 tracking-tight">Our Products</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">Browse our selection of durable pipes and motors engineered for performance</p>
        </div>

        {/* Category Tabs (always visible) */}
        <div className="flex justify-center space-x-4 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setCurrentSlide(0); }}
              className={`px-6 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-300 ${
                activeCategory === cat ? "bg-[var(--primary-color)] text-white scale-105" : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Desktop Grid */}
        {!isMobile && (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-[var(--primary-color)] text-white text-xs px-3 py-1 rounded-full">{product.category}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                  {expanded === product.id && (
                    <ul className="text-sm text-gray-600 space-y-1 animate-fadeIn">
                      {product.specifications.map((spec, i) => (
                        <li key={i} className="flex items-center">
                          <span className="mr-2 text-green-500">✔</span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex justify-between items-center mt-4">
                    <button onClick={() => setExpanded(expanded === product.id ? null : product.id)} className="text-[var(--primary-color)] font-medium hover:underline text-sm">
                      {expanded === product.id ? "Hide details" : "View details"}
                    </button>
                    <button className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg text-sm shadow hover:scale-105 transition-transform">
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile Slider */}
        {isMobile && (
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {filteredProducts.map((product) => (
                  <div key={product.id} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <div className="relative h-56">
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                        <span className="absolute top-3 left-3 bg-[var(--primary-color)] text-white text-xs px-3 py-1 rounded-full">{product.category}</span>
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
                        <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                        <button className="bg-[var(--primary-color)] w-full text-white px-4 py-2 rounded-lg text-sm shadow hover:scale-105 transition-transform">
                          Request Quote
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
              ‹
            </button>
            <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
              ›
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {filteredProducts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-3 h-3 rounded-full ${currentSlide === i ? "bg-[var(--primary-color)] scale-110" : "bg-gray-300"}`}
                ></button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
