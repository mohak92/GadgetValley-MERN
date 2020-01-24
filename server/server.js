const  express = require('express');
const bodyParser =  require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

// Initialize Express
const app = express();
require('dotenv').config();

// Connect to the Mongo DB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });

// Parse request body as JSON
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

//Models
const { User } = require('./models/user');

//=====================
//      USERS
//=====================
app.post('api/users/register', (req, res) => {
    res.status(200);
});

const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
})