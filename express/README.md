# Express

http://expressjs.com/

Node.js において、便利にWebアプリケーションを開発するためのフレームワークの一つ


## expressインストール

```
$ npm install express-generator -g

$ express --version
4.13.1
```

### ヘルプ
```
$ express -h

  Usage: express [options] [dir]

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -e, --ejs           add ejs engine support (defaults to jade)
        --hbs           add handlebars engine support
    -H, --hogan         add hogan.js engine support
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory
```

### フォルダ構成

```
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade

7 directories, 9 files
```

### サーバ起動

```
$ npm start

# もしくは
$ node ./bin/www
```

http://127.0.0.1:3000/ へアクセス

## テンプレートエンジン

### Jade (default)

http://jade-lang.com/


## package.jsonについて

``npm install --save`` オプション

```
$ npm install less --save
```
```
$ npm uninstall less --save
```

``npm start``

```
$ vim package.json
  "start": "PORT=1234 node app"

$ npm start
```

## env

``process.env.PORT``

```
$ vim app.js
app.set('port', process.env.PORT || 3000);
```

#### STATIC ファイル

public/フォルダ以下に配置

(例 /public/index.html

``$ vim index.html``

#### CONFIG

//app.configure(function(){......

```
app.use(app.router);
```

//routes.....

```
app.get('/', routes.index);
```

//URL Routing.....
/routes/index.js

```
	exports.index = function(req, res){
	  res.render('index', { title: 'Express', name: "kamiyam" });
	};
```

//routes(URL) 変更

```
app.get('/index', routes.index);
```

// /views/index.jade

```
	p Hello #{name}
```

/routes/index.js

```
exports.hello = function(req, res){
  res.render('hello', { title: 'Express!!!!', name: "kamiyam!!!" });
};
```

//routes(URL) 追加

```
app.get('/hello', routes.hello);
```