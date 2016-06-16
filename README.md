# Node.js勉強会
## 環境
- Node.js v6.2.1
- npm v3.9.3
- express(-generator) v4.13.1

## Node.js
http://nodejs.org/

Node.js を今から始める上で選択するバージョンは v4系・v6系 (2016/6 現在) があります。
公式サイトにインストーラがあるので通常はこちらを選択することで手間が省ける

※ だだし、Node.jsにおいて違うバージョンでの開発を頻繁に行う場合、Node.js自体のバージョンを切り替えて使えるツールを利用することをおすすめ

### Node.jsのバージョン管理
OSによって、それぞれ下記を利用する
（下記のみではなく他にもバージョンを管理するツールがあります。）

- Mac: nodebrew
- Windows: nodist

#### nodebrew (Mac/Linux)

##### nodebrew 概要

https://github.com/hokaccha/nodebrew

##### nodebrew をインストール

```
$ curl -L git.io/nodebrew | perl - setup
$ cd
```

``.bashrc`` や ``.bashprofile`` に記述

```
# editor .bashrc or .bashprofile
export PATH=$HOME/.nodebrew/current/bin:$PATH
```

記述内容を反映

```
$ source ~/.bashrc
```

##### nodebrew 実行

```
$ nodebrew
nodebrew 0.9.6

Usage:
    nodebrew help                         Show this message
    nodebrew install <version>            Download and install <version> (compile from source)
    nodebrew install-binary <version>     Download and install <version> (binary file)
    nodebrew uninstall <version>          Uninstall <version>
    nodebrew use <version>                Use <version>
    nodebrew list                         List installed versions
    nodebrew ls                           Alias for `list`
    nodebrew ls-remote                    List remote versions
    nodebrew ls-all                       List remote and installed versions
    nodebrew alias <key> <value>          Set alias
    nodebrew unalias <key>                Remove alias
    nodebrew clean <version> | all        Remove source file
    nodebrew selfupdate                   Update nodebrew
    nodebrew migrate-package <version>    Install global NPM packages contained in <version> to current version
    nodebrew exec <version> -- <command>  Execute <command> using specified <version>

Example:
    # install from binary
    nodebrew install-binary v0.10.22

    # use a specific version number
    nodebrew use v0.10.22

    # io.js
    nodebrew install-binary io@v1.0.0
    nodebrew use io@v1.0.0

```
#### Node.js をソースコードからビルドする場合

##### Mac

Xcodeをインストールします

- Xcode、および Command Line Tools をインストール

Xcode -> Preferences -> Downloads、Command Line Tools をインストール

##### amazon linux

```
$ sudo yum install gcc-c++ zlib zlib-devel tk-devel tcl-devel sqlite-devel ncurses-devel gdbm-devel readline-devel bzip2-devel db4-devel openssl-devel
```

#### nodist(Windows)

##### nodist 概要

https://github.com/marcelklehr/nodist

##### nodist Download

https://github.com/marcelklehr/nodist/releases/download/v0.7.2/NodistSetup-v0.7.2.exe

```
> nodist 0.10
nodev0.10.26

> node -v
v0.10.26

> nodist
  nodev0.10.24
  nodev0.10.25
> nodev0.10.26 (global)
  nodev0.11.11
  nodev0.11.12
  iojsv2.3.4
```

## npm
Node.js アプリケーションで利用するライブラリ、モジュールを管理するツール
Node.jsをインストールすれば基本的にインストールが完了している

```
# npm -v
3.9.3
```

## Node.js導入

```
# editor app.js

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

```

Node.js サーバ起動

```
node app.js
```

http://127.0.0.1:3000/ へアクセス

## Debug Tool

``supervisor & nodemon & forever``

```
$ npm install -g supervisor
$ npm install -g nodemon
$ npm install -g forever
```
