// Example: Remove elements with specific classes or IDs
const adSelectors = [
    '.ad-banner',
    '.ad-container',
    '#advertisement',
    // Add more selectors as needed
  ];
  
  adSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
      element.style.display = 'none';
    });
  });
  