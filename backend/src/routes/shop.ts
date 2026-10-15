import { Router } from 'express';

const router = Router();

// Sample data – replace with DB queries later
const crates = [
  {
    id: 1,
    name: 'AFK Crate',
    rarity: 'common',
    description: 'Earn rewards while AFK',
    rewards: ['Experience Bottles', 'Common Items', 'Small Currency'],
  },
  {
    id: 2,
    name: 'Arcane Crate',
    rarity: 'legendary',
    description: 'Mystical rewards with arcane power',
    rewards: ['Enchanted Tools', 'Rare Artifacts', 'Magic Crystals'],
  },
  // ... add more crates as needed
];

const kits = [
  {
    id: 1,
    name: 'Starter Kit',
    tier: 'beginner',
    description: 'Perfect for new players',
    items: ['Wooden Pickaxe', 'Wooden Axe', 'Stone Sword', 'Bread x32', 'Torches x64'],
    reusable: false,
  },
  {
    id: 2,
    name: 'Premium Kit',
    tier: 'premium',
    description: 'Enhanced starter package',
    items: ['Iron Pickaxe', 'Iron Axe', 'Iron Sword', 'Cooked Beef x64', 'Torches x128', 'Crafting Table', 'Furnace'],
    reusable: false,
  },
  // ... add more kits
];

const shopItems = [
  {
    id: 1,
    name: 'Experience Bottle',
    category: 'consumable',
    description: 'Single experience bottle',
    rarity: 'common',
    price_coins: 500,
  },
  {
    id: 2,
    name: 'Golden Apple',
    category: 'consumable',
    description: 'Healing item with special effects',
    rarity: 'rare',
    price_gems: 20,
  },
  // ... add more shop items
];

router.get('/', (req, res) => {
  res.json({ crates, kits, shopItems });
});

export default router;
