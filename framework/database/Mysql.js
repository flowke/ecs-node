const path = require('path');
const mysql = require('mysql');

module.exports = class Mysql{
    constructor(config){
        const conn = this.conn = mysql.createConnection(config);
        conn.connect( (err)=>{
            if(err){
                console.error('error connecting: ' + err.stack);
                return;
            }
        } );
    }
    /**
     * cb 会接收的参数 err, ret, field
     * @type {[type]}
     */
     
    query(sql, data=null, cb=()=>{}){
        this.conn.query(sql, data, (err,ret, fields)=>{
            cb(err, ret, fields);
        });
    }
    //得到插入的 id
    getInsertId(ret){
        return ret.insertId;
    }

    // 得到 insert update delete 语句影响的行数
    getAffectedRows(ret){
        return ret.affectedRows;
    }

    // 得到 update所跟新的行数
    getChangeRows(ret){
        return ret.changedRows;
    }

    // 得到 mysql 线程 id
    getThreadId(conn){
        return conn.threadId;
    }

}
