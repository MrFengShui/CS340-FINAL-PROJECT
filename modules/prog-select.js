/**
 * Function: loginQuery
 * Parameter: condition, connection, and callback
 * Description: To search consumer basic information based on its usernam and password
 */
exports.loginQuery = function(condition, connection, callback) {
    var sql = 'SELECT CONSUMER_INFO_TB.CONSUMER_ID, CONSUMER_INFO_TB.CONSUMER_FIRST_NAME, CONSUMER_INFO_TB.CONSUMER_LAST_NAME, CONSUMER_INFO_TB.CONSUMER_TYPE FROM CONSUMER_INFO_TB WHERE'
            + ' CONSUMER_USERNAME=\'' + condition['username'] + '\' AND'
            + ' CONSUMER_PASSWORD=\'' + condition['password'] + '\'';
    /*Execute select sql.*/
    connection.query(sql, function(err, rows) {
        if (err) {
            console.log('Error: Fail to fetch result from database.', err);
            callback('error');
        } else {
            callback(rows[0]);
        }
    });
}
/**
 * Function: consumerBookInfoQuery
 * Parameter: condition, connection, and callback
 * Description: To search book basic information based on typed conditions
 */
exports.consumerBookInfoQuery = function(condition, connection, callback) {
    var booktype = function() {
        return (condition['booktype'] == '0') ? '' : condition['booktype'];
    }
    var bookauthor = function() {
        var author = [];

        if (condition['bookauthor'] == '') {
            author[0] = '';
            author[1] = '';
        } else {
            author = condition['bookauthor'].split(' ')
        }

        return author;
    };
    var bookdate = function() {
        var date = [{year:'', month:'', date:''}, {year:'', month:'', date:''}];

        if (condition.bookdate[0] == '' && condition.bookdate[1] == '') {
            return 'BOOK_PUBLISH_YEAR LIKE \'\%\%\' AND BOOK_PUBLISH_MONTH LIKE \'\%\%\' AND BOOK_PUBLISH_DATE LIKE \'\%\%\' AND ';
        } else if (condition.bookdate[0] != '' && condition.bookdate[1] == '') {
            var temp = condition.bookdate[0].split('-');
            date[0].year = temp[0];
            date[0].month = temp[1];
            date[0].date = temp[2];
            return 'BOOK_PUBLISH_YEAR * 10000 + BOOK_PUBLISH_MONTH * 100 + BOOK_PUBLISH_DATE >= ' + date[0].year + date[0].month + date[0].date + ' AND ';
        } else if (condition.bookdate[0] == '' && condition.bookdate[1] != '') {
            var temp = condition.bookdate[1].split('-');
            date[1].year = temp[0];
            date[1].month = temp[1];
            date[1].date = temp[2];
            return 'BOOK_PUBLISH_YEAR * 10000 + BOOK_PUBLISH_MONTH * 100 + BOOK_PUBLISH_DATE <= ' + date[1].year + date[1].month + date[1].date + ' AND ';
        } else {
            if (condition.bookdate[0] != '') {
                var temp = condition.bookdate[0].split('-');
                date[0].year = temp[0];
                date[0].month = temp[1];
                date[0].date = temp[2];
            }

            if (condition.bookdate[1] != '') {
                var temp = condition.bookdate[1].split('-');
                date[1].year = temp[0];
                date[1].month = temp[1];
                date[1].date = temp[2];
            }

            return 'BOOK_PUBLISH_YEAR * 10000 + BOOK_PUBLISH_MONTH * 100 + BOOK_PUBLISH_DATE BETWEEN ' + date[0].year + date[0].month + date[0].date + ' AND ' + date[1].year + date[1].month + date[1].date + ' AND ';
        }
    };
    var bookpress = function() {
        press = {'anypress':'', 'apress':'Apress', 'pearson':'Pearson', 'oreilly':'O\'Reilly Media', 'addison':'Addison-Wesley Professional', 'nostarch':'No Starch Press', 'scholastic':'Scholastic', 'createspace':'CreateSpace Independent Publishing Platform', 'scribner':'Scribner', 'dover':'Dover Publications', 'cambridge':'Cambridge University Press', 'britannica':'Encyclopaedia Britannica', 'brooks':'Brooks Cole'};
        return press[condition['bookpress']];
    };
    var bookprice = function() {
        if (condition.bookprice[0] == '' && condition.bookprice[1] == '') {
            return 'BOOK_PRICE LIKE \'\%\%\'';
        } else if (condition.bookprice[0] != '' && condition.bookprice[1] == '') {
            return 'BOOK_PRICE >= ' + condition.bookprice[0];
        } else if (condition.bookprice[0] == '' && condition.bookprice[1] != '') {
            return 'BOOK_PRICE <= ' + condition.bookprice[1];
        } else {
            return 'BOOK_PRICE BETWEEN ' + condition.bookprice[0] + ' AND ' + condition.bookprice[1];
        }
    };
    var sql = 'SELECT * FROM BOOK_INFO_TB WHERE '
            + 'BOOK_NAME LIKE \'\%' + condition['bookname'] + '\%\' AND '
            + 'BOOK_TYPE LIKE \'\%' + booktype() + '\%\' AND '
            + 'BOOK_AUTHOR_FIRST_NAME LIKE \'\%' + bookauthor()[0] + '\%\' AND '
            + 'BOOK_AUTHOR_LAST_NAME LIKE \'\%' + bookauthor()[1] + '\%\' AND '
            + bookdate()
            + 'BOOK_PUBLISH_PRESS LIKE \'\%' + bookpress() + '\%\' AND '
            + bookprice()
            + ' ORDER BY BOOK_INFO_TB.BOOK_ID ASC';
    /*Execute select sql.*/
    connection.query(sql, function(err, rows) {
        if (err) {
            console.log('Error: Fail to fetch result from database.', err);
            callback('error');
        } else {
            callback(rows);
        }
    });
}
/**
 * Function: consumerStoreInfoQuery
 * Parameter: condition, connection, and callback
 * Description: To search storage basic information based on typed conditions
 */
exports.todoStoreInfoQuery = function(condition, connection, callback) {
    var booktype = function() {
        return (condition['booktype'] == '0') ? '' : condition['booktype'];
    }
    var repopurpose = function() {
        return (condition['repopurpose'] == '0') ? '' : condition['repopurpose'];
    }
    var sql = 'SELECT BOOK_INFO_TB.BOOK_ID, BOOK_INFO_TB.BOOK_NAME, BOOK_INFO_TB.BOOK_TYPE, BOOK_INFO_TB.BOOK_QUANTITY, REPOSITORY_INFO_TB.REPOSITORY_ID, REPOSITORY_INFO_TB.REPOSITORY_ADDRESS_STREET, REPOSITORY_INFO_TB.REPOSITORY_ADDRESS_NUMBER, REPOSITORY_INFO_TB.REPOSITORY_PURPOSE, REPOSITORY_INFO_TB.REPOSITORY_GUARD_ID, REPOSITORY_INFO_TB.REPOSITORY_VENDOR_ID FROM BOOK_INFO_TB INNER JOIN BOOK_REPOSITORY_TB ON BOOK_INFO_TB.BOOK_ID = BOOK_REPOSITORY_TB.BOOK_ID INNER JOIN REPOSITORY_INFO_TB ON BOOK_REPOSITORY_TB.REPOSITORY_ID = REPOSITORY_INFO_TB.REPOSITORY_ID WHERE'
            + ' BOOK_INFO_TB.BOOK_ID LIKE \'\%' + condition['bookid'] + '\%\' AND'
            + ' BOOK_INFO_TB.BOOK_NAME LIKE \'\%' + condition['bookname'] + '\%\' AND'
            + ' BOOK_INFO_TB.BOOK_TYPE LIKE \'\%' + booktype() + '\%\' AND'
            + ' BOOK_INFO_TB.BOOK_ISBN LIKE \'\%' + condition['bookisbn'] + '\%\' AND'
            + ' REPOSITORY_INFO_TB.REPOSITORY_PURPOSE LIKE \'\%' + repopurpose() + '\%\''
            + ' ORDER BY BOOK_INFO_TB.BOOK_ID ASC';
    /*Execute select sql.*/
    connection.query(sql, function(err, rows) {
        if (err) {
            console.log('Error: Fail to fetch result from database.', err);
            callback('error');
        } else {
            callback(rows);
        }
    });
}
/**
 * Function: consumerVendInfoQuery
 * Parameter: condition, connection, and callback
 * Description: To search vendor basic information based on typed conditions
 */
exports.consumerVendInfoQuery = function(condition, connection, callback) {
    var booktype = function() {
        return (condition['booktype'] == '0') ? '' : condition['booktype'];
    }
    var sql = 'SELECT VENDOR_INFO_TB.VENDOR_ID, VENDOR_INFO_TB.VENDOR_NAME, VENDOR_INFO_TB.VENDOR_ADDRESS_CITY, VENDOR_INFO_TB.VENDOR_ADDRESS_STATE, VENDOR_INFO_TB.VENDOR_ADDRESS_COUNTRY, VENDOR_INFO_TB.VENDOR_PHONE, VENDOR_INFO_TB.VENDOR_EMAIL, VENDOR_REPOSITORY_ID, BOOK_INFO_TB.BOOK_TYPE FROM VENDOR_INFO_TB LEFT JOIN BOOK_REPOSITORY_TB ON VENDOR_INFO_TB.VENDOR_REPOSITORY_ID = BOOK_REPOSITORY_TB.REPOSITORY_ID LEFT JOIN BOOK_INFO_TB ON BOOK_REPOSITORY_TB.BOOK_ID = BOOK_INFO_TB.BOOK_ID WHERE'
        + ' BOOK_INFO_TB.BOOK_ID LIKE \'\%' + condition['bookid'] + '\%\' AND'
        + ' BOOK_INFO_TB.BOOK_TYPE LIKE \'\%' + booktype() + '\%\' AND'
        + ' BOOK_REPOSITORY_TB.REPOSITORY_ID LIKE \'\%' + condition['repoid'] + '\%\' AND'
        + ' VENDOR_INFO_TB.VENDOR_ID LIKE \'\%' + condition['vendid'] + '\%\' AND'
        + ' VENDOR_INFO_TB.VENDOR_NAME LIKE \'\%' + condition['vendname'] + '\%\''
        + ' ORDER BY VENDOR_INFO_TB.VENDOR_ID ASC';
    /*Execute select sql.*/
    connection.query(sql, function(err, rows) {
        if (err) {
            console.log('Error: Fail to fetch result from database.', err);
            callback('error');
        } else {
            callback(rows);
        }
    });
}
/**
 * Function: consumerBuyBookQuery
 * Parameter: condition, connection, and callback
 * Description: To search book basically purchasing information based on typed conditions
 */
exports.consumerBuyBookQuery = function(condition, connection, callback) {
    var sql = 'SELECT BOOK_ID, BOOK_NAME, BOOK_PRICE FROM BOOK_INFO_TB WHERE'
            + ' BOOK_ISBN=\'' + condition['bookisbn'] + '\'';
    /*Execute select sql.*/
    connection.query(sql, function(err, rows) {
        if (err) {
            console.log('Error: Fail to fetch result from database.', err);
            callback('error');
        } else {
            callback(rows[0]);
        }
    });
}
/**
 * Function: staffBuyInfoQuery
 * Parameter: condition, connection, and callback
 * Description: To search consumer basically purchasing information based on typed conditions
 */
exports.staffBuyInfoQuery = function(condition, connection, callback) {
    var booktype = function() {
        return (condition.booktype == '0') ? '' : condition.booktype;
    }
    var buydate = function() {
        if (condition.buydate[0] == '' && condition.buydate[1] == '') {
            return ' DATE(CONSUMER_BOOK_TB.DATE_OF_BUY) LIKE \'\%\%\'';
        } else if (condition.buydate[0] != '' && condition.buydate[1] == '') {
            return ' DATE(CONSUMER_BOOK_TB.DATE_OF_BUY) >= \'' + condition.buydate[0] + '\'';
        } else if (condition.buydate[0] == '' && condition.buydate[1] != '') {
            return ' DATE(CONSUMER_BOOK_TB.DATE_OF_BUY) <= \'' + condition.buydate[1] + '\'';
        } else {
            return ' DATE(CONSUMER_BOOK_TB.DATE_OF_BUY) BETWEEN \'' + condition.buydate[0] + '\' AND \'' + condition.buydate[1] + '\'';
        }
    }
    var sql = 'SELECT CONSUMER_INFO_TB.CONSUMER_ID, CONSUMER_INFO_TB.CONSUMER_FIRST_NAME, CONSUMER_INFO_TB.CONSUMER_LAST_NAME, CONSUMER_INFO_TB.CONSUMER_TYPE, CONSUMER_BOOK_TB.DATE_OF_BUY, BOOK_INFO_TB.BOOK_ID, BOOK_INFO_TB.BOOK_NAME, BOOK_INFO_TB.BOOK_TYPE, BOOK_INFO_TB.BOOK_ISBN, BOOK_INFO_TB.BOOK_PRICE, BOOK_INFO_TB.BOOK_QUANTITY FROM BOOK_INFO_TB INNER JOIN CONSUMER_BOOK_TB ON BOOK_INFO_TB.BOOK_ID = CONSUMER_BOOK_TB.BOOK_ID INNER JOIN CONSUMER_INFO_TB ON CONSUMER_BOOK_TB.CONSUMER_ID = CONSUMER_INFO_TB.CONSUMER_ID WHERE'
            + ' BOOK_INFO_TB.BOOK_ID LIKE \'\%' + condition.bookid + '\%\' AND'
            + ' BOOK_INFO_TB.BOOK_NAME LIKE \'\%' + condition.bookname + '\%\' AND'
            + ' BOOK_INFO_TB.BOOK_TYPE LIKE \'\%' + booktype() + '\%\' AND'
            + buydate()
            + ' ORDER BY BOOK_INFO_TB.BOOK_ID ASC';
    /*Execute select sql.*/
    connection.query(sql, function(err, rows) {
        if (err) {
            console.log('Error: Fail to fetch result from database.', err);
            callback('error');
        } else {
            callback(rows);
        }
    });
}
