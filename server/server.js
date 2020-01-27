const  express = require('express');
const bodyParser =  require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

// Initialize Express
const app = express();
require('dotenv').config();

// Connect to the Mongo DB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

// Parse request body as JSON
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

//Models
const { User } = require('./models/user');

//Middleware
const { auth } = require('./middleware/auth');

//=====================
//      USERS
//=====================
app.get('/api/users/auth', auth, (req, res) => {
    res.status(200).json({
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        cart: req.user.cart,
        history: req.user.history
    });
});

app.post('/api/users/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, doc) => {
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true
        });
    })
});

app.post('/api/users/login', (req, res) => {
    User.findOne({'email': req.body.email}, (err, user) => {
        if(!user) return res.json({loginSuccess:false, message:'Auth failed email not found'});
        
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch) return res.json({loginSuccess:false, message:'Incorrect Password'});

            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);
                res.cookie('w_auth', user.token).status(200).json({
                    loginSuccess:true
                });
            });
        });
    });
});

app.get('/api/user/logout', auth, (req, res) => {
    User.findOneAndUpdate(
        { _id:req.user._id },
        { token: '' },
        (err,doc)=>{
            if(err) return res.json({success:false,err});
            return res.status(200).send({
                success: true
            })
        }
    );
});

const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
})
