const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

productType: {
    type: String,
    required: true,
    default: []
},

quantity: {
    type: Number,
    required: true, 
    default: []

}
});


const User = mongoose.model('Product', productSchema);

module.exports = { Product }