const path = require('path');
const UserDao = require( path.resolve(GLOBALPATH.DAO_PATH, 'UserDao' ) );


module.exports = class{

    constructor(req){
        this.req = req;
    }

    getPassw( username ){

        let userDao = new UserDao();

        return userDao.getPasswByUsername( username );

    }

    saveUser(username, passw, avatar){

        let userDao = new UserDao();

        return userDao.saveNameAndPassw(username, passw, avatar)
        .then(ret=>{
            return {id: ret.id, username:ret.user_name, user_intro: ret.user_intro}
        });

    }

    getSessionInfo(){

        return this.req.session.info;
    }

    saveSessionInfo(user){
        user.avatar = '/initPic/initAvatar.jpg';
        return this.req.session.info= {
            user
        }
    }

    clearSession(){
        this.req.session.info = null;
    }

}
