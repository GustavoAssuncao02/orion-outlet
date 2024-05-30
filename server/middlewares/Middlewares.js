import cors from 'cors';

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Authorization',
  maxAge: 86400,
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
