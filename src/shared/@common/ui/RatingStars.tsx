import React, { useState } from 'react';
import Image from 'next/image';

type RatingStarsProps = {
  totalStars?: number;
  onRatingChange?: (rating: number) => void; 
};

const RatingStars = ({ totalStars = 5, onRatingChange = () => {} }: RatingStarsProps) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleClick = (index: number) => {
    setRating(index);
    onRatingChange(index); 
  };

  const handleMouseEnter = (index: number) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => {
        const starIndex = index + 1;
        const starIcon = starIndex <= (hover || rating) ? '/icons/star-full.svg' : '/icons/star-line.svg';
        
        return (
          <button
            key={index}
            className="flex items-center justify-center"
            onClick={() => handleClick(starIndex)}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
          >
            <Image 
              src={starIcon} 
              alt={`${starIndex} star`} 
              width={24} 
              height={24} 
              className="w-6 h-6"
            />
          </button>
        );
      })}
    </div>
  );
};

export default RatingStars;
