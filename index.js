window.addEventListener('DOMContentLoaded', function(){

  const video = document.querySelector("video");

  const btn_play = document.getElementById("btn_play");
  const btn_pause = document.getElementById("btn_pause");
  const mute_icon = document.getElementById("icon");
  const volume_slider = document.getElementById("volume");

  // ボリュームの初期設定
  video.volume = volume_slider.value;


   // 再生ボタンを押したとき
  btn_play.addEventListener("click", e => {
    video.play();
  });

   // 一時停止ボタンを押したとき
  btn_pause.addEventListener("click", e => {
    video.pause();
  });

  // 消音／消音解除ボタンを押したとき
  // btn_mute.addEventListener("click", (e) => {

  //   if( video.muted ) {
  //     video.muted = false;
  //     btn_mute.textContent = "消音";
  //     // icon.src = "./img/volume-mute.svg";
  //   } else {
  //     video.muted = true;
  //     btn_mute.textContent = "消音解除";
  //     // icon.src = "./img/volume-high.svg";
  //   }
  // });

 // 消音ボタンの画像を切り替え
 

  mute_icon.onclick = function() {
    if(video.muted){
      video.muted = false;
      icon.src = "./img/volume-high.svg";
    }else{
      video.muted = true;
      icon.src = "./img/volume-mute.svg";
    }
  }

  // 音量調整スライダーを操作したとき
  volume_slider.addEventListener("input", (e) => {
    video.volume = volume_slider.value;
  });
  
});

// 参考コード
// 'use strict';
// {
//   // カバー画面をクリックでクラスを付加
//   // ついでに動画、動画の枠、音楽のクラスも取ってる
//   const cover = document.querySelector('.top_click');
//   const movie = document.querySelector('.movie');
//   const wrap = document.querySelector('.movie_wrap');
//   const music = document.querySelector('#music');

//   cover.addEventListener('click', function () {
//       cover.classList.add('open');
//       movie.play();
//   });

//   //動画が再生後に消える
//   movie.addEventListener('ended', () => {
//     wrap.classList.add('close');
//     music.play();
//   })

//   // 音楽スイッチ
//   let icon = document.getElementById("icon");

//   icon.onclick = function() {
//     if(music.paused){
//       music.play();
//       icon.src = "./img/music_play.png";
//     }else{
//       music.pause();
//       icon.src = "./img/music_stop.png";
//     }
//   }