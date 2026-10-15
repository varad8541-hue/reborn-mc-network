import React from 'react';
import Card from '@/components/Card';

const ranks = [
  {
    id: 1,
    name: 'VIP',
    price: '5',
    description: 'Access to exclusive kits and chat prefix.',
    color: 'bg-purple-600',
  },
  {
    id: 2,
    name: 'MVP',
    price: '10',
    description: 'All VIP perks + extra homes.',
    color: 'bg-purple-700',
  },
  {
    id: 3,
    name: 'LEGEND',
    price: '20',
    description: 'Ultimate status, custom cape, and more.',
    color: 'bg-purple-800',
  },
];

const Ranks: React.FC = () => (
  <div className="max-w-5xl mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-primary mb-6 text-center">Ranks</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {ranks.map(rank => (
        <Card
          key={rank.id}
          title={rank.name}
          description={rank.description}
          price={`$${rank.price}`}
          onClick={() => alert('Buy rank – not implemented')}
        />
      ))}
    </div>
  </div>
);

export default Ranks;
