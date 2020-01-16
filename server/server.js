const  express = require('express');
const bodyParser =  require('body-parser');
const cookieParser = require('cookie-parser');

// Initialize Express
const app = express();

const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
})