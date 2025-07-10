import express from 'express';
import prisma from '../prisma';
const router = express.Router();

router.get('/users', async (req, res) => {
  try {
    const allUsers = await prisma.users.findMany();
    res.json(allUsers);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

router.post('/users', async (req, res) => {
  const { email, pass } = req.body;

  try {
    const newUser = await prisma.users.create({
      data: { email, pass },
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

// CREATE TABLE users (
//     email TEXT NOT NULL,
//     pass TEXT NOT NULL
// );

// insert into users(email, pass) values ('tralalelo-tralala@gmail.com', '123')

export default router;
