function Footer() {
  try {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <footer className="bg-gray-900 text-white py-16" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">PipeMaster Industries</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Your trusted partner for premium pipes and motors. Delivering quality solutions for over 25 years with excellence and reliability.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                  <div className="icon-facebook text-lg"></div>
                </div>
                <div className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                  <div className="icon-twitter text-lg"></div>
                </div>
                <div className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                  <div className="icon-linkedin text-lg"></div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-gray-300 hover:text-[var(--secondary-color)] transition-colors duration-200">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-[var(--secondary-color)] transition-colors duration-200">
                  About Us
                </button>
                <button onClick={() => scrollToSection('products')} className="block text-gray-300 hover:text-[var(--secondary-color)] transition-colors duration-200">
                  Products
                </button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-[var(--secondary-color)] transition-colors duration-200">
                  Services
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-[var(--secondary-color)] transition-colors duration-200">
                  Contact
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <div className="icon-phone text-sm mr-2"></div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <div className="icon-mail text-sm mr-2"></div>
                  <span>info@pipemaster.com</span>
                </div>
                <div className="flex items-start">
                  <div className="icon-map-pin text-sm mr-2 mt-1"></div>
                  <span>123 Industrial Boulevard<br />New York, NY 10001</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PipeMaster Industries. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}