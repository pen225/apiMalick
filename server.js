const express = require('express');
const connectDb = require('./database/database');
const connexionRouter = require('./routes/connexion.route');
const inscriptionRouter = require('./routes/inscription.route');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use('/inscription', inscriptionRouter)
app.use('/connexion', connexionRouter)

connectDb.connect((error) => {
    if(error){
        console.log('Erreur de connexion à la base de données');
    }else{
        console.log('Conecté à la DB avec succeès');
    }
});

// Run server on port 5000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));