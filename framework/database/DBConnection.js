const path = require('path');
const Sequelize = require('sequelize');
const {database, username, password, options} = require( path.resolve(GLOBALPATH.CONFIG_PATH, 'dbConfig') );


let sequelize = new Sequelize(database, username, password, options);

sequelize.authenticate()
.then(()=>{
    console.log('connection has been established successfully')
})
.catch( err =>{
    console.log(err)
} );

module.exports = sequelize;
