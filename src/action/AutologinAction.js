const path = require('path');
const UserService = require(path.resolve(GLOBALPATH.SERVICE_PATH, 'UserService'));

module.exports = (req, res)=>{

    let userService = new UserService(req);

    let info = userService.getSessionInfo();

    // console.log(info);

    if(info){
        res.json({
            code: 0,
            msg: '自动登录成功',
            data: info.user
        })
    }else{
        res.json({
            code: 1,
            msg: '请重新登录'
        })
    }
}
