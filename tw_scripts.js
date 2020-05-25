const def_props = {
  width: 1280,
  height: 720,
  channel: "isaharok",
  //channel: "himukee",
  layout: "video",
  theme: "dark",
  autoplay: true
}

var tw_player = new Twitch.Player("twPlayer", def_props);
var cur_start = 0;
var loc_start = 0;

tw_player.addEventListener(Twitch.Player.READY, () => {
  tw_player.setVolume(1.0);
  tw_player.setMuted(false);
  tw_player.play();
  cur_start = Date.now();
});

tw_player.addEventListener(Twitch.Player.PLAY, () => {
  loc_start = Date.now();
});

function tw_start_video(vid, time) {
  tw_player.setVideo('v'+vid, time);
}
setInterval(function () {
  //console.log ('tw',tw_player.getCurrentTime(),tw_player.getDuration(),tw_player.getEnded());
  document.getElementById("st").innerText = cur_start;
  document.getElementById("lst").innerText = loc_start;
  document.getElementById("tpt").innerText = tw_player.getCurrentTime();
  document.getElementById("ip").innerText = cur_start + tw_player.getCurrentTime();

},1000);

/*
embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
  console.log('em',embed);
  g_player = embed.getPlayer();
  g_player.play();
  player_ready = true;
  g_player.setVolume(1.0);
  g_player.setMuted(false);
  setInterval(function () {
    //console.log ('tw',g_player.getCurrentTime(),g_player.getDuration(),g_player.getEnded());
  },1000);
});

function tw_start_video(vid) {
  if (player_ready) {
    g_player = embed.getPlayer();
    //g_player.setVideo('v'+vid,10);
    g_player.pause();
  } else {
    setTimeout(function () {
      console.log('go',vid)
      g_player = embed.getPlayer();
      //g_player.setVideo('v'+vid,10);
    g_player.pause();
    },3000);
  }
}
*/