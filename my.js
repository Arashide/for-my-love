$(document).ready(function () {
    $(".title").click(function () {
      $(".container").addClass("open");
    });
  
    $(".close").click(function () {
      $(".container").removeClass("open");
    });
    var music = document.getElementById("myMusic");
    music.play();
  });

  var songs = [
    {title: "La Vie en Rose (Tracy's Version)", file: "path/to/song1.mp3"},
    {title: "Nothing - Bruno Major", file: "path/to/song2.mp3"},
    // Add more songs as needed
];
var currentSongIndex = 0;

function loadSong(songIndex) {
    var song = songs[songIndex];
    $("#song-title").text(song.title);
    $("#myMusic").attr("src", song.file);
    document.getElementById("myMusic").play();
}

function playPauseSong() {
    var myMusic = document.getElementById("myMusic");
    if (myMusic.paused) {
        myMusic.play();
    } else {
        myMusic.pause();
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
}

// Event listeners for player controls
$(document).ready(function() {
    $("#play").click(playPauseSong);
    $("#next").click(nextSong);
    $("#prev").click(prevSong);

    // Load the first song on page load
    loadSong(currentSongIndex);
});