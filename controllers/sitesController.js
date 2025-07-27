const homePage = (req, res) => {
    res.render("home-page")
}
const loginPage = (req, res) => {
    res.render("login-page")
}
const registerPage = (req, res) => {
    res.render("registration-page")
}
module.exports = {homePage, loginPage, registerPage}