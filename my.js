$(document).ready(function () {
    $(".title").click(function () {
      $(".container").addClass("open");
    });
  
    $(".close").click(function () {
      $(".container").removeClass("open");
    });
  });

  var songs = [
    {title: "La Vie en Rose (Tracy's Version)", file: "lavieenrose.mp3"},
    {title: "Nothing - Bruno Major", file: "bruno.mp3"},
    {title: "P.S I LOVE YOU - Paul Partohap)", file: "psiloveyou.mp3"},
    {title: "Moments - Micah Edwards", file: "moments.mp3"},
    {title: "Infrunami - Steve Lacy", file: "infrunami.mp3"},
    {title: "For The First Time - Mac Demarco", file: "For The First Time.mp3"},
    {title: "Best Part - Daniel Ceasar)", file: "bestpart.mp3"},
    {title: "Apocalypse - Cigarettes After Sex", file: "apocalypse.mp3"},
    {title: "Get You - Daniel Caesar", file: "getyou.mp3"},
    {title: "Pink + White - Frank Ocean", file: "pinkwhite.mp3"}
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