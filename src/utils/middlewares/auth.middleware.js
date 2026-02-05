const { verifyToken } = require("../auth/jwt");

const authenticate = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ error: "Token requerido" });

  const token = authHeader.split(" ")[1];

  const decoded = verifyToken(token);

  if (!decoded)
    return res.status(401).json({ error: "Token inválido o expirado" });

  req.user = decoded; // 🔥 guardamos usuario en request
  next();
};

module.exports = authenticate;