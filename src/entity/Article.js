const path = require('path');
const Sequelize = require('sequelize');
const db = require(path.resolve(GLOBALPATH.DATABASE_PATH, 'DBConnection.js'));
const User = require(path.resolve(GLOBALPATH.ENTITY_PATH, 'User.js' ));

let Article = db.define(
    'article',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        article_title: {
            type: Sequelize.STRING,
            // unique: true,
            // validate: {
            //     notEmpty: {
            //         args: true,
            //         msg: '名字不能为空'
            //     },
            //     len: {
            //         args: [1,10],
            //         msg: '长度应该在1-10'
            //     }
            //     // ,
            //     // is: {
            //     //     args: ["^[a-z0-9]+$",'i'],
            //     //     msg: '用户名必须是数字和字母'
            //     // }
            // }
        },
        article_content:{
            type: Sequelize.TEXT,
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        },
        // user_name: {
        //     type: Sequelize.STRING
        // },
        // avatar: {
        //     type: Sequelize.STRING
        // },
        collection_id: {
            type: Sequelize.INTEGER
        },
        collection_name: {
            type: Sequelize.STRING
        },
        viewer: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        liked: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        preview: {
            type: Sequelize.TEXT
        }
    },
    {
        validate:{

        }
    }
);
Article.belongsTo(User,{foreignKey:'user_id'});
Article.sync({force: false});

module.exports = Article;
