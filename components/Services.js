function Services() {
  try {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    
    const services = [
      {
        title: "Installation Services",
        description: "Professional installation of pipes and motor systems by certified technicians",
        image: "https://images.unsplash.com/photo-1581094613018-bac5c0829ecb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Maintenance & Repair",
        description: "Comprehensive maintenance and repair services to keep your systems running",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Custom Solutions",
        description: "Tailored engineering solutions for specific industrial requirements",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Technical Consultation",
        description: "Expert consultation services for system optimization and upgrades",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ];

    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
      }, 4000);
      return () => clearInterval(interval);
    }, [services.length]);

    const goToSlide = (index) => {
      setCurrentSlide(index);
    };

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    };

    return (
      <section id="services" className="py-20 bg-white" data-name="services" data-file="components/Services.js">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-[var(--text-dark)] mb-4">
              Our Services
            </h2>
            <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
              Professional services to support your industrial operations with expert installation, maintenance, and consultation
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative h-96 md:h-[500px]">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                        <div className="text-white p-8">
                          <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                          <p className="text-xl">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200"
            >
              <div className="icon-chevron-left text-xl text-[var(--primary-color)]"></div>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200"
            >
              <div className="icon-chevron-right text-xl text-[var(--primary-color)]"></div>
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {services.map((_, index) => (
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
    console.error('Services component error:', error);
    return null;
  }
}