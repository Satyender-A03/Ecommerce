const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: function (origin, cb) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      cb(null, true);
    } else {
      cb(new Error("Not allowed By CORS"));
    }
  },
};
module.exports = corsOptions;
