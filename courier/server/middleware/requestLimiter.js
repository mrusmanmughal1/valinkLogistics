import { rateLimit } from "express-rate-limit";

export const requestLimiter = rateLimit({
  windowMs: 60 * 1000, //1 Minute
  max: 2,
  message: {
    message: "Too many request from this IP, please try again after some time.",
  },
  handler: (req, res, next, options) => {
    res.status(options.statusCode).send(options.message);
  },
  standardHeaders: true,
  legacyHeaders: false,
});
