import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pg from "pg";

import { sequelize } from "../db.js";
import UserModel from "../models/User.js";

const app = express()
const user = UserModel(sequelize)

sequelize
  .sync()
  .then(() => {
    console.log('Database synced');
    app.listen(3000, () => console.log('Server is running on port 3000'));
  })
  .catch(err => console.error('Error syncing database:', err));

app.use(express.json())

// User registration
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hasedPassword = await bcrypt.hash(password, 10);
    const _user = await user.create({
      username,
      password: hasedPassword
    });
    res.status(201).json({ message: 'User registered successfully', _user });
  } catch (error) {
    console.error('Error registering the user:', error);
    res.status(500).json({ message: 'Server Error' });
  }
})

// User Login
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body
    const _user = await user.findOne({ where: { username } })
    if (!_user) return res.status(400).json({ message: 'User not exists' });

    console.log(' - password:', _user)
    const isPasswordMatch = await bcrypt.compare(password, _user.password);
    if (!isPasswordMatch) return res.status(400).json({ message: 'Invalid Credentials' });

    const token = jwt.sign({ userId: _user.id}, 'AAsdaSDASqwesd1231DASdwasdQWE123asdqaeQWe', {
      expiresIn: '1h'
    });

    res.json({ token });
  } catch (error) {
    console.error('Error login in:', error);
    res.status(500).json({ message: 'Server Error' });
  }
})