import React, { useEffect } from 'react';

function Seo({ 
  canonicalPath, 
  title = 'DigiPort Zadar - Servis Računala i Mobitela', 
  description = 'DigiPort Zadar nudi profesionalni servis računala, laptopa i mobitela. Nudimo brze popravke, nadogradnje, uklanjanje virusa i prodaju IT opreme.' 
}) {
  const baseUrl = 'https://www.digiport.hr';
  const fullUrl = `${baseUrl}${canonicalPath || ''}`;
  
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Helper function to set meta tags
    const setMetaTag = (name, content, property = false) => {
      let element = property 
        ? document.querySelector(`meta[property="${name}"]`)
        : document.querySelector(`meta[name="${name}"]`);
        
      if (!element) {
        element = document.createElement('meta');
        if (property) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    
    // Set description
    setMetaTag('description', description);
    
    // Set Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', fullUrl, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:site_name', 'DigiPort IT Servis Zadar', true);
    
    // Set Twitter tags
    setMetaTag('twitter:card', 'summary');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    
    // Set canonical link
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', fullUrl);
  }, [title, description, fullUrl]);
  
  return null;
}

export default Seo;