"use client";

function Services() {
  try {
    const services = [
      {
        title: "Installation Services",
        description:
          "Professional installation of pipes and motor systems by certified technicians",
        image:
          "https://images.unsplash.com/photo-1581094613018-bac5c0829ecb?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Maintenance & Repair",
        description:
          "Comprehensive maintenance and repair services to keep your systems running",
        image:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Custom Solutions",
        description:
          "Tailored engineering solutions for specific industrial requirements",
        image:
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Technical Consultation",
        description:
          "Expert consultation services for system optimization and upgrades",
        image:
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
      },
    ];

    return (
      <section
        id="services"
        className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100"
        data-name="services"
      >
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-[var(--primary-color)] tracking-tight">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              We provide cutting-edge services to ensure your operations run
              smoothly with expert care and innovation.
            </p>
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden">
            <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="snap-center flex-shrink-0 w-[85%] bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  {/* Image */}
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[var(--primary-color)] bg-opacity-90 flex flex-col items-center justify-center text-center text-white px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm">{service.description}</p>
                  <button className="mt-4 px-5 py-2 bg-white text-[var(--primary-color)] font-semibold rounded-full shadow-md hover:bg-gray-100 transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Services component error:", error);
    return null;
  }
}

export default Services;
