const express = require('express');
const app = express();

const produtosRoutes = require('./routes/produtoRoutes');

app.use(express.json());

app.use('/api/produtos', produtosRoutes);

app.post('/api/login', (req,res) => {
    const {email, password} = req.body;

    if (email && password){
        res.json({msg: "Login recebido com sucesso"});
    }else{
        res.status(400).json({msg: "faltam dados"});
    }
});

app.listen(3000, () => console.log('Servidor a correr na porta 3000'));