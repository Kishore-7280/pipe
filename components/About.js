function About() {
  try {
    return (
      <section id="about" className="py-20 bg-[var(--bg-light)]" data-name="about" data-file="components/About.js">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Industrial pipes and equipment"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            
            <div className="slide-in-right">
              <h2 className="text-4xl font-bold text-[var(--text-dark)] mb-6">
                About PipeMaster Industries
              </h2>
              <p className="text-lg text-[var(--text-light)] mb-6">
                With over 25 years of experience, PipeMaster Industries has been the leading supplier of high-quality pipes and motors for industrial and commercial applications across the globe.
              </p>
              <p className="text-lg text-[var(--text-light)] mb-8">
                We specialize in providing durable, efficient, and cost-effective solutions that meet the highest industry standards. Our commitment to excellence and customer satisfaction has made us the preferred choice for thousands of businesses worldwide.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">25+</div>
                  <div className="text-sm text-[var(--text-light)]">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">5000+</div>
                  <div className="text-sm text-[var(--text-light)]">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}