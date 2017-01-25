$(document).ready(function(){
  var $body = $('body');
  $body.html('<br><br><br><br><button type="button">Show New Tweets</button><br><br><br><br>');


  $('button').on('click', showTweets);

  showTweets();
  function showTweets() {
    $('.tweet').remove();
    var index = streams.home.length - 1;
    console.log(index);
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"></div>');
      var $name = $('<div class="user"></div>');
      $('.user').click(function() {
        //console.log(user);
        $('body').html('');
        var $timeline = $('<div class="timeline"></div>');
        $timeline.text(streams.users['mracus']);
        $timeline.appendTo($body);
      });
      var d = tweet.created_at;
      var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      //var $user = $('<div><button class="user">@ +tweet.user+ </button></div>');
      //$tweet.append($user);
      $name.text('@' + tweet.user);
      $tweet.text(': ' + tweet.message + ' ' + time);
      $name.appendTo($tweet);
      $tweet.appendTo($body);
      index -= 1;
    }

  }

  function showUser(username) {
    $body.html('');
    var index = streams.users[].length - 1;

  }
});