Node.js超初心者勉強会
====================

## Node.js

http://nodejs.org/

## Preparation

### amazon ec2

```
$ sudo yum install gcc-c++ zlib zlib-devel tk-devel tcl-devel sqlite-devel ncurses-devel gdbm-devel readline-devel bzip2-devel db4-devel openssl-devel
```

### Mac OS X Lion

Xcodeをインストール
Xcode->Preferences->Downloads、Command Line Tools をインストール

```
$ sudo xcode-select -switch /path/to/Xcode.app/Contents/Developer
```

Via. http://d.hatena.ne.jp/replication/20110726/1311687382

## nodebrew

https://github.com/hokaccha/nodebrew

```
	$ curl https://raw.github.com/hokaccha/nodebrew/master/nodebrew | perl - setup
	$ cd
	$ vim .bashrc
```

```
	export PATH=$HOME/.nodebrew/current/bin:$PATH
```

```
	$ source ~/.bashrc
```

```
	$ nodebrew -h
	nodebrew 0.7.2

	Usage:
			nodebrew help                         Show this message
			nodebrew install <version>            Download and install a <version> (compile from source)
			nodebrew install-binary <version>     Download and install a <version> (binary file)
			nodebrew uninstall <version>          Uninstall a version
			nodebrew use <version>                Use <version>
			nodebrew list                         List installed versions
			nodebrew ls                           Alias for `list`
			nodebrew ls-remote                    List remote versions
			nodebrew ls-all                       List remote and installed versions
			nodebrew alias <key> <version>        Set alias to version
			nodebrew unalias <key>                Remove alias
			nodebrew clean <version> | all        Remove source file
			nodebrew selfupdate                   Update nodebrew
			nodebrew migrate-package <version>    Install global NPM packages contained in <version> to current version
			nodebrew exec <version> -- <command>  Execute <command> specified <version>

	Example:
			nodebrew install v0.10.22     Install a specific version number
			nodebrew use v0.10.22         Use a specific version number
```

## Nodeインストール

```
	$ nodebrew install v0.10.25
	$ nodebrew use v0.10.25

	$ nodebrew alias default v0.10.25

	$ node -v
	v0.10.25


	$ npm -v
	1.3.25
```

if when node install failed, Install the "Command Line Tools for Xcode"
Via. http://d.hatena.ne.jp/replication/20110726/1311687382

## Node Web Application First Contact

```
$ vim app.js
```

```
	var http = require('http');
	http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  res.end('Hello World\n');
	}).listen(1337, "127.0.0.1");
	console.log('Server running at http://127.0.0.1:1337/');
```

## DB

+ MySQL
http://www.mysql.com/
+ MongoDB
http://www.mongodb.org/
+ Redis
http://redis.io/

## express

http://expressjs.com/

### express (日本語訳)

http://hideyukisaito.github.com/expressjs-doc_ja/

Node.js フレームワークの一つ

### expressインストール

	$ npm install -g express

	$ express --version
	3.4.8

ヘルプ
---

```
% express -help

  Usage: express [options] [dir]

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -s, --sessions      add session support
    -e, --ejs           add ejs engine support (defaults to jade)
    -J, --jshtml        add jshtml engine support (defaults to jade)
    -H, --hogan         add hogan.js engine support
    -c, --css <engine>  add stylesheet <engine> support (less|stylus) (defaults to plain css)
    -f, --force         force on non-empty directory
```

ファイル生成
---

```
	$ express -e -s express_app

		create : express_app
 		create : express_app/package.json
 		create : express_app/app.js
		create : express_app/public
 		create : express_app/public/images
 		create : express_app/public/javascripts
 		create : express_app/routes
 		create : express_app/routes/index.js
 		create : express_app/routes/user.js
 		create : express_app/public/stylesheets
 		create : express_app/public/stylesheets/style.css
 		create : express_app/views
 		create : express_app/views/layout.jade
 		create : express_app/views/index.jade

 		install dependencies:
		  $ cd express_app && npm install

 		run the app:
 		  $ node app
```

```
	$ cd express_app
	$ npm install

	(...モジュールダウンロード)

	$ npm start
	> application-name@0.0.1 start /Volumes/D/Copy/work/Osaka-Node-Beginners/express_app
  > node app.js

  Express server listening on port 3000

```

### express アプリ構成

```
	| node_modules
	| public/		フォルダ リソースフォルダ
	| public/javascripts	JavaScript フォルダ
	| public/images		イメージフォルダ
	| public/stylesheets	スタイルシート
	| routes/フォルダ		URLルーティング
	| vies/フォルダ	表示(テンプレートファイル置き場)
	| app.js			最初に実行するNode.jsのコード
	| package.json		このアプリの情報
```

#### app.js 解説

	$ vim app.js

#### STATIC ファイル

public/フォルダ以下に配置

(例 /public/index.html

	$ vim index.html

#### CONFIG

//app.configure(function(){......

	app.use(app.router);

//routes.....

	app.get('/', routes.index);

//URL Routing.....
/routes/index.js

	exports.index = function(req, res){
	  res.render('index', { title: 'Express', name: "kamiyam" });
	};

//routes(URL) 変更

	app.get('/index', routes.index);

// /views/index.jade

	p Hello #{name}


/routes/index.js

	exports.hello = function(req, res){
	  res.render('hello', { title: 'Express!!!!', name: "kamiyam!!!" });
	};

//routes(URL) 追加

	app.get('/hello', routes.hello);

#### テンプレートエンジン

- -e, --ejs           add ejs engine support (defaults to jade)

ejs
: http://embeddedjs.com/

- -J, --jshtml        add jshtml engine support (defaults to jade)

jshtml
: http://james.padolsey.com/javascript/introducing-jshtml/

- -H, --hogan

hogan
: http://twitter.github.com/hogan.js/

- (default)

Jade
: http://jade-lang.com/

### EXPRESSサンプル

```
	$ cd work
	$ express expressEjs -s -e

	   create : expressEjs
	   create : expressEjs/package.json
	   create : expressEjs/app.js
	   create : expressEjs/public
	   create : expressEjs/public/javascripts
	   create : expressEjs/public/images
	   create : expressEjs/public/stylesheets
	   create : expressEjs/public/stylesheets/style.css
	   create : expressEjs/routes
	   create : expressEjs/routes/index.js
	   create : expressEjs/routes/user.js
	   create : expressEjs/views
	   create : expressEjs/views/index.ejs

	   install dependencies:
	     $ cd expressEjs && npm install

	   run the app:
	     $ node app
```

```
	$ cd expressEjs
	$ npm install
	$ node app
```

## package.jsonについて

``npm install --save オプション``

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

## Debug Tool

``supervisor & nodemon & forever``

	$ npm install -g supervisor
	$ npm install -g nodemon
	$ npm install -g forever