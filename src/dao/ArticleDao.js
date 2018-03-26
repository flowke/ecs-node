const path = require('path');
const Sequelize = require('sequelize');
const article = require(path.resolve(GLOBALPATH.ENTITY_PATH, 'Article.js' ));
const collection = require(path.resolve(GLOBALPATH.ENTITY_PATH, 'Collection.js' ));
const user = require(path.resolve(GLOBALPATH.ENTITY_PATH, 'User.js' ));

module.exports = class{

    getCollection(id){

        return collection.findAll({
            attributes: [ 'id' ,'collection_name' ],
            where: {
                user_id: id
            },
        });
    }

    addCollection({user_id, name}){
        return collection.create({
            collection_name: name,
            user_id: user_id
        });
    }

    addArticle(data){
        return article.create(data);
    }

    getPreviewByCollection(collection_id){
        return article.findAll({
            attributes: [
                'id' ,
                'preview',
                'article_title',
                'createdAt',
                'liked',
                'user_id',
                'viewer'
            ],
            where: {
                collection_id
            },
            include: {
                model: user,
                attributes:[
                    'user_name',
                    'user_intro',
                    'avatar',
                    'id'
                ]
            }
        });
    }

    getPreviewByUser(user_id){
        return article.findAll({
            attributes: [
                'id' ,
                'preview',
                'article_title',
                'createdAt',
                'collection_id',
                'collection_name',
                'liked',
                'user_id',
                'viewer'
            ],
            where: {
                user_id
            },
            include: {
                model: user,
                attributes:[
                    'user_name',
                    'user_intro',
                    'avatar',
                    'id'
                ]
            }
        })
    }

    getPreviewAll(){
        return article.findAll({
            attributes: [
                'id' ,
                'preview',
                'article_title',
                'createdAt',
                'collection_id',
                'collection_name',
                'liked',
                'user_id',
                'viewer'
            ],
            include: {
                model: user,
                attributes:[
                    'user_name',
                    'user_intro',
                    'avatar',
                    'id'
                ]
            }
        })
    }
};
