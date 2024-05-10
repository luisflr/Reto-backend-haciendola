import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UserModel from "../models/User.js";
import { sequelize } from "../database/db.js";

const User = UserModel(sequelize)

export const register = async (req, res) => {
  try {
      const { username, password } = req.body;
      const hasedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        username,
        password: hasedPassword
      });
      
      res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
      console.error('Error registering the user:', error);
      res.status(500).json({ message: 'Server Error' });
    }
}

export const login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ where: { username } })
    if (!user) return res.status(400).json({ message: 'User not exists' });

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) return res.status(400).json({ message: 'Invalid Credentials' });

    const token = jwt.sign({ userId: user.id}, 'AAsdaSDASqwesd1231DASdwasdQWE123asdqaeQWe', {
      expiresIn: '1h'
    });

    res.json({ token });
  } catch (error) {
    console.error('Error login in:', error);
    res.status(500).json({ message: 'Server Error' });
  }
}