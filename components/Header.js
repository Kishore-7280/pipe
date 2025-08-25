function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const [showResults, setShowResults] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };

    const handleSearch = (term) => {
      setSearchTerm(term);
      if (term.length > 2) {
        const results = searchProducts(term);
        setSearchResults(results);
        setShowResults(true);
      } else {
        setShowResults(false);
      }
    };

    const handleResultClick = (productId) => {
      scrollToSection('products');
      setShowResults(false);
      setSearchTerm('');
    };

    return (
      <header className="fixed top-0 w-full bg-[var(--primary-color)] z-50 shadow-lg" data-name="header" data-file="components/Header.js">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                <div className="icon-zap text-xl text-[var(--primary-color)]"></div>
              </div>
              <div className="text-white text-xl font-bold">PipeMaster</div>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('products')} className="nav-link">Products</button>
              <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            </div>

            {/* Search Bar - Right */}
            <div className="hidden md:flex relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-64 px-4 py-2 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="icon-search text-gray-400"></div>
              </div>
              
              {/* Search Results */}
              {showResults && searchResults.length > 0 && (
                <div className="absolute top-full right-0 w-80 bg-white rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto">
                  {searchResults.map((product, index) => (
                    <div 
                      key={index}
                      onClick={() => handleResultClick(product.id)}
                      className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                    >
                      <div className="font-medium text-gray-900">{product.title}</div>
                      <div className="text-sm text-gray-600">{product.description}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              <div className="icon-menu text-2xl"></div>
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {/* Mobile Search */}
              <div className="mb-4 relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border-0 focus:outline-none"
                />
                {showResults && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white rounded-lg shadow-lg mt-1 max-h-40 overflow-y-auto">
                    {searchResults.map((product, index) => (
                      <div 
                        key={index}
                        onClick={() => handleResultClick(product.id)}
                        className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                      >
                        <div className="font-medium text-gray-900 text-sm">{product.title}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('home')} className="nav-link text-left py-2">Home</button>
                <button onClick={() => scrollToSection('about')} className="nav-link text-left py-2">About</button>
                <button onClick={() => scrollToSection('products')} className="nav-link text-left py-2">Products</button>
                <button onClick={() => scrollToSection('services')} className="nav-link text-left py-2">Services</button>
                <button onClick={() => scrollToSection('contact')} className="nav-link text-left py-2">Contact</button>
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}
