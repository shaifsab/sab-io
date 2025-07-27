const generateUrl = () => {
    const characters = "mnbvcxzlkjhgfdsapoiuytrewq"
    let shortUrl = ""

    // Generate 6 random characters for the short URL
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        shortUrl += characters[randomIndex]
    }

    return shortUrl
}

module.exports = generateUrl
