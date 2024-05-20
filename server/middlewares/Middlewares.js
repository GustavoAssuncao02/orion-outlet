const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000 ', // Allows only the specified origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Authorization',
  maxAge: 86400,
};
    
module.exports = cors(corsOptions);
