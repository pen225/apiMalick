const connectDb = require("../database/database");
const UserQuery = require("../database/inscription.query");

const IndexCotroller = class{
    // Get index
    static getAllUser = (req, res) =>{
        UserQuery.GetAllUser().then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(400).json(err)
        });
    }

    static addUser = (req, res) => {
        const dataUser = req.body;
        UserQuery.addtNewUser(dataUser).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err.message);
        });
    }

    static deleteUser = (req, res) => {
        const id = req.params.id;
        UserQuery.deleteUser(id).then((result) => {
            console.log('Utilisateur supprimer avec succes', result);
        }).catch((err) => {
            console.log(err);
        });
    }

    static updateUser = (req, res) => {
        const userInfo = [req.params.id, req.body];
        UserQuery.updateUser(userInfo).then((result) => {
            console.log('Utilisateur modifier avec succes', result);
        }).catch((err) => {
            console.log('Erreur de modification', err);
        });
    }
}

module.exports = IndexCotroller; 