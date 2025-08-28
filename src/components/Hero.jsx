import React from "react"; 

export default function Hero() { 
  return ( 
  <header id="home" 
  className="hero d-flex align-items-center"> 
  <div className="hero-overlay" /> 
  <div className="container hero-inner text-white text-center">
     <h1 className="display-3 fw-bold mb-2">🌍 Travel Explorer</h1> 
     <p className="lead mb-3"> Discover India's best places & share your journey ✈️ </p> 
     <a 
     href="#explore" className="btn btn-warning" 
     onClick={(e) => 
      { 
        e.preventDefault(); 
        document.getElementById("explore").scrollIntoView({ 
          behavior: "smooth", 
        }); 
      }} > 
      🌏Start Exploring 
      </a> 
      </div> 
      </header> 
      ); 
    }