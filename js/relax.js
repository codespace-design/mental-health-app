function playTrack(file) {
  const player = document.getElementById("player");
  player.src = "music/" + file;
  player.play();
}
