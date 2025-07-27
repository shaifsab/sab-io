const generateUrl = require("../helpers/generateUrl")
const isUrlValid = require("../helpers/isUrlValid")
const UrlSchema = require("../models/UrlSchema")
const UserSchema = require("../models/UserSchema")


// url generate
const urlGenerate  = async (req, res) => {
    try {

        const {mainUrl} = req.body 


        // url validate
        if(!mainUrl){
            return res.render("home-page", {message: "Url is Required!"})

        }

        if(!isUrlValid(mainUrl)){
            return res.render("home-page", {message: "Url is invalid!"})
        }

        // short url generate
        const shortUrl = generateUrl(mainUrl)


        // if user exist then run
        if(req.user){

            // update shortUrl if created then store in existing Main URL 
            const existMainUrl = await UrlSchema.findOneAndUpdate({mainUrl}, {$set: {shortUrl: shortUrl, isAuth: true}}, {new: true})

            if(existMainUrl){
                await UserSchema.findByIdAndUpdate(req.user.id, {$addToSet: {userUrls: existMainUrl._id}})

                return res.render("home-page",{
                    message: "Short Url Updated",
                    mainUrl: existMainUrl.mainUrl,
                    shortUrl: `${process.env.BASE_URL}/${existMainUrl.shortUrl}`,
                    loggedUser: req.user
                })             
            }

            // create short url if its not created 
            const newShortUrl = new UrlSchema({
                mainUrl: mainUrl,
                shortUrl: shortUrl,
                isAuth: true
            })

            await newShortUrl.save()

            await UserSchema.findByIdAndUpdate(req.user.id, {$push: {userUrls: newShortUrl._id}})

            return res.render("home-page",{
                message: "Short Url Created Successfully",
                mainUrl: newShortUrl.mainUrl,
                shortUrl: `${process.env.BASE_URL}/${newShortUrl.shortUrl}`,
                loggedUser: req.user
            })
        }
         // otherwise go to public 
        else {
            // update shortUrl if created then store in existing Main URL 
            const existMainUrl = await UrlSchema.findOneAndUpdate({mainUrl}, {$set: {shortUrl: shortUrl}}, {new: true})

            if(existMainUrl){

                return res.render("home-page",{
                    message: "Short Url Updated",
                    mainUrl: existMainUrl.mainUrl,
                    shortUrl: `${process.env.BASE_URL}/${existMainUrl.shortUrl}`
                })             
            }

            // create short url if its not created 
            const newShortUrl = new UrlSchema({
                mainUrl: mainUrl,
                shortUrl: shortUrl
            })

            await newShortUrl.save()

            return res.render("home-page",{
                message: "Short Url Created Successfully",
                mainUrl: newShortUrl.mainUrl,
                shortUrl: `${process.env.BASE_URL}/${newShortUrl.shortUrl}`
            })

        }

    } catch (error) {
        res.status(500).send({error: 'server error from url generating...'})
    }

}

// url render 
const urlRender = async (req, res) => {
    try {
        const {shortUrl} = req.params

        const shortUrlRecord = await UrlSchema.findOne({shortUrl})

        if(!shortUrlRecord){
            return res.status(404).render('error-page', { message: 'Short URL not available' });
        }

        // if url authentic then run 
        if(shortUrlRecord.isAuth){
            const urlAuth = await UrlSchema.findByIdAndUpdate(shortUrlRecord._id, {$push: {visitedHistory: {clicked: Date.now()}}}, {new: true})
            
            return res.redirect(urlAuth.mainUrl)
        }

        res.redirect(shortUrlRecord.mainUrl)

    } catch (error) {
        res.status(500).render('error-page', { message: 'Server error from URL rendering...' });
    }

}

module.exports = {urlGenerate, urlRender}