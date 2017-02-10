function defineType(type) {
    switch (type) {
        case 1:
            return 'Iron'
        case 2:
            return 'Bronze';
        case 3:
            return 'Silver'
        case 4:
            return 'Gold'
        case 5:
            return 'Platinum';
        default:
            return 'None';
    }
}

exports.loginQuery = function(sql, connection, callback) {
    connection.query(sql, function(err, rows) {
        if (err) {
            console.log('Error: Fail to fetch result from database.', err);
            callback('error');
        } else {
            info = {'id':null, 'name':null, 'type':null};
            info['id'] = rows[0].CONSUMER_ID;
            info['name'] = rows[0].CONSUMER_FIRST_NAME + ' ' + rows[0].CONSUMER_LAST_NAME;
            info['type'] = defineType(rows[0].COMSUMER_TYPE);
            callback(info);
        }
    });
}

exports.consumerBookInfoQuery = function(sql, connection, callback) {
    connection.query(sql, function(err, rows) {
        if (err) {
            console.log('Error: Fail to fetch result from database.', err);
            callback('error');
        } else {
            callback(rows);
        }
    });
}

exports.consumerStoreInfoQuery = function(sql, connection, callback) {
    connection.query(sql, function(err, rows) {
        if (err) {
            console.log('Error: Fail to fetch result from database.', err);
            callback('error');
        } else {
            callback(rows);
        }
    });
}

exports.consumerBuyBookQuery = function(sql, connection, callback) {
    connection.query(sql, function(err, rows) {
        if (err) {
            console.log('Error: Fail to fetch result from database.', err);
            callback('error');
        } else {
            callback(rows[0]);
        }
    });
}
