$(document).ready(function(){
  var $body = $('body');
  $body.html('<br><br><h1>Twittler</h1><br><br><button type="button">Show New Tweets</button><br><br><br><br>');
  showTweets();
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
      var $name = $('<div class="user"></div>');
      $('.user').click(function() {
        $('body').html('');
        var $timeline = $('<div class="timeline"></div>');
        $timeline.text(streams.users['mracus']);
        $timeline.appendTo($body);
      });
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