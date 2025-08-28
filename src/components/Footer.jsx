import React, { useState } from "react";

function Footer() {
  const socialLinks = {
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  };

  const socialImages = {
    twitter: "/images/x.png",      // Make sure you downloaded locally
    facebook: "/images/facebook.png",
    instagram: "/images/instagram.png",
    linkedin: "/images/linkedin.png",
  };

  const [hovered, setHovered] = useState("");

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  const imgStyle = (name) => ({
    width: "36px",
    height: "36px",
    margin: "0 12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: hovered === name ? "translateY(-6px) scale(1.2)" : "translateY(0) scale(1)",
    boxShadow: hovered === name ? "2px 6px 12px rgba(0,0,0,0.4)" : "none",
    borderRadius: "8px",
  });

  return (
    <section
      style={{
        background: "#004080",  // Single color background
        minHeight: "10vh",
        padding: "5px 0",
        color: "white",
        textAlign: "center"
      }}
    >
      <div className="container">
        <h2 style={{ marginBottom: "30px", fontSize: "2.5rem" }}>🌏 Explore Places</h2>

        {/* Footer */}
        <footer
          style={{
            background: "#004080",  // Same single color
            padding: "5px 1px",
            textAlign: "center",
            marginTop: "5px",
          }}
        >
          <p>© 2025 ✈️ Travel Explorer India. ❤️ All rights reserved.</p>

          <div style={{ marginTop: "10px" }}>
            {Object.keys(socialLinks).map((name) => (
              <img
                key={name}
                src={socialImages[name]}
                alt={name}
                style={imgStyle(name)}
                onMouseEnter={() => setHovered(name)}
                onMouseLeave={() => setHovered("")}
                onClick={() => openLink(socialLinks[name])}
                title={name.charAt(0).toUpperCase() + name.slice(1)}
              />
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
