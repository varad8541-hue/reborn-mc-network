import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  price?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, image, price, onClick }) => {
  return (
    <div className="bg-darknav rounded-lg shadow-glow overflow-hidden hover:scale-105 transition-transform duration-200">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover" />}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-2">{description}</p>
        {price && <p className="text-lg font-bold text-secondary">{price}</p>}
        {onClick && (
          <button
            onClick={onClick}
            className="mt-3 w-full bg-primary text-white py-2 rounded hover:bg-purple-600 transition"
          >
            Buy
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
