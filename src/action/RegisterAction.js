const path = require('path');
const UserService = require(path.resolve(GLOBALPATH.SERVICE_PATH, 'UserService'));
const errMsg = require(path.resolve(GLOBALPATH.UTIL_PATH,'errMsg'));

module.exports = (req, res)=>{

    let {username, passw} = req.body;

    if(!username || !passw){
      res.json({
          code: 2,
          msg: '注册失败, 请确认的请求字段为: 用户名: username, 密码: passw',
      });
      return;
    }

    let userService = new UserService(req);
    let avatar = '/initPic/initAvatar.jpg';
    userService.saveUser( username, passw, avatar )
    .then( (user) => {
        userService.saveSessionInfo( user );

        res.json({
            code: 0,
            msg: '注册成功',
            data: userService.getSessionInfo().user
        });
    })
    .catch(err=>{
        let msg = errMsg(err);
        res.json({
            code: 1,
            msg
        });
    })

}
