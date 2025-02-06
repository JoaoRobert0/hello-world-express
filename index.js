// Importando o Express
const express = require('express');

// Criando uma instância do app Express
const app = express();

// Definindo a porta do servidor
const PORT = 3000;

// Rota básica para testar
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
