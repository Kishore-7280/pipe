// Search functionality for products
function searchProducts(searchTerm) {
  try {
    const products = [
      {
        id: 1,
        title: "Steel Pipes",
        description: "High-grade carbon steel pipes for industrial applications",
        keywords: ["steel", "pipes", "industrial", "carbon", "metal"]
      },
      {
        id: 2,
        title: "PVC Pipes",
        description: "Durable PVC pipes for plumbing and drainage systems",
        keywords: ["pvc", "pipes", "plumbing", "drainage", "plastic"]
      },
      {
        id: 3,
        title: "AC Motors",
        description: "Efficient three-phase AC motors for industrial machinery",
        keywords: ["ac", "motors", "three-phase", "industrial", "machinery", "electric"]
      },
      {
        id: 4,
        title: "DC Motors",
        description: "High-torque DC motors for precise control applications",
        keywords: ["dc", "motors", "torque", "control", "precision", "electric"]
      },
      {
        id: 5,
        title: "Copper Pipes",
        description: "Premium copper pipes for HVAC and plumbing systems",
        keywords: ["copper", "pipes", "hvac", "plumbing", "premium", "metal"]
      },
      {
        id: 6,
        title: "Servo Motors",
        description: "Precision servo motors for automation and robotics",
        keywords: ["servo", "motors", "precision", "automation", "robotics", "electric"]
      }
    ];

    const term = searchTerm.toLowerCase();
    
    return products.filter(product => {
      return product.title.toLowerCase().includes(term) ||
             product.description.toLowerCase().includes(term) ||
             product.keywords.some(keyword => keyword.includes(term));
    });

  } catch (error) {
    console.error('Search error:', error);
    return [];
  }
}

// Highlight search terms in results
function highlightSearchTerm(text, searchTerm) {
  try {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  } catch (error) {
    console.error('Highlight error:', error);
    return text;
  }
}