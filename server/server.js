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
app.post('/api/users/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, doc) => {
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            userdata:doc
        });
    })
});

const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
})