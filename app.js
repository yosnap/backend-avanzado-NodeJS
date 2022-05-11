const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./routes');
const { NotFoundMiddleware , ErrorMiddleware } = require('./middlewares/ErrorsMiddleware');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/',router);
app.use(NotFoundMiddleware);
app.use(ErrorMiddleware);

module.exports = app;
