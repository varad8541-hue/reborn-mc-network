import React from 'react';
import Card from '@/components/Card';

const crates = [
  {
    id: 1,
    name: 'AFK Crate',
    rarity: 'common',
    description: 'Earn rewards while AFK',
    price: '$2',
  },
  {
    id: 2,
    name: 'Arcane Crate',
    rarity: 'legendary',
    description: 'Mystical rewards with arcane power',
    price: '$15',
  },
  {
    id: 3,
    name: 'Matrix Crate',
    rarity: 'epic',
    description: 'Digital nexus of rare treasures',
    price: '$10',
  },
];

const Crates: React.FC = () => (
  <div className="max-w-5xl mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-primary mb-6 text-center">Crates</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {crates.map(crate => (
        <Card
          key={crate.id}
          title={`${crate.name} (${crate.rarity})`}
          description={crate.description}
          price={crate.price}
          onClick={() => alert('Buy crate – not implemented')}
        />
      ))}
    </div>
  </div>
);

export default Crates;
