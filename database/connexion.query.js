const connectDb = require("./database");
const bcrypt = require('bcrypt');

const ConnexionQuery = class {
    static connectUser = (data) => {
        const {email, password} = data;
        return new Promise((resolve, reject) => {
            // Vérification de mail
            connectDb.query(`SELECT * FROM users WHERE email = ?`, [email], (err, res) => {
                if (res) {
                    // Vérif password
                    bcrypt.compare(password, res[0].password).then((result) => {
                        resolve(result)
                    }).catch((error) => {
                        reject(error)
                    });
                }else{
                    res.status(400).js
                }
            });
        });
    }
}


module.exports = ConnexionQuery;