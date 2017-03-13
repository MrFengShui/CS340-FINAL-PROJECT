/*Import and load necessary NodeJS libraries*/
var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mysql = require('mysql');
/*Define MySQL connection conditions*/
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
/*Import and load 4 modules of insert, update, delete, and select*/
sqlInsert = require('./modules/prog-insert.js');
sqlUpdate = require('./modules/prog-update.js');
sqlDelete = require('./modules/prog-delete.js');
sqlSelect = require('./modules/prog-select.js');
/*Load necessary handlebars engine*/
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
/*Response post request of purchasing information*/
app.post('/validate/buyInfoInsert', function(req, res) {
    sqlInsert.buyBookInfoAdd(req.body, connection, function(rs) {
        if (rs == 'error') {
            res.status(404).send(rs);
        } else {
            res.status(200).send(rs);
        }
    });
});
/*Response post request of login*/
app.post('/validate/signin', function(req, res) {
    if (req.body['role'] == "administrator") {
        var adminInfo = require('./public/config/admin.json');
        var flag = false;
        var rs = {};
        /*Search and match input username and password*/
        for (var i = 0; i < adminInfo.length; i++) {
            if (adminInfo[i]['username'] == req.body['username'] && adminInfo[i]['password'] == req.body['password']) {
                rs['id'] = adminInfo[i].id;
                rs['name'] = adminInfo[i].name;
                rs['type'] = adminInfo[i].type;
                flag = true;
                break;
            }
        }
        /*Return corresponding result back following matching result*/
        if (flag) {
            res.status(200).json({role:"administrator", result:rs});
        } else {
            res.status(404).send();
        }
    } else {
        sqlSelect.loginQuery(req.body, connection, function(rs) {
            if (rs == 'error') {
                res.status(404).send();
            } else {
                res.status(200).json({role:"visitor", result:rs});
            }
        });
    }
});
/*Response post request of book information search*/
app.post('/validate/bookInfoSearch', function(req, res) {
    sqlSelect.consumerBookInfoQuery(req.body, connection, function(rs) {
        if (rs == 'error') {
            res.status(404).send();
        } else {
            res.status(200).json(rs);
        }
    });
});
/*Response post request of book information add*/
app.post('/validate/bookInfoAdd', function(req, res) {
    sqlInsert.staffBookInfoAdd(req.body, connection, function(rs) {
        if (rs == 'error') {
            res.status(404).send('error');
        } else {
            res.status(200).send('success');
        }
    });
});
/*Response post requst of book information chanage*/
app.post('/validate/bookInfoChange', function(req, res) {
    sqlUpdate.staffBookInfoChange(req.body, connection, function(rs) {
        if (rs == 'error') {
            res.status(404).send('error');
        } else {
            res.status(200).send('success');
        }
    });
});
/*Response post request of book information remove*/
app.post('/validate/bookInfoRemove', function(req, res) {
    sqlDelete.staffBookInfoRemove(req.body, connection, function(rs) {
        if (rs == 'error') {
            res.status(404).send('error');
        } else {
            res.status(200).send('success');
        }
    });
});
/*Response post request of storage information search*/
app.post('/validate/storeInfoSearch', function(req, res) {
    sqlSelect.todoStoreInfoQuery(req.body, connection, function(rs) {
        if (rs == 'error') {
            res.status(404).send();
        } else {
            res.status(200).json(rs);
        }
    });
});
/*Response post request of storage information add*/
app.post('/validate/storeInfoAdd', function(req, res) {
    sqlInsert.staffStoreInfoAdd(req.body, connection, function(rs) {
        if (rs == 'error') {
            res.status(404).send('error');
        } else {
            res.status(200).send('success');
        }
    });
});
/*Response post request of storage information change*/
app.post('/validate/storeInfoChange', function(req, res) {
    sqlUpdate.staffStoreInfoChange(req.body, connection, function(rs) {
        if (rs == 'error') {
            res.status(404).send('error');
        } else {
            res.status(200).send('success');
        }
    });
});
/*Response post request of storage information remove*/
app.post('/validate/storeInfoRemove', function(req, res) {
    sqlDelete.staffStoreInfoRemove(req.body, connection, function(rs) {
        if (rs == 'error') {
            res.status(404).send('error');
        } else {
            res.status(200).send('success');
        }
    });
});
/*Response post request of vendor information remove*/
app.post('/validate/vendInfoSearch', function(req, res) {
    sqlSelect.consumerVendInfoQuery(req.body, connection, function(rs) {
        if (rs == 'error') {
            res.status(404).send();
        } else {
            res.status(200).json(rs);
        }
    });
});
/*Response post request of vendor information add*/
app.post('/validate/vendInfoAdd', function(req, res) {
    sqlInsert.staffVendInfoAdd(req.body, connection, function(rs) {
        if (rs == 'error') {
            res.status(404).send('error');
        } else {
            res.status(200).send('success');
        }
    });
});
/*Response post request of vendor information change*/
app.post('/validate/vendInfoChange', function(req, res) {
    sqlUpdate.staffVendInfoChange(req.body, connection, function(rs) {
        if (rs == 'error') {
            res.status(404).send('error');
        } else {
            res.status(200).send('success');
        }
    });
});
/*Response post request of vendor information remove*/
app.post('/validate/vendInfoRemove', function(req, res) {
    sqlDelete.staffVendInfoRemove(req.body, connection, function(rs) {
        if (rs == 'error') {
            res.status(404).send('error');
        } else {
            res.status(200).send('success');
        }
    });
});
/*Response post request of consumer buy information*/
app.post('/validate/consumerBuyBook', function(req, res) {
    sqlSelect.consumerBuyBookQuery(req.body, connection, function(rs) {
        if (rs == 'error') {
            res.status(404).send();
        } else {
            res.status(200).json(rs);
        }
    });
});
/*Response post request of consumer buy information search*/
app.post('/validate/buyInfoSearch', function(req, res) {
    sqlSelect.staffBuyInfoQuery(req.body, connection, function(rs) {
        if (rs == 'error') {
            res.status(404).send();
        } else {
            res.status(200).json(rs);
        }
    });
});
/*Response browser request and redirect to login page*/
app.get('/', function(req, res) {
    res.render('initial-page', {
        title: 'Initial Page'
    });
});
/*Redirect to success page*/
app.get('/success', function(req, res) {
    res.render('success-page', {});
});
/*Execute logout and redirect to login page*/
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
/*Redirect to consumer home page by following checking login information*/
app.get('/consumer-page%id=:id%%name=:name%%type=:type%', function(req, res) {
    res.render('consumer-page', {
        title: 'Consumer Visit Page',
        id: req.params.id,
        name: req.params.name,
        type: req.params.type
    });
});
/*Redirect to staff home page by following checking login information*/
app.get('/staff-page%id=:id%%name=:name%%type=:type%', function(req, res) {
    res.render('staff-page', {
        title: 'Staff Manage Page',
        id: req.params.id,
        name: req.params.name,
        type: req.params.type
    });
});

// app.get('/book-query', function(req, res) {
//     res.render('book-query-page', {
//         title: 'Book Query Page'
//     });
// });

// app.get('/book-modify', function(req, res) {
//     res.render('book-modify-page', {
//         title: 'Book Modify Page'
//     });
// });

// app.get('/storage-query', function(req, res) {
//     res.render('store-query-page', {
//         title: 'Storage Query Page'
//     });
// });

// app.get('/storage-modify', function(req, res) {
//     res.render('store-modify-page', {
//         title: 'Storage Modify Page'
//     });
// });

// app.get('/vendor-query', function(req, res) {
//     res.render('vend-query-page', {
//         title: 'Vendor Query Page'
//     });
// });

// app.get('/vendor-modify', function(req, res) {
//     res.render('vend-modify-page', {
//         title: 'Vendor Modify Page'
//     });
// });
/*Build connection to MySQL and then listen local port*/
connection.connect(function(err) {
    if (err) {
        console.log('Erro: Failed to connect to MySQL Database');
        throw err;
    } else {
        app.listen(10000, function() {
            console.log('===', 'Listening on Port', 10000, '===');
        });
    }
});
