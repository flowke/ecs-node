const path = require('path');
const ArticleService = require(path.resolve(GLOBALPATH.SERVICE_PATH, 'ArticleService'));
const errMsg = require(path.resolve(GLOBALPATH.UTIL_PATH,'errMsg'));

module.exports = (req, res)=>{

    let {
        collection_id,
        user_id,
    } = req.body;

    let articleService = new ArticleService(req);

    if(collection_id){
        articleService.getPreviewByCollection(collection_id)
        .then(ret=>{
            res.json({
                code: 0,
                msg: 'ok',
                data: ret
            })
        })
        .catch(err=>{
            let msg = errMsg(err);
            console.log(err);
            res.json({
                code: 1,
                msg: '不成功'
            });
        })
        ;
    }else if(user_id){
        articleService.getPreviewByUser(user_id)
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
    }else if(req.body){
        articleService.getPreviewAll()
        .then(ret=>{
            res.json({
                code: 0,
                msg: 'ok',
                data: ret
            });
        })
        .catch(err=>{

            let msg = errMsg(err);
            res.json({
                code: 1,
                msg: '不成功',
            });
        })
        ;
    }



}
