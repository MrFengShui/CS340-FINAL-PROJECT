/**/
var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mysql = require('mysql');
/**/
var config = require('./public/config/config.json');
// var config = require('./public/config/home-config.json');
var host = config['host'];
var username = config['username'];
var password = config['password'];
var dbname = config['dbname'];
var connection = mysql.createConnection({
    host: host,
    user: username,
    password: password,
    database: dbname
});
/**/
sqlInsert = require('./modules/prog-insert.js');
sqlUpdate = require('./modules/prog-update.js');
sqlDelete = require('./modules/prog-delete.js');
sqlSelect = require('./modules/prog-select.js');
/**/
var app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({
    limit: '32mb'
}));
app.use(bodyParser.urlencoded({
    limit: '32mb',
    extended: true
}));

app.post('/validate/buyInfoInsert', function(req, res) {
    var sql = 'INSERT INTO CONSUMER_BOOK_TB (CONSUMER_ID, BOOK_ID) VALUES ';

    for (var i = 0; i < req.body.items.length; i++) {
        sql += '(\'' + req.body.items[i].personid + '\', \'' + req.body.items[i].bookid + '\')' + ((i == req.body.items.length - 1) ? '' : ', ');
    }
    console.log(sql);
    sqlInsert.buyBookInfoAdd(sql, connection, function(rs) {
        console.log('$MySQL-BUY-INSERT-Validation$', rs);
        if (rs == 'error') {
            res.status(404).send(rs);
        } else {
            res.status(200).send(rs);
        }
    });
});

app.post('/validate/signin', function(req, res) {
    if (req.body['role'] == "administrator") {
        var adminInfo = require('./public/config/admin.json');
        var flag = false;
        var rs = {};

        for (var i = 0; i < adminInfo.length; i++) {
            if (adminInfo[i]['username'] == req.body['username'] && adminInfo[i]['password'] == req.body['password']) {
                rs['id'] = adminInfo[i].id;
                rs['name'] = adminInfo[i].name;
                rs['type'] = adminInfo[i].type;
                flag = true;
                break;
            }
        }

        if (flag) {
            res.status(200).json({role:"administrator", result:rs});
        } else {
            res.status(404).send();
        }
    } else {
        var sql = 'SELECT * FROM CONSUMER_INFO_TB WHERE CONSUMER_USERNAME=\'' + req.body['username'] + '\' AND CONSUMER_PASSWORD=\'' + req.body['password'] + '\'';

        sqlSelect.loginQuery(sql, connection, function(rs) {
            console.log('$MySQL-Login-Validation$', rs);
            if (rs == 'error') {
                res.status(404).send();
            } else {
                res.status(200).json({role:"visitor", result:rs});
            }
        });
    }
});

app.post('/validate/bookInfoSearch', function(req, res) {
    var booktype = function() {
        return (req.body['booktype'] == '0') ? '' : req.body['booktype'];
    }
    var bookauthor = function() {
        var author = [];

        if (req.body['bookauthor'] == '') {
            author[0] = '';
            author[1] = '';
        } else {
            author = req.body['bookauthor'].split(' ')
        }

        return author;
    };
    var bookdate = function() {
        if (req.body['bookdate'][0] == '' && req.body['bookdate'][1] == '') {
            return 'BOOK_PUBLISH_YEAR LIKE \'\%\%\' AND ';
        } else {
            var date = [{year:'', month:'', date:''}, {year:'', month:'', date:''}];

            if (req.body['bookdate'][0] != '') {
                var temp = req.body['bookdate'][0].split('-');
                date[0].year = temp[0];
                date[0].month = temp[1];
                date[0].date = temp[2];
            }

            if (req.body['bookdate'][1] != '') {
                var temp = req.body['bookdate'][1].split('-');
                date[1].year = temp[0];
                date[1].month = temp[1];
                date[1].date = temp[2];
            }

            return 'BOOK_PUBLISH_YEAR*10000+BOOK_PUBLISH_MONTH*100+BOOK_PUBLISH_DATE BETWEEN ' + date[0].year + date[0].month + date[0].date + ' AND ' + date[1].year + date[1].month + date[1].date + ' AND ';
        }
    };
    var bookpress = function() {
        press = {'anypress':'', 'apress':'Apress', 'pearson':'Pearson', 'oreilly':'O\'Reilly Media', 'addison':'Addison-Wesley Professional', 'nostarch':'No Starch Press', 'scholastic':'Scholastic', 'createspace':'CreateSpace Independent Publishing Platform', 'scribner':'Scribner', 'dover':'Dover Publications', 'cambridge':'Cambridge University Press', 'britannica':'Encyclopaedia Britannica', 'brooks':'Brooks Cole'};
        return press[req.body['bookpress']];
    };
    var bookprice = function() {
        if (req.body['bookprice'][0] == '-1' && req.body['bookprice'][1] == '-1') {
            return 'BOOK_PRICE LIKE \'\%\%\'';
        } else {
            var price = [];
            price[0] = (req.body['bookprice'][0] == '-1') ? '' : req.body['bookprice'][0];
            price[1] = (req.body['bookprice'][1] == '-1') ? '' : req.body['bookprice'][1];
            return 'BOOK_PRICE BETWEEN ' + price[0] + ' AND ' + price[1];
        }
    };
    var sql = 'SELECT * FROM BOOK_INFO_TB WHERE '
            + 'BOOK_NAME LIKE \'\%' + req.body['bookname'] + '\%\' AND '
            + 'BOOK_TYPE LIKE \'\%' + booktype() + '\%\' AND '
            + 'BOOK_AUTHOR_FIRST_NAME LIKE \'\%' + bookauthor()[0] + '\%\' AND '
            + 'BOOK_AUTHOR_LAST_NAME LIKE \'\%' + bookauthor()[1] + '\%\' AND '
            + bookdate()
            + 'BOOK_PUBLISH_PRESS LIKE \'\%' + bookpress() + '\%\' AND '
            + bookprice();

    sqlSelect.consumerBookInfoQuery(sql, connection, function(rs) {
        console.log('$MySQL-BOOK-Validation$', rs);
        if (rs == 'error') {
            res.status(404).send();
        } else {
            res.status(200).json(rs);
        }
    });
});

app.post('/validate/storeInfoSearch', function(req, res) {
    var booktype = function() {
        return (req.body['booktype'] == '0') ? '' : req.body['booktype'];
    }
    var repopurpose = function() {
        return (req.body['repopurpose'] == '0') ? '' : req.body['repopurpose'];
    }
    var sql = 'SELECT BOOK_INFO_TB.BOOK_ID, BOOK_INFO_TB.BOOK_NAME, BOOK_INFO_TB.BOOK_TYPE, BOOK_INFO_TB.BOOK_QUANTITY, REPOSITORY_INFO_TB.REPOSITORY_ID, REPOSITORY_INFO_TB.REPOSITORY_ADDRESS_STREET, REPOSITORY_INFO_TB.REPOSITORY_ADDRESS_NUMBER, REPOSITORY_INFO_TB.REPOSITORY_GUARD_ID FROM BOOK_INFO_TB INNER JOIN BOOK_REPOSITORY_TB ON BOOK_INFO_TB.BOOK_ID = BOOK_REPOSITORY_TB.BOOK_ID INNER JOIN REPOSITORY_INFO_TB ON BOOK_REPOSITORY_TB.REPOSITORY_ID = REPOSITORY_INFO_TB.REPOSITORY_ID WHERE '
    + 'BOOK_INFO_TB.BOOK_ID LIKE \'\%' + req.body['bookid'] + '\%\' AND '
    + 'BOOK_INFO_TB.BOOK_NAME LIKE \'\%' + req.body['bookname'] + '\%\' AND '
    + 'BOOK_INFO_TB.BOOK_TYPE LIKE \'\%' + booktype() + '\%\' AND '
    + 'BOOK_INFO_TB.BOOK_ISBN LIKE \'\%' + req.body['bookisbn'] + '\%\' AND '
    + 'REPOSITORY_INFO_TB.REPOSITORY_ID LIKE \'\%' + req.body['repoid'] + '\%\' AND '
    + 'REPOSITORY_INFO_TB.REPOSITORY_PURPOSE LIKE \'\%' + repopurpose() + '\%\'';

    sqlSelect.consumerStoreInfoQuery(sql, connection, function(rs) {
        console.log('$MySQL-STORE-Validation$', rs);
        if (rs == 'error') {
            res.status(404).send();
        } else {
            res.status(200).json(rs);
        }
    });
});

app.post('/validate/vendInfoSearch', function(req, res) {
    var booktype = function() {
        return (req.body['booktype'] == '0') ? '' : req.body['booktype'];
    }
    var sql = 'SELECT VENDOR_INFO_TB.VENDOR_ID, VENDOR_INFO_TB.VENDOR_NAME, VENDOR_INFO_TB.VENDOR_ADDRESS_CITY, VENDOR_INFO_TB.VENDOR_ADDRESS_STATE, VENDOR_INFO_TB.VENDOR_ADDRESS_COUNTRY, VENDOR_INFO_TB.VENDOR_PHONE, VENDOR_INFO_TB.VENDOR_EMAIL, BOOK_INFO_TB.BOOK_TYPE FROM VENDOR_INFO_TB LEFT JOIN BOOK_REPOSITORY_TB ON VENDOR_INFO_TB.VENDOR_REPOSITORY_ID = BOOK_REPOSITORY_TB.REPOSITORY_ID LEFT JOIN BOOK_INFO_TB ON BOOK_REPOSITORY_TB.BOOK_ID = BOOK_INFO_TB.BOOK_ID WHERE '
    + 'BOOK_INFO_TB.BOOK_ID LIKE \'\%' + req.body['bookid'] + '\%\' AND '
    + 'BOOK_INFO_TB.BOOK_TYPE LIKE \'\%' + booktype() + '\%\' AND '
    + 'BOOK_REPOSITORY_TB.REPOSITORY_ID LIKE \'\%' + req.body['repoid'] + '\%\' AND '
    + 'VENDOR_INFO_TB.VENDOR_ID LIKE \'\%' + req.body['vendid'] + '\%\' AND '
    + 'VENDOR_INFO_TB.VENDOR_NAME LIKE \'\%' + req.body['vendname'] + '\%\'';

    sqlSelect.consumerVendInfoQuery(sql, connection, function(rs) {
        console.log('$MySQL-VEND-Validation$', rs);
        if (rs == 'error') {
            res.status(404).send();
        } else {
            res.status(200).json(rs);
        }
    });
});

app.post('/validate/consumerBuyBook', function(req, res) {
    var sql = 'SELECT BOOK_ID, BOOK_NAME, BOOK_PRICE FROM BOOK_INFO_TB WHERE BOOK_ISBN=\'' + req.body['bookisbn'] + '\'';

    sqlSelect.consumerBuyBookQuery(sql, connection, function(rs) {
        console.log('$MySQL-BUY-Validation$', rs);
        if (rs == 'error') {
            res.status(404).send();
        } else {
            res.status(200).json(rs);
        }
    });
});

app.post('/validate/buyInfoSearch', function(req, res) {
    var booktype = function() {
        return (req.body['booktype'] == '0') ? '' : req.body['booktype'];
    }
    var bookdate = function() {
        if (req.body['bookdate'][0] == '' && req.body['bookdate'][1] == '') {
            return 'BOOK_PUBLISH_YEAR LIKE \'\%\%\' AND ';
        } else {
            var date = [{year:'', month:'', date:''}, {year:'', month:'', date:''}];

            if (req.body['bookdate'][0] != '') {
                var temp = req.body['bookdate'][0].split('-');
                date[0].year = temp[0];
                date[0].month = temp[1];
                date[0].date = temp[2];
            }

            if (req.body['bookdate'][1] != '') {
                var temp = req.body['bookdate'][1].split('-');
                date[1].year = temp[0];
                date[1].month = temp[1];
                date[1].date = temp[2];
            }

            return 'BOOK_PUBLISH_YEAR*10000+BOOK_PUBLISH_MONTH*100+BOOK_PUBLISH_DATE BETWEEN ' + date[0].year + date[0].month + date[0].date + ' AND ' + date[1].year + date[1].month + date[1].date + ' AND ';
        }
    };
    var sql = 'SELECT CONSUMER_INFO_TB.CONSUMER_ID, CONSUMER_INFO_TB.CONSUMER_FIRST_NAME, CONSUMER_INFO_TB.CONSUMER_LAST_NAME, CONSUMER_INFO_TB.COMSUMER_TYPE, BOOK_INFO_TB.BOOK_ID, BOOK_INFO_TB.BOOK_NAME, BOOK_INFO_TB.BOOK_TYPE, BOOK_INFO_TB.BOOK_ISBN, BOOK_INFO_TB.BOOK_PRICE FROM BOOK_INFO_TB INNER JOIN CONSUMER_BOOK_TB ON BOOK_INFO_TB.BOOK_ID = CONSUMER_BOOK_TB.BOOK_ID INNER JOIN CONSUMER_INFO_TB ON CONSUMER_BOOK_TB.CONSUMER_ID = CONSUMER_INFO_TB.CONSUMER_ID WHERE'
            + ' BOOK_INFO_TB.BOOK_ID LIKE \'' + req.body['bookid'] + '\' AND '
            + ' BOOK_INFO_TB.BOOK_NAME LIKE \'' + req.body['bookname'] + '\' AND '
            + ' BOOK_INFO_TB.BOOK_TYPE LIKE \'' + booktype() + '\'';

    sqlSelect.staffBuyInfoQuery(sql, connection, function(rs) {
        console.log('$MySQL-BUY-Validation$', rs);
        if (rs == 'error') {
            res.status(404).send();
        } else {
            res.status(200).json(rs);
        }
    });
});

app.get('/', function(req, res) {
    res.render('initial-page', {
        title: 'Initial Page'
    });
});

app.get('/success', function(req, res) {
    res.render('success-page', {});
});

app.get('/logout', function(req, res) {
    var cookies = req.cookies;

    for (var i = 0; i < cookies.length; i++) {
        if (!cookies.hasOwnProperty(cookies[i])) {
            continue;
        }

        res.cookie(cookies[i], '', {expires: new Date(0)});
    }

    res.redirect('/');
});

app.get('/consumer-page%id=:id%%name=:name%%type=:type%', function(req, res) {
    res.render('consumer-page', {
        title: 'Consumer Visit Page',
        id: req.params.id,
        name: req.params.name,
        type: req.params.type
    });
});

app.get('/staff-page%id=:id%%name=:name%%type=:type%', function(req, res) {
    res.render('staff-page', {
        title: 'Staff Manage Page',
        id: req.params.id,
        name: req.params.name,
        type: req.params.type
    });
});

app.get('/book-query', function(req, res) {
    res.render('book-query-page', {
        title: 'Book Query Page'
    });
});

app.get('/book-modify', function(req, res) {
    res.render('book-modify-page', {
        title: 'Book modify Page'
    });
});

app.get('/storage-query', function(req, res) {
    res.render('store-query-page', {
        title: 'Storage Query Page'
    });
});

app.get('/storage-modify', function(req, res) {
    res.render('store-modify-page', {
        title: 'Storage Modify Page'
    });
});

app.get('/vendor-query', function(req, res) {
    res.render('vend-query-page', {
        title: 'Vendor Query Page'
    });
});

app.get('/vendor-modify', function(req, res) {
    res.render('vend-modify-page', {
        title: 'Vendor Modify Page'
    });
});

connection.connect(function(err) {
    if (err) {
        console.console.log('Erro: Failed to connect to MySQL Database');
        throw err;
    } else {
        app.listen(10000, function() {
            console.log('===', 'Listening on Port', 10000, '===');
        });
    }
});
