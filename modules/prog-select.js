function defineType(type) {
    switch (type) {
        case 5:
            return 'VIP';
        default:
            return 'Nothing';
    }
}

exports.consumerQuery = function(sql, connection, callback) {
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
