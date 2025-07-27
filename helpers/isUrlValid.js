const isUrlValid = (mainUrl) => {
    return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(mainUrl)
}

module.exports = isUrlValid
