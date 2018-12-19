// 导入mysql连接文件
const connection = require('../config/db_config');

exports.checkEmail = (body, callback) => {
    sql = 'select * from `users` where email = ?';
    connection.query(sql, body.email, (err, data) => {
        if (err) {
            return callback(err);
        }
        return callback(null, data);
    })
}

