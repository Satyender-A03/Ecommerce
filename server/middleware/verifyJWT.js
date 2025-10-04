const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  // console.log(authHeader);
  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        console.log(err);
        return res.status(401).json({ error: "Unauthorized" });
      }
      req.userInfo = {};
      req.userInfo.id = decoded.id;
      req.userInfo.userName = decoded.userName;
      next();
    });
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = verifyJWT;
