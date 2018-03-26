const path = require('path');
const ArticleService = require(path.resolve(GLOBALPATH.SERVICE_PATH, 'ArticleService'));
const errMsg = require(path.resolve(GLOBALPATH.UTIL_PATH,'errMsg'));

module.exports = (req, res)=>{

    let {user_id} = req.body;

    let articleService = new ArticleService(req);

    articleService.getCollection(user_id)
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
