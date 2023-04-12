const Login = require('../models/Login');
module.exports = {

    async index1(req, res){

        const logins = await Login.find(); // pulls posts in descending order - new posts at the top of the feed

        return res.json(logins)
    },

    async store1(req, res){



       const {author,password}=req.body;

        const login = await Login.create({ // await waits until finalized and put into database
            author,
            password,
        })

        req.io.emit('/login', login); // send a message with the post name with all data to io

        return res.json(login);
    }
};
