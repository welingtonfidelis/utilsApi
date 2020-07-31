const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

module.exports = {
    createToken() {
        return jwt.sign(
            {}, SECRET, {} //expiresIn
        );
    },

    verifyJWT(req, res, next) {
        let token = req.headers['authorization']
    
        if (!token) return res.status(401).send({ status: false, response: 'no token', code: 401 });
    
        jwt.verify(token, process.env.SECRET, function (err, decoded) {
            if (err) return res.status(401).send({ status: false, response: 'invalid token', code: 402 });
            // req.body.UserId = decoded.id;
            
            next();
        });
    }
}