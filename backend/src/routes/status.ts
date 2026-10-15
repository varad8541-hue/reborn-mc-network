import { Router } from 'express';

const router = Router();

// Placeholder status – replace with real Minecraft server query or Pterodactyl API
router.get('/', (req, res) => {
  res.json({
    online: true,
    players: {
      online: 0,
      max: 100,
    },
    ip: 'play.rebornmc.net',
    version: '1.21',
  });
});

export default router;
