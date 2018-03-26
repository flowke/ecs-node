const express = require('express');
const path = require('path');
const cors = require('cors');
const S = require('string');
const session = require('express-session');
const bodyParser = require('body-parser');

let config = require(path.resolve(process.cwd(), 'framework/config/config'));


let app = express();
app.listen(8082);

module.exports = class Initiate {
    constructor() {

    }

    static run(){
        this.defineGlobalVar();
        this.initMiddleware();
        this.routerDispatch();
    }

    static initMiddleware(){
        app.use(express.static(GLOBALPATH.PUBLIC_PATH));
        // 加载 bodyparser, 处理 post 数据
        app.use(bodyParser.urlencoded({extended: true}));
        // 跨域访问
        app.use(cors({
            origin: true,
            credentials: true
        }));

        // about handlesession
        app.use(session({
            secret: "data_for_student",
            // proxy: true,
            resave: true,
            saveUninitialized: true,
            cookie: {  maxAge: 60*60 }
        }));
    }

    static routerDispatch(){
        app.get('*',(req, res)=>{

            res.send('本服务器只用于内部测试');
            return;

        } );

        app.post('/:a', (req, res)=>{
            let { a } = req.params;

            if(!a){
                res.end('参数错误');
                return;
            }

             a = a.charAt(0).toUpperCase() + a.slice(1)

            let actionPath = path.resolve(GLOBALPATH.ACTION_PATH, a + 'Action.js');

            // res.send(controllerPath)

            let action =require(actionPath);

            // try{
            //     let action =require(actionPath);
            // }catch(e){
            //     // res.send(e);
            //     res.end('api');
            //     return;
            // }

            action.apply(null, [req,res]);
        } );
    }

    static defineGlobalVar(){
        Object.assign(global, {
            GLOBALPATH: config.path
        });
    }


}
