const def_props = {
  width: 1280,
  height: 720,
  channel: "lul_shiro",
  //channel: "himukee",
  layout: "video",
  theme: "dark",
  autoplay: true
}

var tw_player = new Twitch.Player("twPlayer", def_props);
var cur_start = 0;
var loc_start = 0;
const base_time = new Date(Date.UTC(2020,4,25,1,0,0,0));

tw_player.addEventListener(Twitch.Player.READY, () => {
  tw_player.setVolume(1.0);
  tw_player.setMuted(false);
  tw_player.play();
  cur_start = new Date(Date.now());
});

tw_player.addEventListener(Twitch.Player.PLAY, () => {
  loc_start = new Date(Date.now());
});

function tw_start_video(vid, time) {
  tw_player.setVideo('v'+vid, time);
}
setInterval(function () {
  //console.log ('tw',tw_player.getCurrentTime(),tw_player.getDuration(),tw_player.getEnded());
  document.getElementById("st").innerText = cur_start.getUTCHours() + ':'+cur_start.getUTCMinutes() +':' +cur_start.getUTCSeconds();
  document.getElementById("lst").innerText = loc_start.getUTCHours() + ':'+loc_start.getUTCMinutes() +':' + loc_start.getUTCSeconds();
  document.getElementById("tpt").innerText = tw_player.getCurrentTime();
  document.getElementById("ip").innerText = loc_start.getUTCSeconds() + tw_player.getCurrentTime();
  console.log(loc_start,base_time,loc_start-base_time);
  let mts_date = (loc_start-base_time)/1000 + tw_player.getCurrentTime();
  document.getElementById("mts").innerText = mts_date;

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