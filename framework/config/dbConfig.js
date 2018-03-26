module.exports = {
    username: '', // 用户名
    password: '', // 用户密码
    database: '', // 数据库名称
    options: {
        dialect: 'mysql',
        host: '', // 数据库主机名
        port: 3306,
        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: true
        }
    }
}
