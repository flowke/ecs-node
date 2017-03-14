const path = require('path');

const user = require(path.resolve(GLOBALPATH.ENTITY_PATH, 'User.js' ));

module.exports = class{

    getPasswByUsername(username){

        let userPromise =  user.find( {

            attributes: ['user_passw' ],
            where: {
                user_name: username
            },
            // limit: 1
            // raw: true

        }).then( ret => {

            // 如果find没找到, ret会是null

            return ret.user_passw ? ret.user_passw : ret ;
        });

        return userPromise;
    }

    saveNameAndPassw( username, passw ){

        let promise = user.create({
            user_name: username,
            user_passw: passw
        });


        return promise;
    }

}
