const allowedOrigins = ['https://test.com'];

export const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('CORS policy violation'));
    }
  },
};

export const corsMiddleware = (err, req, res, next) => {
  if (err.message === 'CORS policy violation') {
    res.status(403).json({
      error: 'Forbidden due to CORS Apagnan policy QuoicouViolation',
    });
  } else {
    next(err);
  }
};
