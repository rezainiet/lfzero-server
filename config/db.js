const mongoose = require('mongoose');
const { db } = require('./config');
const config = require('./config');

const dbURL = config.db.url;

mongoose.connect(dbURL)
    .then(() => {
        console.log('MongoDB atlas is connected!')
    })
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });