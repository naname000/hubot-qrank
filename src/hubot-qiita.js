// Description:
// Posts qiita articles from qrank.
//
// Configuration:
//   LIST_OF_ENV_VARS_TO_SET
//
// Commands:
//   hubot hello - <what the respond trigger does>
//   orly - <what the hear trigger does>
//
// Notes:
//   <optional notes required for the script>
//
// Author:
//   naname <naname@naname.net>

'use strict';

module.exports = function(robot) {
  robot.respond(/hello/, function(res) {
    return res.reply("hello!");
  });
  return robot.hear(/orly/, function(res) {
    return res.send("yarly");
  });
};

/*
module.exports = (robot) ->
robot.respond /hello/, (res) ->
  res.reply "hello!"

robot.hear /orly/, (res) ->
  res.send "yarly"
*/
