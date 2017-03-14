const path = require('path');
const Mysql = require(path.resolve(GLOBALPATH.DATABASE_PATH,'Mysql'));
let config = require(path.resolve(GLOBALPATH.CONFIG_PATH,'config.js'));

const db = new Mysql(config.db);

module.exports = class Model{
    constructor(table){
        this.table = table;
        this.result = null;
    }

    query(sql, data, cb){
        db.query(sql,data, cb);
    }

    insert(sql, data, resolve){

        this.query(sql,data,(err, ret, fields)=>{
            resolve(err,ret,fields);
        });
    }

    getAll(sql, data, resolve){
        this.query(sql,data,(err, ret, fields)=>{

            resolve({err,ret,fields});

        });
    }

    delete(sql,data,resolve){
        this.query(sql,data,(err, ret, fields)=>{
            resolve(err,ret,fields);
        });
    }

    update(sql,data, resolve){
        this.query(sql,data,(err, ret, fields)=>{
            resolve(err,ret,fields);
        });
    }

}
