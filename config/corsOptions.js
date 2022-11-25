const allowedOrigns = require('./allowedOrigins');

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigns.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions;