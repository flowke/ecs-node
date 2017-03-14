const path = require('path');

const UserService = require(path.resolve(GLOBALPATH.SERVICE_PATH, 'UserService'));
const UserDao = require(path.resolve(GLOBALPATH.DAO_PATH, 'UserDao'));


module.exports = (req, res) => {

    let {username, passw} = req.body;


    let userService = new UserService();

    userService.getPassw( username ).then( ( passwRet ) =>{

        if( passwRet && passw === passwRet ){
            res.json({
                code: 0,
                msg: '登录成功'
            });

        }

        if(passwRet && passw !== passwRet){
            res.json({
                code: 1,
                msg: '密码错误'
            })
        }

        if( !passwRet ){
            res.json({
                code: 1,
                msg: '用户不存在'
            })
        }
    })
    .catch(err=>{
        res.end('内部错误');
    });
}
