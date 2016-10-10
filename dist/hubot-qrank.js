// Description:
// Posting to Slack qiita articles from qrank.
//
// Commands:
//   hubot qrank - <Posting to Slack qiita articles from qrank>
//
// Notes:
//   <optional notes required for the script>
//
// Author:
//   naname <naname@naname.net>

'use strict';

var _qrankCrawler = require('qrank-crawler');

module.exports = function (robot) {

  robot.respond(/qrank/, function (res) {
    var crawler = new _qrankCrawler.QrankCrawler();
    var parser = new _qrankCrawler.QrankParser();
    var result = parser.parse(crawler.get(10).getBody('utf8'));
    var message = 'Qiita articles ranking.\n';
    result.forEach(function (value, index) {
      message += '\u30B9\u30C8\u30C3\u30AF\u6570' + value.stock + ' ' + value.title + ' ' + value.url + ' \n';
    });
    send(robot, res.envelope, message);
    //res.send(message);
  });
};

//Copied from hubot-slack/src/client.coffee
var send = function send(robot, envelope, message) {
  var options, room;
  if (envelope.room) {
    room = envelope.room;
  } else if (envelope.id) {
    room = envelope.id;
  }
  options = {
    as_user: true,
    link_names: 1,
    unfurl_links: false
  };
  if (typeof message !== 'string') {
    return robot.adapter.client.web.chat.postMessage(room, message.text, _.defaults(message, options));
  } else {
    return robot.adapter.client.web.chat.postMessage(room, message, options);
  }
};
//# sourceMappingURL=hubot-qrank.js.map
