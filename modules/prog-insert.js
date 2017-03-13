/**
 * Function: buyBookInfoAdd
 * Parameter: condition, connection, and callback
 * Description: To add one or more purchasing information based on typed conditions
 */
exports.buyBookInfoAdd = function(condition, connection, callback) {
    var sql = 'INSERT INTO CONSUMER_BOOK_TB (CONSUMER_ID, BOOK_ID, DATE_OF_BUY) VALUES ';
    /*Format multiple contents for sql.*/
    for (var i = 0; i < condition.items.length; i++) {
        sql += '(\'' + condition.items[i].personid + '\', \'' + condition.items[i].bookid + '\', \'' + condition.items[i].buydate + '\')' + ((i == condition.items.length - 1) ? '' : ', ');
    }
    /*Execute insert sql.*/
    connection.query(sql, function(err, rows) {
        if (err) {
            console.log('Error: Fail to insert result to database.', err);
            callback('error');
        } else {
            callback('success');
        }
    });
}
/**
 * Function: staffBookInfoAdd
 * Parameter: condition, connection, and callback
 * Description: To add one or more books information based on typed conditions
 */
exports.staffBookInfoAdd = function(condition, connection, callback) {
    var sql = 'INSERT INTO BOOK_INFO_TB (BOOK_ID, BOOK_NAME, BOOK_TYPE, BOOK_AUTHOR_FIRST_NAME, BOOK_AUTHOR_LAST_NAME, BOOK_EDITION, BOOK_PUBLISH_YEAR, BOOK_PUBLISH_MONTH, BOOK_PUBLISH_DATE, BOOK_PUBLISH_PRESS, BOOK_ISBN, BOOK_PRICE, BOOK_QUANTITY) VALUES ';
    /*Format multiple contents for sql.*/
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
    /*Execute insert sql.*/
    connection.query(sql, function(err) {
        if (err) {
            console.log('Error: Fail to insert result to database.', err);
            callback('error');
        } else {
            callback('success');
        }
    });
}
/**
 * Function: staffStoreInfoAdd
 * Parameter: condition, connection, and callback
 * Description: To add one or more storage information based on typed conditions
 */
exports.staffStoreInfoAdd = function(condition, connection, callback) {
    var primarySQL = 'INSERT INTO REPOSITORY_INFO_TB (REPOSITORY_ID, REPOSITORY_ADDRESS_STREET, REPOSITORY_ADDRESS_NUMBER, REPOSITORY_PURPOSE, REPOSITORY_GUARD_ID, REPOSITORY_VENDOR_ID) VALUES ';
    var foreignSQL = 'INSERT INTO BOOK_REPOSITORY_TB (BOOK_ID, REPOSITORY_ID) VALUES ';
    /*Format multiple contents for sql.*/
    for (var i = 0; i < condition.length; i++) {
        primarySQL += '(\''
            + condition[i].repoid + '\', \''
            + condition[i].repostreet + '\', \''
            + condition[i].reponumber + '\', \''
            + condition[i].repopurpose + '\', \''
            + condition[i].repoguard + '\', \''
            + condition[i].vendid
            + '\')'
            + ((i == condition.length - 1) ? '' : ', ');

        foreignSQL += '(\''
            + condition[i].bookid + '\', \''
            + condition[i].repoid
            + '\')'
            + ((i == condition.length - 1) ? '' : ', ');
    }
    /*Execute insert sql.*/
    connection.query(primarySQL, function(outerError) {
        if (outerError) {
            console.log('Error: Fail to insert result to database.', outerError);
            callback('error');
        } else {
            connection.query(foreignSQL, function(innerError) {
                if (innerError) {
                    console.log('Error: Fail to insert result to database.', innerError);
                    callback('error');
                } else {
                    callback('success');
                }
            });
        }
    });
}
/**
 * Function: staffVendInfoAdd
 * Parameter: condition, connection, and callback
 * Description: To add one or more vendors information based on typed conditions
 */
exports.staffVendInfoAdd = function(condition, connection, callback) {
    var sql = 'INSERT INTO VENDOR_INFO_TB (VENDOR_ID, VENDOR_NAME, VENDOR_ADDRESS_CITY, VENDOR_ADDRESS_STATE, VENDOR_ADDRESS_COUNTRY, VENDOR_PHONE, VENDOR_EMAIL, VENDOR_REPOSITORY_ID) VALUES ';
    /*Format multiple contents for sql.*/
    for (var i = 0; i < condition.length; i++) {
        sql += '(\''
            + condition[i].vendid + '\', \''
            + condition[i].vendname + '\', \''
            + condition[i].vendcity + '\', \''
            + condition[i].vendstate + '\', \''
            + condition[i].vendcountry + '\', \''
            + condition[i].vendphone + '\', \''
            + condition[i].vendemail + '\', \''
            + condition[i].repoid
            + '\')'
            + ((i == condition.length - 1) ? '' : ', ');
    }
    /*Execute insert sql.*/
    connection.query(sql, function(err) {
        if (err) {
            console.log('Error: Fail to insert result to database.', err);
            callback('error');
        } else {
            callback('success');
        }
    });
}
