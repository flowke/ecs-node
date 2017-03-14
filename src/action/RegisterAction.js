const path = require('path');
const UserService = require(path.resolve(GLOBALPATH.SERVICE_PATH, 'UserService'));
const errMsg = require(path.resolve(GLOBALPATH.UTIL_PATH,'errMsg'));

module.exports = (req, res)=>{

    let {username, passw} = req.body;

    let userService = new UserService();

    userService.saveUser( username, passw )
    .then( (ret)=>{
        res.json({
            code: 0,
            msg: '注册成功'
        });
    } )
    .catch(err=>{
        let msg = errMsg(err);
        res.json({
            code: 1,
            msg
        });
    })

}
