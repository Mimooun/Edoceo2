// src/ExpertiseSection.js
import React from "react";
import "../styles/expertise.css";
import expertise from "../assets/images/expertise.svg"
const ExpertiseSection = () => {
  return (
    <section className="max-width">
    <div className="expertise-section">
      
        <div className="text-content">
          <h1>Optez pour notre expertise</h1>
          <p>
            Et faites le choix d'une carrière prospère dans la recharge électrique.
            Nos formations P1, P2 et P3 vous offrent un ensemble complet de
            compétences et de connaissances pour devenir un installateur de bornes
            de recharge incontournable dans ce secteur en plein essor.
          </p>
          <ul>
            <li>✅ Formations agréées par les organismes certificateurs (Qualit'Enr)</li>
            <li>✅ Formateurs qualifiés pour une qualité optimale des cours.</li>
            <li>✅ 97% Apprentis satisfaits</li>
          </ul>
        </div>
        <div className="image-content">
          <div className="green-overlay">
            <img src={expertise}/>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ExpertiseSection;
