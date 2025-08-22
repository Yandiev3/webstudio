// components/portfolio/PortfolioGrid.jsx
import React from 'react';
import PortfolioCard from './PortfolioCard';

function PortfolioGrid({ activeFilter, showAll, onToggleShowAll }) {
  const portfolioItems = [
    {
      id: 1,
      title: "Корпоративный сайт для TechCompany",
      category: "website",
      image: "/assets/portfolio/a.png",
      description: "Современный корпоративный сайт с системой управления контентом",
      link: "https://techcompany.example.com",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Лендинг для стартапа",
      category: "website",
      image: "/assets/portfolio/b.png",
      description: "Продающий лендинг для IT-стартапа с высокой конверсией",
      link: "https://startup.example.com",
      technologies: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      id: 3,
      title: "Интернет-магазины одежды",
      category: "shop",
      image: "/assets/portfolio/c.png",
      description: "Полнофункциональный магазин одежды с системой оплаты",
      link: "https://fashionstore.example.com",
      technologies: ["React", "Stripe", "Firebase"]
    },
    {
      id: 4,
      title: "Веб-приложение для управления задачами",
      category: "app",
      image: "/assets/portfolio/task-manager.jpg",
      description: "Производительное приложение для управления проектами",
      link: "https://taskmanager.example.com",
      technologies: ["Vue.js", "Express", "PostgreSQL"]
    },
    {
      id: 5,
      title: "Лендинг для ресторана",
      category: "website",
      image: "/assets/portfolio/restaurant.jpg",
      description: "Стильный лендинг с системой бронирования столиков",
      link: "https://restaurant.example.com",
      technologies: ["React", "CSS3", "API integration"]
    },
    {
      id: 6,
      title: "Интернет-магазин электроники",
      category: "shop",
      image: "/assets/portfolio/electronics-store.jpg",
      description: "Магазин электроники с фильтрами и сравнением товаров",
      link: "https://electronics.example.com",
      technologies: ["Next.js", "GraphQL", "Strapi"]
    },
    {
      id: 7,
      title: "Веб-приложение для управления задачами",
      category: "app",
      image: "/assets/portfolio/task-manager.jpg",
      description: "Производительное приложение для управления проектами",
      link: "https://taskmanager.example.com",
      technologies: ["Vue.js", "Express", "PostgreSQL"]
    },
    {
      id: 8,
      title: "Веб-приложение",
      category: "app",
      image: "/assets/portfolio/task-manager.jpg",
      description: "Производительное приложение для управления проектами",
      link: "https://taskmanager.example.com",
      technologies: ["Vue.js", "Express", "PostgreSQL"]
    },
  ];

  const filteredPortfolio = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const displayedItems = showAll ? filteredPortfolio : filteredPortfolio.slice(0, 2);

  return (
    <>
      <div className="portfolioContainer">
        {displayedItems.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>

      {filteredPortfolio.length > 2 && (
        <div className="portfolioShowMore">
          <button className="showAllBtn" onClick={onToggleShowAll}>
            {showAll ? 'Скрыть' : 'Показать все'} 
          </button>
        </div>
      )}
    </>
  );
}

export default PortfolioGrid;