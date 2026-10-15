import { Router } from 'express';

const router = Router();

// Sample crate data – replace with DB queries later
const crates = [
  { id: 1, name: 'AFK Crate', rarity: 'common', description: 'Earn rewards while AFK' },
  { id: 2, name: 'Arcane Crate', rarity: 'legendary', description: 'Mystical rewards with arcane power' },
  { id: 3, name: 'Matrix Crate', rarity: 'epic', description: 'Digital nexus of rare treasures' },
];

router.get('/', (req, res) => {
  res.json(crates);
});

export default router;
