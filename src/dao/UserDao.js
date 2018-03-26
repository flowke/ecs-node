const path = require('path');

const user = require(path.resolve(GLOBALPATH.ENTITY_PATH, 'User.js' ));

module.exports = class{

    getPasswByUsername(username){

        let userPromise =  user.find( {

            attributes: [ 'id' ,'user_passw', 'user_intro' ],
            where: {
                user_name: username
            },
            // limit: 1
            // raw: true

        }).then( ret => {
            // 如果find没找到, ret会是null
            if(ret){
                let {user_passw: passwRet, id, user_intro} = ret;
                return {passwRet, id, user_intro};
            };

            return null;

        });

        return userPromise;
    }

    getAuthor(){
        return user.findAll({
            attributes: [
                'id', 'user_name', 'avatar', 'user_intro'
            ]
        });
    }

    saveNameAndPassw( username, passw, avatar ){

        let promise = user.create({
            user_name: username,
            user_passw: passw,
            avatar
        });


        return promise;
    }

    saveIntro(user_id, user_intro){
        return user.update({user_intro},{
            where: {
                id: user_id
            }
        });
    }

}
