const path = require('path');
const Sequelize = require('sequelize');
const db = require(path.resolve(GLOBALPATH.DATABASE_PATH, 'DBConnection.js'));

let User = db.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
                notEmpty: {
                    args: true,
                    msg: '用户名不能为空'
                },
                len: {
                    args: [1,6],
                    msg: '长度应该在1-6'
                },
                is: {
                    args: ["^[a-z0-9]+$",'i'],
                    msg: '用户名必须是数字和字母'
                }
            }
        },
        user_intro: {
            type: Sequelize.STRING,
            defaultValue: ''
        },
        avatar: {
            type: Sequelize.STRING
        },
        user_passw: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: '密码'
                },
                len: {
                    args: [1,10],
                    msg: '长度应该在1-10'
                },
                is: {
                    args: ["^[a-z0-9_]+$",'i'],
                    msg: '密码必须是数字,字母或 _ '
                }
            }
        }
    },
    {
        validate:{

        }
    }
);

User.sync({force: false});

module.exports = User;
