function Hero() {
  try {
    return (
      <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-r from-gray-900 to-gray-700" data-name="hero" data-file="components/Hero.js">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 fade-in text-shadow">
              Premium Pipes & Motors
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 fade-in text-shadow" style={{animationDelay: '0.3s'}}>
              Your trusted partner for industrial-grade piping solutions and high-performance motor systems
            </p>
            <div className="fade-in" style={{animationDelay: '0.6s'}}>
              <button 
                onClick={() => document.getElementById('products').scrollIntoView({behavior: 'smooth'})}
                className="btn-primary mr-4 mb-4"
              >
                View Products
              </button>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}
                className="btn-secondary mb-4"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}