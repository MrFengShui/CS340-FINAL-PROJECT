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

exports.staffBookInfoAdd = function(condition, connection, callback) {
    var sql = 'INSERT INTO BOOK_INFO_TB (BOOK_ID, BOOK_NAME, BOOK_TYPE, BOOK_AUTHOR_FIRST_NAME, BOOK_AUTHOR_LAST_NAME, BOOK_EDITION, BOOK_PUBLISH_YEAR, BOOK_PUBLISH_MONTH, BOOK_PUBLISH_DATE, BOOK_PUBLISH_PRESS, BOOK_ISBN, BOOK_PRICE, BOOK_QUANTITY) VALUES ';

    for (var i = 0; i < condition.length; i++) {
        sql += '(\''
            + condition[i].bookid + '\', \''
            + condition[i].bookname + '\', \''
            + condition[i].booktype + '\', \''
            + condition[i].bookfname + '\', \''
            + condition[i].booklname + '\', \''
            + condition[i].bookedition + '\', \''
            + condition[i].bookyear + '\', \''
            + condition[i].bookmonth + '\', \''
            + condition[i].bookdate + '\', \''
            + condition[i].bookpress + '\', \''
            + condition[i].bookisbn + '\', \''
            + condition[i].bookprice + '\', \''
            + condition[i].bookquantity
            + '\')'
            + ((i == condition.length - 1) ? '' : ', ');
    }
    console.log(sql);
    connection.query(sql, function(err) {
        if (err) {
            console.log('Error: Fail to fetch result from database.', err);
            callback('error');
        } else {
            callback('success');
        }
    });
}
