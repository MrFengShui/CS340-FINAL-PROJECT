exports.staffBookInfoChange = function(condition, connection, callback) {
    var sql = 'UPDATE BOOK_INFO_TB SET'
            + ' BOOK_INFO_TB.BOOK_ID = \'' + condition.bookid + '\', '
            + ' BOOK_INFO_TB.BOOK_NAME = \'' + condition.bookname + '\', '
            + ' BOOK_INFO_TB.BOOK_TYPE = \'' + condition.booktype + '\', '
            + ' BOOK_INFO_TB.BOOK_AUTHOR_FIRST_NAME = \'' + condition.bookfname + '\', '
            + ' BOOK_INFO_TB.BOOK_AUTHOR_LAST_NAME = \'' + condition.booklname + '\', '
            + ' BOOK_INFO_TB.BOOK_EDITION = \'' + condition.bookedition + '\', '
            + ' BOOK_INFO_TB.BOOK_PUBLISH_YEAR = \'' + condition.bookyear + '\', '
            + ' BOOK_INFO_TB.BOOK_PUBLISH_MONTH = \'' + condition.bookmonth + '\', '
            + ' BOOK_INFO_TB.BOOK_PUBLISH_DATE = \'' + condition.bookdate + '\', '
            + ' BOOK_INFO_TB.BOOK_PUBLISH_PRESS = \'' + condition.bookpress + '\', '
            + ' BOOK_INFO_TB.BOOK_ISBN = \'' + condition.bookisbn + '\', '
            + ' BOOK_INFO_TB.BOOK_PRICE = \'' + condition.bookprice + '\', '
            + ' BOOK_INFO_TB.BOOK_QUANTITY = \'' + condition.bookquantity + '\' WHERE'
            + ' BOOK_INFO_TB.BOOK_ID = \'' + condition.bookid + '\'';
    console.log(sql);
    connection.query(sql, function(err) {
        if (err) {
            console.log('Error: Fail to update result from database.', err);
            callback('error');
        } else {
            callback('success');
        }
    });
}
