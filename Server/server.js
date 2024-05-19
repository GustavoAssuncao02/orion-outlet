const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'orion_outlet'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
    return;
  }
  console.log('Conectado ao banco de dados como ID', db.threadId);
});




