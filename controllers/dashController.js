const UserSchema = require("../models/UserSchema");

const getDashboard = async (req, res) => {
    try {
        if(req.user){
            const userData = await UserSchema.findById(req.user.id).select("-password").populate("userUrls")

            res.render("dashboard", {
                userData: userData,
                loggedUser: req.user,
            });
        }
        else{
            res.redirect("/")
        }
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}

module.exports = getDashboard