const sql = require('connect.js');

exports.test = (req, res) => {
    sql.query("SELECT * FROM users", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({ message: err });
            return;
        }
        res.send(result);
    });
}