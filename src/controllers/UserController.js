const User = require('../models/User');

module.exports = {
    index: async(req, res)=>{
        const user = await User.findAll();
        return res.json(user);
    }
}