const bcrypt = require('bcryptjs');

const setPassword = async (password) => {
    try {
        const hash = await bcrypt.hash(password,10);
        return hash;
    } catch (error) {
        throw error;
    }
};

const checkPassword = async (password,hash) => {
    try {
        const valid = await bcrypt.compare(password,hash);
        return valid;
    } catch (error) {
        return error;
    }
}

module.exports = {
    setPassword,
    checkPassword
}