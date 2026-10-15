import { Router } from 'express';

const router = Router();

// Sample leaderboard data – replace with DB queries later
const leaderboard = [
  { uuid: '1', name: 'Alice', playtime: 1200, coins: 5000, rank: 'VIP' },
  { uuid: '2', name: 'Bob', playtime: 950, coins: 3000, rank: 'MVP' },
  { uuid: '3', name: 'Charlie', playtime: 800, coins: 2500, rank: 'LEGEND' },
];

router.get('/', (req, res) => {
  res.json(leaderboard);
});

export default router;
