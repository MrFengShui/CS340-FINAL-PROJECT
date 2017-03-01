/**
 * Function: staffBookInfoChange
 * Parameter: condition, connection, and callback
 * Description: To change a book information based on typed conditions
 */
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
    
    connection.query(sql, function(err) {
        if (err) {
            console.log('Error: Fail to update result to database.', err);
            callback('error');
        } else {
            callback('success');
        }
    });
}
/**
 * Function: staffStoreInfoChange
 * Parameter: condition, connection, and callback
 * Description: To change a storage information based on typed conditions
 */
exports.staffStoreInfoChange = function(condition, connection, callback) {
    var primarySQL = 'UPDATE REPOSITORY_INFO_TB SET'
            + ' REPOSITORY_INFO_TB.REPOSITORY_ID = \'' + condition.repoid + '\', '
            + ' REPOSITORY_INFO_TB.REPOSITORY_ADDRESS_STREET = \'' + condition.repostreet + '\', '
            + ' REPOSITORY_INFO_TB.REPOSITORY_ADDRESS_NUMBER = \'' + condition.reponumber + '\', '
            + ' REPOSITORY_INFO_TB.REPOSITORY_PURPOSE = \'' + condition.repopurpose + '\', '
            + ' REPOSITORY_INFO_TB.REPOSITORY_GUARD_ID = \'' + condition.repoguard + '\', '
            + ' REPOSITORY_INFO_TB.REPOSITORY_VENDOR_ID = \'' + condition.vendid + '\' WHERE'
            + ' REPOSITORY_INFO_TB.REPOSITORY_ID = \'' + condition.repoid + '\'';
    var foreignSQL = 'UPDATE BOOK_REPOSITORY_TB SET'
            + ' BOOK_REPOSITORY_TB.BOOK_ID = \'' + condition.bookid + '\', '
            + ' BOOK_REPOSITORY_TB.REPOSITORY_ID = \'' + condition.repoid + '\' WHERE'
            + ' BOOK_REPOSITORY_TB.REPOSITORY_ID = \'' + condition.repoid + '\'';

    connection.query(primarySQL, function(outerError) {
        if (outerError) {
            console.log('Error: Fail to update result to database.', outerError);
            callback('error');
        } else {
            connection.query(foreignSQL, function(innerError) {
                if (innerError) {
                    console.log('Error: Fail to update result to database.', innerError);
                    callback('error');
                } else {
                    callback('success');
                }
            });
        }
    });
}
