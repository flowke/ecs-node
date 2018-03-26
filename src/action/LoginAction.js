const path = require('path');

const UserService = require(path.resolve(GLOBALPATH.SERVICE_PATH, 'UserService'));
const UserDao = require(path.resolve(GLOBALPATH.DAO_PATH, 'UserDao'));
const errMsg = require(path.resolve(GLOBALPATH.UTIL_PATH,'errMsg'));

module.exports = (req, res) => {

    let {username, passw} = req.body;

    if(!username || !passw){
        res.json({
            code: 2,
            msg: '登录失败, 请确认的请求字段为: 用户名: username, 密码: passw',
        });
        return;
      }

    let userService = new UserService(req);

    userService.getPassw( username ).then( (
        ret
    ) =>{

        if( !ret ){
            res.json({
                code: 1,
                msg: '用户不存在'
            });
            return;
        }

        let {passwRet, id, user_intro} = ret;

        if( passwRet && passw === passwRet ){

            userService.saveSessionInfo({username,id, user_intro});

            res.json({
                code: 0,
                msg: '登录成功',
                data: userService.getSessionInfo().user
            });

        }else if(passwRet && passw !== ret){
            res.json({
                code: 2,
                msg: '密码错误'
            });
        }
    })
    .catch(err=>{

        // let msg = errMsg(err);

        console.log(err)

        // res.end();

        res.json({
            code: 3,
            msg: '内部错误'
        });
    });
}
