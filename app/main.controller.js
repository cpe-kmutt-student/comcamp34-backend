const sql = require('./connect.js');

exports.test = (req, res) => {
    sql.query("SELECT * FROM register_data INNER JOIN file ON register_data.id = file.user_id INNER JOIN question ON register_data.id = question.user_id", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({ message: err });
            return;
        }
        res.send(result);
    });
}