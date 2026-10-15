import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import shopRouter from './routes/shop';
import statusRouter from './routes/status';
import authRouter from './routes/auth';
import orderRouter from './routes/orders';
import ranksRouter from './routes/ranks';
import cratesRouter from './routes/crates';
import leaderboardRouter from './routes/leaderboard';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());

app.get('/', (req, res) => res.send('RebornMC Backend API'));

app.use('/api/shop', shopRouter);
app.use('/api/status', statusRouter);
app.use('/api/auth', authRouter);
app.use('/api/orders', orderRouter);
app.use('/api/ranks', ranksRouter);
app.use('/api/crates', cratesRouter);
app.use('/api/leaderboard', leaderboardRouter);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
