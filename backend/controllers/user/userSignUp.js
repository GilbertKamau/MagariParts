const userModel = require("../../models/userModel");
const bcrypt = require('bcryptjs');

async function userSignUpController(req, res) {
    try {
        const { email, password, name } = req.body;

        // Validate input
        if (!email || !password || !name) {
            return res.status(400).json({
                message: "All fields are required: email, password, and name.",
                error: true,
                success: false
            });
        }

        // Check if the user already exists
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User already exists.",
                error: true,
                success: false
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Invalid email format.",
                error: true,
                success: false
            });
        }

        // Validate password strength
        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters long.",
                error: true,
                success: false
            });
        }

        // Hash the password
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);


        const payload ={
            ...req.body,
            role : "GENERAL",
            password: hashPassword
        
        }

        // Create user payload
        const userData = new userModel({
            name,
            email,
            password: hashPassword
        });

        // Save the user to the database
        const savedUser = await userData.save();

        // Respond with the saved user data
        res.status(201).json({
            data: savedUser,
            success: true,
            error: false,
            message: "User created successfully!"
        });

    } catch (err) {
        res.status(500).json({
            message: err.message || "An error occurred while creating the user.",
            error: true,
            success: false
        });
    }
}

module.exports = userSignUpController;
