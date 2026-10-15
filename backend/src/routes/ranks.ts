import { Router } from 'express';

const router = Router();

// Sample rank data – replace with DB queries later
const ranks = [
  { id: 1, name: 'VIP', price: 5, description: 'Exclusive kits and chat prefix' },
  { id: 2, name: 'MVP', price: 10, description: 'All VIP perks + extra homes' },
  { id: 3, name: 'LEGEND', price: 20, description: 'Custom cape and ultimate status' },
];

router.get('/', (req, res) => {
  res.json(ranks);
});

export default router;
