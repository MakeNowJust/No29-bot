var
vm  = require('vm'),
irc = require('irc'),
cfg = require('./config');

var
bot = new irc.Client(cfg.server, cfg.nickName, {
  channels: cfg.channels,
});

var
regex = new RegExp('^\\s*@' + cfg.nickName + '\\s+([^]+)$');

bot.addListener('join', function (chan, nickName) {
  console.log('join ' + nickName + ' => ' + chan);
  if (nickName === cfg.nickName) {
    bot.say(chan, cfg.nickName + 'が起動しましたし');
  } else {
    bot.say(chan, '@' + nickName + ' さんこんにちはです〜');
  }
});

var
vmOptions = {
  filename: '<sandbox>',
  timeout: 5000,
},
scope = {};

bot.addListener('message', function (from, to, msg) {
  var
  m, res;

  console.log(to + ' => ' + from + ' : ' + msg);

  if (m = msg.match(regex)) {
    try {
      console.log('eval: ', m[1]);
      res = vm.runInNewContext('with(Math){' + m[1] + '}', scope, vmOptions);
    } catch (e) {
      res = e;
    }
    bot.say(to, '@' + from + ' ' + res);
  }
});

