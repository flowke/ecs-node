const path = require('path');
const UserDao = require( path.resolve(GLOBALPATH.DAO_PATH, 'UserDao' ) );


module.exports = class{

    getPassw( username ){

        let userDao = new UserDao();

        return userDao.getPasswByUsername( username );

    }

    saveUser(username, passw){

        let userDao = new UserDao();

        return userDao.saveNameAndPassw(username, passw);

    }

}
