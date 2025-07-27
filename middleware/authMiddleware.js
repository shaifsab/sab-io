var jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next)=> {
    try {
        const accessToken = req.cookies
        
        if(accessToken.token){
            jwt.verify(accessToken.token, process.env.JWT_TOKEN, function (err, decoded) {

                if(err){
                    req.user = null
                    res.locals.loggedUser = null;
                    return next();
                }
                if (decoded.data) {
                    req.user = decoded.data
                    res.locals.loggedUser = decoded.data;
                    return next()
                }
            })
        }
        else {
            req.user = null
            res.locals.loggedUser = null
            next()
        }
    } catch (error) {
        res.status(500).send("server error!")
    }
}

module.exports = authMiddleware