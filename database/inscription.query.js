const connectDb = require("./database");
const bcrypt = require('bcrypt');

const UserQuery = class {
    static GetAllUser = () => {
        return new Promise((resolve, reject) => {
            connectDb.query('select * from users', (err, result) => {
                if (result) {
                    resolve(result);
                } else
                reject(err);
            });
        })
    }

    static addtNewUser = (data) => {
        return new Promise((resolve, reject) => {
            const {email, password} = data;
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(password, salt);
            const sql = "INSERT INTO users(email, password) VALUES(?,?)";
            connectDb.query(sql,[email, hashPassword], (err, res) => {
                if (res) {
                    resolve(res);
                }else{
                    reject(err);
                }
            });
        });
    }

    static deleteUser = (id) => {
        return new Promise((resolve, reject) => {
            const sql = `DELETE FROM users WHERE user_id = ${id}`;
            connectDb.query(sql, (err, res) => {
                if (res) {
                    resolve(res);
                }else{
                    reject(err);
                }
            });
        });
    }

    static updateUser = (userInfo) => {
        const id = userInfo[0];
        const data = userInfo[1]
        return new Promise((resolve, reject) => {
            const sql = "UPDATE `users` SET `email`= ?,`password`= ? WHERE user_id = ?";
            connectDb.query(sql,[data.email, data.password, id], (err, res) => {
                if (res) {
                    resolve(res);
                }else{
                    reject(err);
                }
            });
        });
    }
}

module.exports = UserQuery;