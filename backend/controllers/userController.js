import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import validator from 'validator';

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// user login route
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "user does not exists" })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "invalid password!" })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// user registration route
const registerUser = async (req, res) => {
    // res.json({msg:'register api working'})
    try {
        const { name, email, password } = req.body
        // if user exists...
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "user exists" })
        }

        // validation - email, password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "please enter a valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "please enter a strong password" })
        }
        // hash
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({ success: true, token })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// admin login route
const adminLogin = async (req, res) => {
    try {
        const {email, password} = req.body
        console.log("Admin login attempt: ", email, password);
        console.log("ENV Variables: ", process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD);

        if(email===process.env.ADMIN_EMAIL && password ===process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({success:true, token})
        } else {
            res.json({success:false, message:"invalid email/password"})
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { loginUser, registerUser, adminLogin }