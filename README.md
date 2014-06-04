#No29-bot

##これは何？ _What is?_

__No29-bot__というIRC botです。
チャットだろうと授業中だろうとJSといちゃつきたい強者向けのbotです。

##使い方 _Usage_

```
$ git clone https://github.com/MakeNowJust/No29-bot.git
$ cd No29-bot
$ npm install
$ npm run
```

で動かなかったなご愁傷さまです。

##機能 _Functions_

IRC上で、

```
@No29-bot ソースコード
```

と発言すると、実行して結果をそのチャンネルに返信します。

その他、誰かjoinしてきたら挨拶します。

##設定 _Configurations_

`config.json`を編集してください。

`config.json`の各設定値の意味。

###`server`

接続するIRCサーバーのURLを文字列で指定してください。

例: `"irc.freenode.net"``

###`nickName`

IRC上での名前を文字列で指定してください。
この名前が変更されれば、上の「機能」の項の返信先もその名前に変わります。

例: `"No29-bot"`

###`channels`

接続するチャンネルの名前を文字列の配列で指定してください。

例: `["testtouhuserver"]`

##その他

ライセンスはzlib/pngライセンスです。

(c) 2014 TSUYUSATO Kitsune
