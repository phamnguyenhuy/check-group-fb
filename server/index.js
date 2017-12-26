var express = require('express');
var jsonParser = require('body-parser').json();
var app = express();
var randomstring = require('randomstring');
var axios = require('axios');
var CONST = require('./const/api');
//var productModel = require('./db');


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3333, () => console.log('Server started'))
app.get('/', (req, res) => res.render('home'));

app.get('*', (req, res) => res.redirect('/'));


app.post('/getID', jsonParser, (req, res) => {
    let idComment = req.body.idcomment,
        idUser = req.body.iduser
        list = {};
    axios.get(CONST.endPoint+'/'+idComment,{
        params: {
            'access_token': CONST.token,
            fields: 'comments.limit(5000)'
        }
    }).then(content => {
        res.send(content.data);
    })
});
