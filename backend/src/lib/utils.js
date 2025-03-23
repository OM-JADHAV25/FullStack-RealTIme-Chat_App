import jwt from 'jsonwebtoken';

export const generateToken = (userId, res) => {
    
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{ 
        expiresIn:"7d"
    });

    res.cookie("jwt",token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // milliseconds
        httpOnly: true, // cookie cannot be accessed by client side javascript (prevent XSS attacks cross-sitting scripting)
        sameSite: "strict",  // cookie is sent only to the same site as the one that originated the request (prevents CSRF attacks cross-site request forgery)
        secure: process.env.NODE_ENV !== "development"
    });

    return token;
}