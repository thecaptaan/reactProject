const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    businessName: {
        type: String,
        required: [true, 'Business name is required'],
        trim: true,
    },

}, {
    timestamps: true,
})

module.exports = mongoose.model('business', businessSchema)