const allowedOrigins = ['https://test.com'];

export const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) callback(null, true);
    else callback(new Error('CORS policy violation'));
  },
};

export const corsMiddleware = (error, req, res, next) => {
  if (error.message === 'CORS policy violation')
    return res.status(403).json({
      message: 'Forbidden due to CORS policy violation',
    });
  next();
};
