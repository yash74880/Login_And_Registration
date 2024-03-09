import User from "../model/authModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// Function to verify token and check user
export const checkUser = async (req, res, next) => {
  try {
    // Extract token from cookies (or other preferred method)
    const token = req.cookies.jwt; // If using cookies

    // Ensure token exists and is valid
    if (!token) {
      throw new Error("Unauthorized: Token not provided");
    }

    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET); // Use environment variable for security

    // Find user by ID from decoded token
    const user = await User.findById(decodedToken.id);

    // Handle missing or invalid user
    if (!user) {
      throw new Error("Unauthorized: Invalid user associated with token");
    }

    // Return successful response with user email
    res.json({ status: true, user: user.email });
  } catch (err) {
    // Handle errors gracefully
    console.error(err.message);
    res.status(401).json({ status: false, error: err.message });
  } finally {
    // Call next() to continue middleware chain
    next();
  }
};
