/**/
var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mysql = require('mysql');
/**/
// var config = require('./public/config/config.json');
var config = require('./public/config/home-config.json');
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
select = require('./modules/prog-select.js');
/**/
var app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({
    limit: '32mb'
}));
app.use(bodyParser.urlencoded({
    limit: '32mb',
    extended: true
}));

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

        select.consumerQuery(sql, connection, function(rs) {
            console.log('$MySQL-Login-Validation$', rs);
            if (rs == 'error') {
                res.status(404).send();
            } else {
                res.status(200).json({role:"visitor", result:rs});
            }
        });
    }
});

app.get('/', function(req, res) {
    res.render('initial-page', {
        title: 'Initial Page'
    });
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
            console.log('==', 'Listening on Port', 10000, '==');
        });
    }
});

// app.listen(10000, function() {
//     console.log('==', 'Listening on Port', 10000, '==');
// });
