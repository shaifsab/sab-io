const User = require('../models/UserSchema')
const bcrypt = require("bcryptjs");
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const validateEmail = require('../helpers/validateEmail')
const validatePassword = require('../helpers/validatePassword')



// registration session 
const registerUser = async (req , res)=> {
    const {fullName, email, password} = req.body

    
    
    try {
        if(!fullName) return res.render("registration-page",{nameError: 'Name is require'})

        if(!email) return res.render("registration-page",{emailError: 'Email is require'})
        
        if(!validateEmail(email)) return res.render("registration-page",{emailError: 'Email is invalid'})
    
        if(!password) return res.render("registration-page",{passwordError: 'PassWord is require'})

        if(validatePassword(password)) return res.render("registration-page",{passwordError: validatePassword(password)})

        const existingUser = await User.findOne({email})
        if(existingUser) return res.render("registration-page",{error: 'User already exist'})

        // password encryption 
        bcrypt.hash(password, saltRounds, async function(err, hash) {
           const user = new User({
               fullName, email, password: hash
           })
           await user.save()
           res.redirect("/login")
        });

    } catch (error) {
        console.error(error)
        res.render("registration-page",{error: 'server error from register...'})
    }

}


// login session 
const loginUser = async (req, res) => {
    const {email, password}  = req.body

    try {
        if(!email) return res.render("login-page",{emailError: 'Email is require'})

        if(!validateEmail(email)) return res.render("login-page",{emailError: 'Email is invalid'})

        if(!password) return res.render("login-page",{passwordError: 'PassWord is require'})


        const existingUser = await User.findOne({email})
        if(!existingUser) return res.render("login-page",{error: 'User not found'})
        

        // password compare
        const matchPassword = await bcrypt.compare(password, existingUser.password);

        if(!matchPassword) return res.render("login-page",{passwordError: 'Password is invalid'})

        // jwt token conversion 
        const token = jwt.sign({
            data: {
                id: existingUser._id,
                email: existingUser.email
            }
          }, process.env.JWT_TOKEN , { expiresIn: '2h' });

        res.status(200).cookie('token', token).redirect("/")

    } catch (error) {
        console.error(error)
        res.status(500).render("login-page",{error: 'server error from login...'})
    }
}

// logout session 
const logoutUser = async (req, res)=> {
    await res.clearCookie("token").redirect("/")
}


module.exports = {registerUser, loginUser, logoutUser}