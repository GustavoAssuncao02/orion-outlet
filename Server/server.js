import express, { json } from 'express';
import cors from './middlewares/Middlewares.js'; 
import './db.js';
import routes from './router/Router.js';

const app = express();
const port = 4000;

app.use(cors);
app.use(json());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
