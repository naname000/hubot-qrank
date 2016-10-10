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
import {QrankCrawler, QrankParser} from 'qrank-crawler';
module.exports = function(robot) {
  robot.respond(/qrank/, function(res) {
    const crawler = new QrankCrawler();
    const parser = new QrankParser();
    let result = parser.parse(crawler.get(10).getBody('utf8'));
    let message = 'Qiita articles ranking.\n';
    result.forEach(function(value, index) {
      message += `ストック数${value.stock} ${value.title} ${value.url} \n`;
    });
    if(robot.adapter.client === undefined) {
      res.send(message);//
    }else{
      send(robot, res.envelope, message);//
    }
  });
};

//Copied from hubot-slack/src/client.coffee
var send = function(robot, envelope, message) {
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

