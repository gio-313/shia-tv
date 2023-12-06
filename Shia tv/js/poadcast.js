var episodes = document.querySelectorAll('#episodes li a');
var player = document.getElementById('player');

episodes.forEach(function(episode) {
  episode.addEventListener('click', function(e) {
    e.preventDefault();
    var audioSrc = this.getAttribute('href');
    player.src = audioSrc;
  });
});