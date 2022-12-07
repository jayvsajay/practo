import connection from '../../../db/Connection'
import loginUserService from '../../../backend/User/UserController'

export default async function userLogin(req, res, next) {
    await connection();
    if(req.method === 'POST') {
        try{
            await loginUserService.loginUser(req, res);
        } catch (e) {
            console.log(e.message);
        }
    }
}