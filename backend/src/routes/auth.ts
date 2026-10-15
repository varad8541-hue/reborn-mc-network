import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = Router();

// In a real app, users would be stored in the DB. Here we use a single hard‑coded admin for the demo.
const adminUser = {
  id: 1,
  username: process.env.ADMIN_USERNAME || 'admin',
  // password hash for 'password' – replace with a secure hash in production
  passwordHash: '$2b$10$CwTycUXWue0Thq9StjUM0uJ8ZpV2K8G6U0sK4bJ3f8j3d5JZ5W5eW',
};

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (username !== adminUser.username) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const match = await bcrypt.compare(password, adminUser.passwordHash);
  if (!match) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ sub: adminUser.id, role: 'admin' }, process.env.ADMIN_SESSION_SECRET || 'secret', { expiresIn: '8h' });
  res.json({ token });
});

export default router;
