const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const users = require("../models/user");
const { createAccountValidate, loginValidate } = require("../utils/validate/authValidate");
exports.createUserAccount = async (req, res) => {
    const result = createAccountValidate(req.body);
    if (!result.status) {
        return res.status(400).json({
            success: false,
            data: null,
            message: result.message,
        })
    } else {
        try {
            users.findOne({ email: result.data.email }).then(async (doc) => {
                if (doc) {
                    return res.status(400).json({
                        success: false,
                        data: null,
                        message: 'Email already exists',
                    })
                } else {
                    bcrypt.hash(result.data.password, 10, async (err, hash) => {
                        if (err) {
                            return res.status(500).json({
                                success: false,
                                data: null,
                                message: 'Internal server error',
                            })
                        } else {
                            result.data.password = hash;
                            const user = new users(result.data);
                            await user.save();
                            return res.status(201).json({
                                success: true,
                                data: user,
                                message: 'User created successfully',
                            })
                        }
                    })
                }
            }).catch((error) => {
                console.log(error);
                return res.status(500).json({
                    success: false,
                    data: null,
                    message: 'Internal server error',
                })
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                data: null,
                message: 'Internal server error',
            })
        }
    }
}

exports.loginUserAccount = async (req, res) => {
    const result = loginValidate(req.body);

    if (!result.status) {
        return res.status(400).json({
            success: false,
            data: null,
            message: result.message,
        })
    } else {
        try {
            users.findOne({ email: result.data.email }).then(async (doc) => {
                if (!doc) {
                    return res.status(404).json({
                        success: false,
                        data: null,
                        message: 'User not found',
                    })
                } else {
                    bcrypt.compare(result.data.password, doc.password, (err, isMatch) => {
                        if (err) {
                            return res.status(500).json({
                                success: false,
                                data: null,
                                message: 'Internal server error',
                            })
                        }
                        console.log(isMatch);
                        if (!isMatch) {
                            return res.status(400).json({
                                success: false,
                                data: null,
                                message: 'Invalid credentials',
                            })
                        }
                        if (isMatch) {
                            const token = jwt.sign({ email: doc.email, id: doc._id }, process.env.GET_JWT_SECRET, { expiresIn: '5days', issuer: "incubora.com" });
                            return res.status(200).json({
                                success: true,
                                token: token,
                                message: 'User logged in successfully',
                            })
                        }
                    })
                }
            }).catch((error) => {
                console.log(error);
                return res.status(500).json({
                    success: false,
                    data: null,
                    message: 'Internal server error',
                })
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                data: null,
                message: 'Internal server error',
            })
        }
    }
}

exports.changeUserPassword = async (req, res) => {
    users.findOne({ email: req.user.email }).then(async (doc) => {
        if (!doc) {
            return res.status(404).json({
                success: false,
                data: null,
                message: 'User not found',
            })
        } else {
            bcrypt.compare(req.body.oldPassword, doc.password, async (err, isMatch) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        data: null,
                        message: 'Internal server error',
                    })
                }
                if (!isMatch) {
                    return res.status(400).json({
                        success: false,
                        data: null,
                        message: 'Invalid credentials',
                    })
                }
                if (isMatch) {
                    if (req.body.newPassword === req.body.oldPassword) {
                        return res.status(400).json({
                            success: false,
                            data: null,
                            message: 'New password cannot be the same as old password',
                        })
                    }
                    if (req.body.newPassword !== req.body.confirmPassword) {
                        return res.status(400).json({
                            success: false,
                            data: null,
                            message: 'Passwords do not match',
                        })
                    } else {
                        bcrypt.hash(req.body.newPassword, 10, async (err, hash) => {
                            if (err) {
                                return res.status(500).json({
                                    success: false,
                                    data: null,
                                    message: 'Internal server error',
                                })
                            } else {
                                doc.password = hash;
                                await doc.save();
                                return res.status(200).json({
                                    success: true,
                                    data: null,
                                    message: 'Password changed successfully',
                                })
                            }
                        })
                    }
                }
            })
        }
    }).catch((error) => {
        console.log(error);
        return res.status(500).json({
            success: false,
            data: null,
            message: 'Internal server error',
        })
    })
}