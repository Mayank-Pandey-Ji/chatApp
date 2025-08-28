import jwt from "jsonwebtoken";

// function to generate a token for a user 

export const generateToken = (userId) => {
    const token = jwt.sign({userId} , process.env.JWT_SEC);
    return token;
}