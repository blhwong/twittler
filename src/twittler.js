$(document).ready(function(){
  var $body = $('body');
  $body.html('<br><br><br><br><button type="button">Show New Tweets</button><br><br><br><br>');
  $('button').on('click', showTweets);
  showTweets();
  $('a').on('click', function(users) {
    $('.tweet').remove();
    //console.log($(this).text().slice(1));
    //console.log(users);
    var index = streams.users[$(this).text().slice(1)].length - 1;
    //console.log(index);
    while(index >= 0){
      var tweet = streams.users[$(this).text().slice(1)][index];
      var $tweet = $('<div class="tweet"></div>');
      var d = tweet.created_at;
      var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      $tweet.text(': ' + tweet.message + ' ' + time);
      $tweet.prepend($('<a>@'+tweet.user+'</a>'));
      $tweet.appendTo($body);
      index -= 1;
    }
  });
  function showTweets() {
    $('.tweet').remove();
    var index = streams.home.length - 1;
    //console.log(index);
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"></div>');
      var d = tweet.created_at;
      var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      $tweet.text(': ' + tweet.message + ' ' + time);
      $tweet.prepend($('<a>@'+tweet.user+'</a>'));
      $tweet.appendTo($body);
      index -= 1;
    }
  }
});