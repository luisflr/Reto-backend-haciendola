import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UserModel from "../models/User.js";
import { sequelize } from "../database/db.js";

const User = UserModel(sequelize)

/**
 * @openapi
 * components:
 *   schemas:
 *     NotFoundUser:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: User not exists
 *     InvalidCredentials:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Invalid Credentials
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     RegisterResponse:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: usernametest
 *         password:
 *           type: string
 *           example: xvasd12ad12qwe323rfzcvqwprtiqwk
 *
 */
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


/**
 * @openapi
 * components:
 *   schemas:
 *     LoginResponse:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6.eyJ1c2VySWQiOjIsImlhdCI6MTcxNTkwOTMzOCwiZXhwIjoxNzE1.MeAqXQpj9NUUJr6u_rLDJpgsz4LSiPTLePESl
 *
 */
export const login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ where: { username } })
    if (!user) return res.status(404).json({ message: 'User not exists' });

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