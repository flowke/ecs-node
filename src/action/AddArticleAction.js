const path = require('path');
const ArticleService = require(path.resolve(GLOBALPATH.SERVICE_PATH, 'ArticleService'));
const UserService = require(path.resolve(GLOBALPATH.SERVICE_PATH, 'UserService'));
const errMsg = require(path.resolve(GLOBALPATH.UTIL_PATH,'errMsg'));

module.exports = (req, res)=>{
    let {
        article_title,
        article_content,
        user_id,
        user_name,
        collection_id,
        collection_name
    } = req.body;

    let articleService = new ArticleService(req);
    let userService = new UserService(req);

    let preview = article_content.slice(0,120) + '...';
    let avatar = userService.getSessionInfo().user.avatar;

    articleService.addArticle({
        article_title,
        article_content,
        user_id,
        user_name,
        collection_id,
        collection_name,
        preview,
        avatar
    })
    .then(ret=>{
        res.json({
            code: 0,
            msg: 'ok'
        })
    })
    .catch(err=>{
        res.json({
            code: 1,
            msg: '不成功'
        });
    })

};
