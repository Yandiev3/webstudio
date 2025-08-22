import './Header.scss';
import React, { useState } from 'react'

export default function Header({ onOpenCalculator }) {
  const scrollToSection = (sectionId, yOffset = -50) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <>
        <header>
            <div className="mainHeader">
            <span className="name">
                <a href="#sectionFirst"><h2>MotorPixel</h2></a>
            </span>
            <nav className="navMenu">
                <ul>
                    <li><a href="#services" onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('.section__services', -5);
                    }}>Услуги</a></li>
                    <li><a href="#portfolio" onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('.section__portfolio');
                    }}>Портфолио</a></li>
                    <li><a href="#reviews" onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('.section__reviews');
                    }}>Отзывы</a></li>
                    <li><a href="#contact" onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('footer');
                    }}>Контакты</a></li>
                </ul>
            </nav>
            <div className="btn_header">    
                <div>
                    <button className="feedCost" onClick={onOpenCalculator}>
                      Рассчитать стоимость
                    </button>
                </div>
            </div>
            </div>
        </header>    
    </>
  )
}