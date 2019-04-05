const Botkit = require('botkit');

var SLACK_TOKEN = '【Enter Your Slack Bot Token】';

if (!SLACK_TOKEN) {
  console.log('Error: Specify token in environment');
  process.exit(1);
}

const controller = Botkit.slackbot({
    debug: false
});

controller.spawn({
    token: SLACK_TOKEN
}).startRTM(function(err){
    if (err) {
        throw new Error(err);
    }
});

// Hello
controller.hears('Hello',['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,'Hello');
});

// Say
controller.hears('Say',['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,message.text.replace('say', ''));
});