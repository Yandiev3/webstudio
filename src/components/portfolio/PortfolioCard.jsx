// components/portfolio/PortfolioCard.jsx
import React from 'react';

function PortfolioCard({ item }) {
  return (
    <div className="portfolioCard">
      <div className="portfolioImage">
        <img src={item.image} alt={item.title} />
        <div className="portfolioOverlay">
          <button 
            className="viewProjectBtn"
            onClick={() => window.open(item.link, '_blank')}
          >
            Посмотреть проект
          </button>
        </div>
      </div>
      <div className="portfolioContent">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="portfolioTechnologies">
          {item.technologies.map((tech, index) => (
            <span key={index} className="techTag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;