exports.buyBookInfoAdd = function(sql, connection, callback) {
    connection.query(sql, function(err, rows) {
        if (err) {
            console.log('Error: Fail to fetch result from database.', err);
            callback('error');
        } else {
            callback('success');
        }
    });
}
