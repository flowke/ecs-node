const path = require('path');
const UserDao = require( path.resolve(GLOBALPATH.DAO_PATH, 'UserDao' ) );
const UserService = require(path.resolve(GLOBALPATH.SERVICE_PATH, 'UserService'));

module.exports = (req, res)=>{

    let {user_id, user_intro} = req.body;

    let userService = new UserService(req);
    let userDao = new UserDao();


    userDao.saveIntro(user_id, user_intro)
    .then(ret=>{
        let {user} = userService.getSessionInfo();
        user.user_intro = user_intro;
        userService.saveSessionInfo(user);
        res.json({
            code: 0,
            msg: 'OK'
        })
    })
    .catch(err=>{
        res.json({
            code: 1,
            msg: '失败',
        })
    });

}
