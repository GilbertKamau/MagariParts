const bcrypt = require('bcryptjs');
const userModel = require('../../models/userModel');
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email) {
            return res.status(400).json({ message: "Please provide email", error: true, success: false });
        }
        if (!password) {
            return res.status(400).json({ message: "Please provide password", error: true, success: false });
        }

        // Find the user in the database
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found", error: true, success: false });
        }

        // Compare passwords
        const checkPassword = await bcrypt.compare(password, user.password);
        console.log("checkPassword", checkPassword);

        if (checkPassword) {
            // Create JWT token
            const tokenData = {
                _id: user._id,
                email: user.email,
            };

            // Make sure `process.env.TOKEN_SECRET_KEY` is defined
            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: '8h' });

            const tokenOption = {
                httpOnly: true,
                secure: true, // Ensure HTTPS is used in production
            };

            // Set the cookie and send response
            res.cookie("token", token, tokenOption).status(200).json({
                message: "Login successfully",
                data: token,
                success: true,
                error: false,
            });

        } else {
            return res.status(400).json({ message: "Incorrect password", error: true, success: false });
        }

    } catch (err) {
        res.status(500).json({
            message: err.message || "An unexpected error occurred",
            error: true,
            success: false,
        });
    }
}

module.exports = userSignInController;
