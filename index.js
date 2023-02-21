window.addEventListener('DOMContentLoaded', function(){

  const videoElement = document.querySelector("video");

  const btn_play = document.getElementById("btn_play");
  const btn_pause = document.getElementById("btn_pause");
  const btn_mute = document.getElementById("btn_mute");
  const slider_volume = document.getElementById("volume");

  // ボリュームの初期設定
  videoElement.volume = slider_volume.value;

   // 再生ボタンを押したとき
  btn_play.addEventListener("click", e => {
    videoElement.play();
  });

   // 一時停止ボタンを押したとき
  btn_pause.addEventListener("click", e => {
    videoElement.pause();
  });

  // 消音／消音解除ボタンを押したとき
  btn_mute.addEventListener("click", (e) => {

    if( videoElement.muted ) {
      videoElement.muted = false;
      btn_mute.textContent = "消音";
    } else {
      videoElement.muted = true;
      btn_mute.textContent = "消音解除";
    }
  });

  // 音量調整スライダーを操作したとき
  slider_volume.addEventListener("input", (e) => {
    videoElement.volume = slider_volume.value;
  });
  
});