function Products() {
  try {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    
    const products = [
      {
        id: 1,
        title: "Steel Pipes",
        description: "High-grade carbon steel pipes for industrial applications",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "Pipes",
        specifications: ["Various diameters", "Corrosion resistant", "High pressure rated"]
      },
      {
        id: 2,
        title: "PVC Pipes",
        description: "Durable PVC pipes for plumbing and drainage systems",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "Pipes",
        specifications: ["Chemical resistant", "Lightweight", "Easy installation"]
      },
      {
        id: 3,
        title: "AC Motors",
        description: "Efficient three-phase AC motors for industrial machinery",
        image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "Motors",
        specifications: ["Energy efficient", "Low maintenance", "Variable speeds"]
      },
      {
        id: 4,
        title: "DC Motors",
        description: "High-torque DC motors for precise control applications",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "Motors",
        specifications: ["Precise control", "High torque", "Compact design"]
      },
      {
        id: 5,
        title: "Copper Pipes",
        description: "Premium copper pipes for HVAC and plumbing systems",
        image: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "Pipes",
        specifications: ["Antimicrobial", "Heat resistant", "Long lasting"]
      },
      {
        id: 6,
        title: "Servo Motors",
        description: "Precision servo motors for automation and robotics",
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "Motors",
        specifications: ["High precision", "Fast response", "Programmable"]
      }
    ];

    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % products.length);
      }, 3500);
      return () => clearInterval(interval);
    }, [products.length]);

    const goToSlide = (index) => {
      setCurrentSlide(index);
    };

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
      <section id="products" className="py-20 bg-white" data-name="products" data-file="components/Products.js">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-[var(--text-dark)] mb-4">
              Our Products
            </h2>
            <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
              Explore our comprehensive range of high-quality pipes and motors designed for industrial excellence
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {products.map((product, index) => (
                  <div key={product.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mx-auto max-w-sm">
                      <div className="relative h-64">
                        <img 
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <span className="bg-[var(--primary-color)] text-white px-3 py-1 rounded-full text-sm">
                            {product.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">
                          {product.title}
                        </h3>
                        <p className="text-[var(--text-light)] mb-4">
                          {product.description}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-[var(--text-dark)] mb-2">Key Features:</h4>
                          <ul className="text-sm text-[var(--text-light)] space-y-1">
                            {product.specifications.map((spec, i) => (
                              <li key={i} className="flex items-center">
                                <div className="icon-check text-[var(--accent-color)] text-sm mr-2"></div>
                                {spec}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <button className="w-full btn-primary">
                          Request Quote
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200"
            >
              <div className="icon-chevron-left text-xl text-[var(--primary-color)]"></div>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200"
            >
              <div className="icon-chevron-right text-xl text-[var(--primary-color)]"></div>
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index 
                      ? 'bg-[var(--primary-color)] scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Products component error:', error);
    return null;
  }
}
