import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" })
  }
  try {
    const decodedToken = jwt.verify(
      token.split(' ')[1],
      'AAsdaSDASqwesd1231DASdwasdQWE123asdqaeQWe'
    );
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error(' Error verifying token:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
}