const ConnexionQuery = require("../database/connexion.query");

const ConnexionController = class {
    static getform = (req, res) => {
        res.status(200).json({
            message: 'Connexion form'
        });
    }

    static connectUser = async (req, res) => {
        const verifEmail = await ConnexionQuery.connectUser(req.body);
        if (verifEmail == true) {
            res.status(200).json({
                message: 'Correct user'
            });
        }else
        res.status(400).json({
            error: 'Erreur de connection'
        });
    }
}


module.exports = ConnexionController;