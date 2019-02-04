const express = require("express");
const jwt = require("jsonwebtoken");

module.exports = {
  generateToken: function(user) {
    const payload = {
      sub: user.id,
      username: user.username
    };
    const secret = process.env.JWT_SECRET;

    const options = {
      expiresIn: "24h"
    };

    return jwt.sign(payload, secret, options);
  },

  protected: function(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
          res.status(401).json({ message: "invalid token" });
        } else {
          req.decodedToken = decodedToken;
          next();
        }
      });
    } else {
      res.status(401).json({ message: "no token provided" });
    }
  }
};
