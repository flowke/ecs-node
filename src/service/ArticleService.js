const path = require('path');
const ArticleDao = require( path.resolve(GLOBALPATH.DAO_PATH, 'ArticleDao' ) );


module.exports = class{
    constructor(req){
        this.req = req;
        this.articleDao = new ArticleDao();
    }

    getCollection(id){

        return this.articleDao.getCollection(id);
    }

    addCollection(data){

        return this.articleDao.addCollection(data);
    }

    addArticle(data){

        return this.articleDao.addArticle(data);
    }

    getPreviewByCollection(collection_id){
        return this.articleDao.getPreviewByCollection(collection_id);
    }

    getPreviewByUser(user_id){
        return this.articleDao.getPreviewByUser(user_id);
    }
    getPreviewAll(){
        return this.articleDao.getPreviewAll();
    }

}
