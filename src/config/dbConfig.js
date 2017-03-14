module.exports = {
    username: 'root',
    password: 'hh',
    database: 'student_exam',
    options: {
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: true
        }
    }
}
