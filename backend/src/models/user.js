const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
    },
    middleName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
    },
    dob: {
        type: Date,
        required: [true, 'Date of birth'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true,
    },
    mobile: {
        type: String,
    },
    profileImage: {
        type: String,
        default: 'avatar.png',
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('users', userSchema)