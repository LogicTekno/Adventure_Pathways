import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import rajasthanImg from "../assets/rajasthan.jpg";
import keralaImg from "../assets/kerala.jpg";
import goaImg from "../assets/goa.jpg";
import tamilnaduImg from "../assets/tamilnadu.jpg";
import maharashtraImg from "../assets/maharashtra.jpg";
import karnatakaImg from "../assets/karnataka.jpg";
import uttarpradeshImg from "../assets/uttarpradesh.jpg";
import westbengalImg from "../assets/westbengal.jpg";
import punjabImg from "../assets/punjab.jpg";
import himachalImg from "../assets/himachal.jpg";
import gujaratImg from "../assets/gujarat.jpg";
import odishaImg from "../assets/odisha.jpg";

const states = [
  { name: "Rajasthan", desc: "Land of majestic forts and desert culture.", detail: "Rajasthan is famous for its palaces, forts, desert safaris, and rich cultural heritage. Jaipur, Udaipur, Jaisalmer are must-visit cities.", img: rajasthanImg, emoji: "🏰" },
  { name: "Kerala", desc: "Backwaters, beaches and lush greenery.", detail: "Kerala is known for its serene backwaters, lush hill stations, ayurvedic resorts, and cultural festivals. Alleppey and Munnar are popular spots.", img: keralaImg, emoji: "🌴" },
  { name: "Goa", desc: "Famous beaches and vibrant nightlife.", detail: "Goa offers stunning beaches, Portuguese architecture, vibrant nightlife, and seafood cuisine. Calangute and Palolem are famous beaches.", img: goaImg, emoji: "🏖️" },
  { name: "Tamil Nadu", desc: "Land of temples and classical culture.", detail: "Tamil Nadu is known for ancient temples, classical dance, and rich cuisine. Chennai, Madurai, and Mahabalipuram are popular destinations.", img: tamilnaduImg, emoji: "🛕" },
  { name: "Maharashtra", desc: "Bollywood, forts and hill stations.", detail: "Maharashtra has Mumbai, the heart of Bollywood, historic forts, hill stations like Lonavala, and coastal beauty at Konkan.", img: maharashtraImg, emoji: "🎬" },
  { name: "Karnataka", desc: "Heritage sites, tech hubs, and beaches.", detail: "Karnataka combines heritage sites like Hampi, tech city Bengaluru, and beaches along the Arabian coast like Gokarna.", img: karnatakaImg, emoji: "🏞️" },
  { name: "Uttar Pradesh", desc: "Taj Mahal and spiritual cities.", detail: "Uttar Pradesh is home to the iconic Taj Mahal, Varanasi ghats, Agra Fort, and religious sites across the state.", img: uttarpradeshImg, emoji: "🕌" },
  { name: "West Bengal", desc: "Cultural capital, Darjeeling hills.", detail: "West Bengal offers Kolkata's culture, Darjeeling hills, tea gardens, and the Sundarbans mangroves.", img: westbengalImg, emoji: "🏔️" },
  { name: "Punjab", desc: "Rich culture and Golden Temple.", detail: "Punjab is known for its vibrant culture, Golden Temple in Amritsar, folk dances, and delicious cuisine.", img: punjabImg, emoji: "🌾" },
  { name: "Himachal Pradesh", desc: "Snowy mountains and hill stations.", detail: "Himachal Pradesh is a paradise for hill stations, trekking, and snowy landscapes. Shimla, Manali, and Dharamshala are top spots.", img: himachalImg, emoji: "❄️" },
  { name: "Gujarat", desc: "Gir National Park and heritage sites.", detail: "Gujarat offers Gir National Park, Rann of Kutch, ancient temples, and rich cultural heritage across cities.", img: gujaratImg, emoji: "🦁" },
  { name: "Odisha", desc: "Temples and beaches along the coast.", detail: "Odisha has the Konark Sun Temple, Puri Jagannath Temple, scenic beaches, and rich tribal culture.", img: odishaImg, emoji: "🏝️" },
];

const Explore = () => {
  const [selectedState, setSelectedState] = useState(null);

  const openModal = (state) => setSelectedState(state);
  const closeModal = () => setSelectedState(null);

  return (
    <section
  id="explore"
  style={{
    background: "linear-gradient(135deg, #FFDEE9, #B5FFFC, #FFFB96, #C1FFD7)",
    minHeight: "100vh",
    padding: "50px 0"
  }}
>
    <div className="container py-5">
      <h2 className="text-center mb-4">🌏 Explore Famous Indian States</h2>
      <div className="row g-4">
        {states.map((state, index) => (
          <div key={index} className="col-md-4">
            <div className="card explore-card h-100 text-center p-3">
              <div style={{ fontSize: "2rem" }}>{state.emoji}</div>
              <h5 className="card-title">{state.name}</h5>
              <p className="card-text">{state.desc}</p>
              <button className="btn btn-primary mt-2" onClick={() => openModal(state)}>
                View
              </button>
            </div>
          </div>
        ))}
      </div>
 
      {/* Modal */}
      {selectedState && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" onClick={closeModal}>
          <div className="modal-dialog modal-dialog-centered" role="document" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedState.name}</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body text-center">
                <img src={selectedState.img} alt={selectedState.name} className="img-fluid mb-3" />
                <p>{selectedState.detail}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </section>
  );
};

export default Explore;
