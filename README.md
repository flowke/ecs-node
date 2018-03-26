# 简书案例的后端服务接口

## 如何运行本案例

#### 1. 你需要安装 `mysql` 数据库.

通过 [`./framework/config/dbConfig.js`](./framework/config/dbConfig.js) 这个文件进行相应配置:

```js
module.exports = {
    username: '', // 用户名
    password: '', // 用户密码
    database: '', // 数据库名称
    options: {
        dialect: 'mysql',
        host: '', // 数据库主机名
        port: 3306,
        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: true
        }
    }
}
```

在相应地方填写你数据库的信息, 便可以连接你的数据库.

#### 2. 安装项目依赖

在命令行使用 `yarn` 或 `npm` 使用如下命令来安装项目依赖:

```
npm i

// 或

yarn
```

#### 3. 运行项目

```
node index.js
```

`index.js`  是入口文件. 使用 `node` 运行起项目后, 便会在本机的 `'localhost:8082'` 运行起业务服务器.

你可以到 `./framework/core/initiate.js` 修改服务器的端口号;


## 接口列表

> 注意, 所有的请求方法都是: POST

#### 1. 用户注册

接口详情:

```js
// 请求地址
"/register"

// 请求参数
{
  username: "" // 用户名
  passw: "" // 密码
  cfPassw: "" // 确认密码
}

// 返回的 JSON 示例

// 成功示例
{
  "code": 0,
  "msg": "注册成功",
  "data": {
  	"username": "f", // 用户名
  	"id": 1, // 用户 id
  	"user_intro": "", // 用户签名
  	"avatar": "/initPic/initAvatar.jpg" // 头像
  }
}
```
#### 2. 用户登录

接口详情:
```js
// 请求地址
"/login"

// 请求参数
{
  username: "" // 用户名
  passw: "" // 密码
}

// 返回的 JSON 示例

// 成功示例
{
  "code": 0,
  "msg": "登录成功",
  "data": {
  	"username": "f", // 用户名
  	"id": 1, // 用户 id
  	"user_intro": "", // 用户签名
  	"avatar": "/initPic/initAvatar.jpg" // 头像
  }
}
```

#### 3. 自动登录

接口详情:
```js
// 请求地址
"/autologin"

// 请求参数
无

// 返回的 JSON 示例

// 成功示例
{
  "code": 0,
  "msg": "自动登录成功",
  "data": {
  	"username": "f", // 用户名
  	"id": 1, // 用户 id
  	"user_intro": "", // 用户签名
  	"avatar": "/initPic/initAvatar.jpg" // 头像
  }
}
```

#### 4. 获取文章摘要列表

接口详情:
```js
// 请求地址
"/getPreview"

// 请求参数:
{
  collection_id: "", // 文集 id
  user_id: ""  // 用户 id
}


// 返回成功的 JSON 示例
{

}

// 请求参数
{
  collection_id: "", // 文集 id
  user_id: ""  // 用户 id
}


```

#### 5. 获取作者信息

接口详情:
```js
// 请求地址
"/getAuthor"

// 请求参数
{
  collection_id: "", // 文集 id
  user_id: ""  // 用户 id
}

// 返回的 JSON 示例

// 成功示例
{
  'id' : "",  // 用户id
  'user_name': "",  //用户名
  'avatar': "",  // 用户头像
  'user_intro': ""  // 用户简介
}
```
