exports.buyBookInfoAdd = function(condition, connection, callback) {
    var sql = 'INSERT INTO CONSUMER_BOOK_TB (CONSUMER_ID, BOOK_ID) VALUES ';

    for (var i = 0; i < condition.items.length; i++) {
        sql += '(\'' + condition.items[i].personid + '\', \'' + condition.items[i].bookid + '\')' + ((i == condition.items.length - 1) ? '' : ', ');
    }

    connection.query(sql, function(err, rows) {
        if (err) {
            console.log('Error: Fail to fetch result from database.', err);
            callback('error');
        } else {
            callback('success');
        }
    });
}
