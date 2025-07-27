const validateEmail = (mail) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail);

module.exports = validateEmail;
