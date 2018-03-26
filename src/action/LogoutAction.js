const path = require('path');
const UserService = require(path.resolve(GLOBALPATH.SERVICE_PATH, 'UserService'));
const errMsg = require(path.resolve(GLOBALPATH.UTIL_PATH,'errMsg'));

module.exports = (req, res)=>{

    let {username, passw} = req.body;

    if(!username || !passw){
      res.json({
          code: 2,
          msg: '注销失败, 请确认的请求字段为: 用户名: username, 密码: passw',
      });
      return;
    }

    let userService = new UserService(req);

    userService.clearSession();

    res.json({
        code: 0,
        msg: 'Done'
    })

}
