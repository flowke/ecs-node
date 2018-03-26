const path = require('path');
const UserDao = require( path.resolve(GLOBALPATH.DAO_PATH, 'UserDao' ) );

module.exports = (req, res)=>{

    // let {id} = req.body;

    let userDao = new UserDao(req);

    userDao.getAuthor()
    .then(ret=>{
        res.json({
            code: 0,
            msg: 'ok',
            data: ret
        })
    })
    .catch(err=>{
        let msg = errMsg(err);
        res.json({
            code: 1,
            msg: '不成功'
        });
    })
    ;

}
