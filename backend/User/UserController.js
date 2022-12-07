import userSchema from '../../db/models/UserSchema';
import { Jwt } from 'jsonwebtoken';
// const sendMailUser = require('../transporter/sendMail');

const registeruser=async(req,res)=>{
    let first_name=req.body.Firstname;
    let last_name=req.body.Lastname;
    let email=req.body.email;
    let phone=req.body.phone;
    let address2=req.body.address2;
    let address1=req.body.address1;
    let state=req.body.state;
    let country=req.body.country;
    let pincode=req.body.pincode;
    let password=req.body.password;
    let type1=req.body.type;
    let data={address1,address2,state,country,pincode};
    // const salt = bcrypt.genSaltSync(10);
    // password = bcrypt.hashSync(req.body.password, salt);
    // password=bcrypt.hashSync(req.body.password,10);
    let data1={first_name:first_name,last_name:last_name,email:email,phone:phone,address:data
        ,password:password,typeofuser:type1}
    try{
        let response=await userSchema.findOne({email:email});
        if(response){
            res.json({status_code:401,msg:"Email already exists"})
        }else{
        const user_data=await new userSchema(data1);
        await user_data.save();
            // sendMailUser();
        res.json({status_code: 201, msg: 'Registered successfully'})
        }
    }
    catch(e){
        console.log(e.message)
        res.json({status_code:400,msg:"Please eneter the feilds correctly"})
    }

}
const loginUser=async(req, res)=>{
    try{
        const userData = await userSchema.findOne({email: req.body.email});
        if (userData) {
            if(userData.password)  {
                const payload = { aid: userData.email };
                const token = Jwt.sign(payload, process.env.jwtSecret,{expiresIn:3600000})
                res.status(201).json({msg: 'Logged in succcessfully', token});
            }
            else {
                res.status(201).send('Wrong password');
            }
        }
        else {
            res.status(401).send("Email doesn't exists");
        }
    } catch (e) {
        res.status(401).send(e.message);
    }
}
module.exports={registeruser,loginUser};