const { findUser } = require("../data/model");

// Authentication middleware
async function authenticate(req, res, next) {
  console.log("BACK-END AUTHENTICATING");
  const { username, password } = req.query;
  try {
    const [user] = await findUser(username);
    if (!user || password !== user.password) {
      res.status(401).json({ message: "Incorrect username or password" });
    } else {
      req.body.authUser = user;
      next();
    }
  } catch {
    // If credentials are invalid, send a 401 Unauthorized response
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  authenticate,
};
