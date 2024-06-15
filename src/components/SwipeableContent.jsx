import React from 'react';
import { useState } from 'react';
import { FaRegSmile, FaRocket } from 'react-icons/fa';

const SwipeableContent = ({ items, onLike, onDonate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLike = () => {
    onLike(items[currentIndex]);
    nextItem();
  };

  const handleDonate = () => {
    onDonate(items[currentIndex]);
    nextItem();
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="swipeable-content">
      {items.length > 0 && (
        <div className="item">
          <img src={items[currentIndex].image} alt={items[currentIndex].title} />
          <h3>{items[currentIndex].title}</h3>
          <p>{items[currentIndex].description}</p>
          <div className="actions">
            <button onClick={handleLike}>
              <FaRegSmile /> Smile
            </button>
            <button onClick={handleDonate}>
              <FaRocket /> Rocket
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwipeableContent;
