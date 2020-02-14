# Gadget Valley
Gadget Valley is an online marketplace for renting the latest and greatest technology for your needs.
Example: Renting $52,000 fully specced Mac Pro for $1000/month for couple of months until you finish your project, or trying out new smartphones every 3 months.

## Using Gadget Valley
* Deployment URL: https://gadget-valley.herokuapp.com/
* Take a tour on the home page
* Sign up if you'd like OR use the test account:
    * Login: user@gadget.com
    * Password: password123
* Browse through products
* View product description for products that interest you
* Apply Filters such as brand, category and price to easily find the product you would like to rent
* Add product to cart and checkout with 1 click using PayPal (This web app is For demo purposes only you won't be charged)
* Account information is editable

## Built With
* [Heroku](https://www.heroku.com/)- Cloud platform which host web application. 
* [React](https://reactjs.org/) - A Component Based JavaScript library for building user interfaces.
* [Redux](https://www.npmjs.com/package/redux) - Redux is a predictable state container for JavaScript apps.
* [Node](https://nodejs.org/en) - A JavaScript run-time environment that exectues server side code.
* [Express](https://www.npmjs.com/package/express) - A Node package used as middleware to create routes.
* [MongoDB](https://www.mongodb.com/) - MongoDB is a general purpose, document-based, distributed database.
* [Material-UI](https://material-ui.com/) - A React component library based on Material Design.
* [Moment.js](https://momentjs.com/) - A JavaScript library for time calculations.
* [Mongoose](https://mongoosejs.com/docs/guide.html) -  Object document mapping for MongoDB/Node.js
* [Cloudinary](https://cloudinary.com) - Cloud based image and video management services.
* [Cookie Parser](https://www.npmjs.com/package/cookie-parser) - Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
* [express-formidable](https://www.npmjs.com/package/express-formidable) - Formidable is a Node.js module for parsing form data, including multipart/form-data file upload.
* [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into
* [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
* [JWT](https://www.npmjs.com/package/passport) - Node package used as middleware for user authentication by hashing passwords. 
* [Bcrypt](https://www.npmjs.com/package/bcrypt) - Node package used as middleware with Node and JSON Web Token package for user authentication and password decryption. 
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Mark up language for layout & structuring pages. 
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Stylesheet language used to describe presentation of pages. 


## Local Workspace Setup
* Clone this repository onto your local machine
* Have MongoDB installed and running
* In the project directory, run `$npm install`
* Navigate to client directory `$cd client`
* In the client directory, run `$npm install`
* Go to https://cloudinary.com/ create an account and select free plan and note down the following: Cloud Name, API Key & API Secret
* Create a .env file in the root of the project directory and add the following
```
MONGODB_URI=mongodb://localhost:27017/gadgetValley
SECRET=SUPERSECRETPASSWORD123
CLOUD_NAME=Cloud Name from cloudinary
CLOUD_API_KEY=API Key from cloudinary
CLOUD_API_SECRET=API Secret from cloudinary
```
* MONGODB_URI and SECRET you can use the same values, for CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET signup and get those values from https://cloudinary.com/
* Run `$npm run dev` to spin up the project and confirm connection to Mongo is established
* If the server & client starts, lauch the application in a modern web browser such as Chrome or Safari and head to http://localhost:3000
* Proceed to create users in the application and use freely.
* If you would like to try admin functionality go to users collection using a Mongo GUI and change the role from 0 to 1 and update the document.

## Deployment
* Create Heroku account and install the Heroku CLI.
* Run `$ heroku login` from terminal.
* Run `$ heroku create <app_name>` to create app on heroku.
* Make sure you have added credit card details (required even if using free tier) on heroku to add resources.
* Run `$ heroku addons:create mongolab` to add MongoDB.
* Configure environment variables on heroku dashboard.
* Run `$ mongodump` then import the bson to Heroku's mongoDB.
* Push code to a github reop.
* Run `$ git push heroku master`
* Application deployed.

## Contributors
* Mohak Tamhane - [mohak92](https://github.com/mohak92)
* Shehryar Ehtesham -[Shehryare](https://github.com/Shehryare)
* Anish Patel - [anish0913](https://github.com/anish0913)
* Akolade Oke - [Akoladeolu03](https://github.com/Akoladeolu03)
* Sergio Romero - [Sromero1015](https://github.com/Sromero1015)