import { createConnection } from 'mysql2';

const db = createConnection({
  host: 'localhost',
  port: '3307',
  user: 'root',
  password: '',
  database: 'orion_outlet',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
    return;
  }
  console.log('Conectado ao banco de dados como ID', db.threadId);
});

export default db;
