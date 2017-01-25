$(document).ready(function(){
  var $body = $('body');
  $body.html('<br><br><br><br><button type="button">Show New Tweets</button><br><br><br><br>');
  showTweets();
  $('a').on('click', showTweets);
  $('button').on('click',  showTweets);
  function showTweets() {
    $('.tweet').remove();
    var stream;
    if (this.tagName === 'A') {
      stream = streams.users[$(this).text().slice(1)];
    } else {
      stream = streams.home;
    }
    var index = stream.length - 1;
    while(index >= 0){
      var tweet = stream[index];
      var $tweet = $('<div class="tweet"></div>');
      var d = tweet.created_at;
      var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      $tweet.text(': ' + tweet.message + ' ' + time);
      $tweet.prepend($('<a>@'+tweet.user+'</a>'));
      $tweet.appendTo($body);
      index -= 1;
    }
    $('a').on('click', showTweets);
  }
});