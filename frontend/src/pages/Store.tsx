import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@/components/Card';

interface ShopItem {
  id: number;
  name: string;
  description: string;
  image?: string;
  price_coins?: number;
  price_gems?: number;
}

const Store: React.FC = () => {
  const [items, setItems] = useState<ShopItem[]>([]);

  useEffect(() => {
    // Placeholder: fetch from backend API
    axios.get<ShopItem[]>('/api/shop')
      .then(res => setItems(res.data))
      .catch(() => {
        // Sample data if backend not available
        setItems([
          {
            id: 1,
            name: 'Experience Bottle',
            description: 'Single experience bottle',
            price_coins: 500,
          },
          {
            id: 2,
            name: 'Golden Apple',
            description: 'Healing item with special effects',
            price_gems: 20,
          },
        ]);
      });
  }, []);

  const formatPrice = (item: ShopItem) => {
    if (item.price_gems) return `${item.price_gems} Gems`;
    if (item.price_coins) return `${item.price_coins} Coins`;
    return 'Free';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">Web Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <Card
            key={item.id}
            title={item.name}
            description={item.description}
            image={item.image}
            price={formatPrice(item)}
            onClick={() => alert('Add to cart – not implemented in this scaffold')}
          />
        ))}
      </div>
    </div>
  );
};

export default Store;
