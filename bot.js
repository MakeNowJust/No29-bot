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

bot.addListener('message', function (from, to, msg) {
  var
  m, res;

  console.log(to + ' => ' + from + ' : ' + msg);

  if (m = msg.match(regex)) {
    try {
      res = vm.runInNewContext('with(Math){' + m[1] + '}', null, '<sandbox>');
    } catch (e) {
      res = e;
    }
    bot.say(to, '@' + from + ' ' + res);
  }
});

