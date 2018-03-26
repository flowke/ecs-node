const path = require('path');
const Sequelize = require('sequelize');
const db = require(path.resolve(GLOBALPATH.DATABASE_PATH, 'DBConnection.js'));

let Collection = db.define(
    'collection',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        collection_name: {
            type: Sequelize.STRING,
            // unique: true,
            validate: {
                notEmpty: {
                    args: true,
                    msg: '名字不能为空'
                },
                len: {
                    args: [1,10],
                    msg: '长度应该在1-10'
                }
                // ,
                // is: {
                //     args: ["^[a-z0-9]+$",'i'],
                //     msg: '用户名必须是数字和字母'
                // }
            }
        }
        ,
        user_id: {
            type: Sequelize.INTEGER
        }
    },
    {
        validate:{

        }
    }
);

Collection.sync({force: false});

module.exports = Collection;
