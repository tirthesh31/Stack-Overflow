import  jwt  from "jsonwebtoken"
import bcrypt from "bcryptjs"
import users from '../models/auth.js'

export const signup = async (req , res) => {
    const { name, email, password} = req.body;
    try{
        const extinguser = await users.findOne({ email });
        if(extinguser){
            return res.status(404).json({message:"User Already Exists."})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await users.create({ name, email, password: hashedPassword})
        const token = jwt.sign({ email: newUser.email,id:newUser._id},process.env.JWT_SECRET,{expiresIn:'1h'})
        res.status(200).json({result: newUser, token})
    }catch(error){
        res.status(500).json("something went wrong...")
    }
}

export const login = async (req , res) => {
    const { email, password} = req.body;
    try{
        const extinguser = await users.findOne({ email });
        if(!extinguser){
            return res.status(404).json({message:"User don't Exists."})
        }

        const isPasswordCrt = await bcrypt.compare(password, extinguser.password)
        if(!isPasswordCrt)
        {
            res.status(500).json("Invalid credential")
        }
        const token = jwt.sign({ email: extinguser.email,id:extinguser._id},process.env.JWT_SECRET,{expiresIn:'1h'})
        res.status(200).json({result: extinguser, token})
    }catch(error){
        res.status(500).json("something went wrong...")
    }
}