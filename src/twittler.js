$(document).ready(function(){
  var $body = $('body');
  $body.html('<br><br><br><br><button type="button">Show New Tweets</button><br><br><br><br>');


  $('button').on('click', showTweets);

  showTweets();
  function showTweets() {
    //$body.html('<br><br><br><br><button type="button">Show New Tweets</button><br><br><br><br>');
    $('.tweet').remove();
    var index = streams.home.length - 1;
    console.log(index);
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"></div>');
      var d = tweet.created_at;
      var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

      $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + time);
      $tweet.appendTo($body);
      index -= 1;
    }

  }
});