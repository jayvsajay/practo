import connection from '../../../db/Connection';
import userRegisterService from '../../../backend/User/UserController'

export default async function userRegister(req, res, next) {
   
    
    if(req.method === 'POST') {
        try{
             connection();
           await userRegisterService.registeruser(req, res);
        } catch (e) {
            console.log(e);
        }
    }
}