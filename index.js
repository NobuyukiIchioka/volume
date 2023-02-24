window.addEventListener('DOMContentLoaded', function(){

  const video = document.querySelector("video");

  const btn_play = document.getElementById("btn_play");
  const btn_pause = document.getElementById("btn_pause");
  const btn_mute = document.getElementById("btn_mute");
  const volume_slider = document.getElementById("volume");

  // ボリュームの初期設定
  video.volume = volume_slider.value;

  // 消音ボタンの画像を取得
   // 音楽スイッチ
   const icon = document.getElementById("icon");

   // 再生ボタンを押したとき
  btn_play.addEventListener("click", e => {
    video.play();
  });

   // 一時停止ボタンを押したとき
  btn_pause.addEventListener("click", e => {
    video.pause();
  });

  // 消音／消音解除ボタンを押したとき
  btn_mute.addEventListener("click", (e) => {

    if( video.muted ) {
      video.muted = false;
      btn_mute.textContent = "消音";
      icon.src = "./img/volume-mute.svg";
    } else {
      video.muted = true;
      btn_mute.textContent = "消音解除";
      icon.src = "./img/volume-high.svg";
    }
  });

  // 音量調整スライダーを操作したとき
  volume_slider.addEventListener("input", (e) => {
    video.volume = volume_slider.value;
  });
  
});