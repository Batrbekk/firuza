import { useEffect, useState } from 'react';
import gsap from 'gsap';
import ArticleCard from './ArticleCard';
import Button from './Button';

type Article = {
  img: string;
  category: string;
  date: string;
  title: string;
}

interface TabsSectionProps {
  articles: Article[];
  articles2: Article[];
  articles3: Article[];
  articles4: Article[];
}

const tabs = [
  { id: 'health', label: 'Все статьи' },
  { id: 'makeup', label: 'Здоровье' },
  { id: 'skincare', label: 'Макияж' },
  { id: 'wellness', label: 'Уход за кожей' },
] as const;

export default function TabsSection({ 
  articles,
  articles2,
  articles3,
  articles4
}: TabsSectionProps) {
  const [activeTab, setActiveTab] = useState('health');
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>([]);

  useEffect(() => {
    setDisplayedArticles(articles);
  }, [articles]);

  const handleTabClick = (tabId: string) => {
    gsap.to('.articles-grid', {
      opacity: 0,
      y: 20,
      duration: 0.1,
      onComplete: () => {
        setActiveTab(tabId);
        
        let newArticles: Article[] = [];
        switch(tabId) {
          case 'health':
            newArticles = articles;
            break;
          case 'makeup':
            newArticles = articles2;
            break;
          case 'skincare':
            newArticles = articles3;
            break;
          case 'wellness':
            newArticles = articles4;
            break;
        }
        
        setDisplayedArticles(newArticles);
        
        gsap.to('.articles-grid', {
          opacity: 1,
          y: 0,
          duration: 0.1
        });
      }
    });
  };

  return (
    <div className="w-full flex flex-col md:gap-y-9">
      {/* Tabs Navigation */}
      <div className="flex flex-col md:flex-row py-12 md:py-0 gap-x-10 gap-y-4 items-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`relative h-8 font-tilda-sans text-base w-fit first-line:transition-colors uppercase md:normal-case
              ${activeTab === tab.id ? 'text-black border-b border-black' : 'text-black/60'}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="articles-grid flex flex-col md:flex-row flex-wrap gap-x-7 gap-y-7 md:gap-y-[60px] md:justify-between lg:justify-start">
        {displayedArticles.map((article, index) => (
          <ArticleCard
            key={index}
            image={article.img}
            category={article.category}
            date={article.date}
            title={article.title}
          />
        ))}
      </div>

      {/* button */}
      <div className="flex justify-center mt-3 lg:mt-6">
        <Button className="w-full lg:max-w-[240px]">
          Смотреть еще
        </Button>
      </div>
    </div>
  );
}
