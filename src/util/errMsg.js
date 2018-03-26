
module.exports = (err)=>{

    let msg = '';

    switch (err.name) {
        case 'SequelizeUniqueConstraintError':
            msg = '用户名已存在';
            break;

        default:
            msg = err ;
    };

    return msg;
}
