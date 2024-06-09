const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");

exports.authMiddleware = async (req, res, next) => {
  // Get token from request header
  const token = req.header("Authorization")?.replace("Bearer ", "");

  // If no token is provided, return a 401 response
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Retrieve user information based on the decoded token
    const user = await User.findById(decoded.id).select("-password");

    // If user is not found, return a 401 response
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Attach the user object to the request for use in subsequent middleware or route handlers
    req.user = user;

    // Call the next middleware or route handler
    next();
  } catch (error) {
    // If token is not valid, return a 401 response
    res.status(401).json({ message: "Token is not valid" });
  }
};
