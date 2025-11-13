let songindex=0;
let audioElement= new Audio("music.mp3");
let masterplay= document.getElementById('masterplay');
let myprogressBar=document.getElementById('ratio');
let gif=document.getElementById('gif');
let songinfo=document.getElementById('songinfor');


 let songs=[
    {songName: "music", filePath: "music.mp3", coverPath:"covers1.jpg"},
    {songName: "feel", filePath: "feel.mp3", coverPath:"covers1.jpg"},
    {songName: "circle", filePath: "circle.mp3", coverPath:"covers1.jpg"},
    {songName: "beerjaat", filePath: "beerjaat.mp3", coverPath:"covers1.jpg"},
    {songName: "bhojpuri", filePath: "bhojpuri.mp3", coverPath:"covers1.jpg"},
    {songName: "khatola", filePath: "khatola.mp3", coverPath:"covers1.jpg"},
    {songName: "neeraj", filePath: "neeraj.mp3", coverPath:"covers1.jpg"},

 ]
 masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-solid','fa-play');
        masterplay.classList.add('fa-solid', 'fa-pause');
        gif.style.opacity=1;
        songinfo.innerText=songs[songindex].songName;
    }else{
        audioElement.pause();
          masterplay.classList.remove('fa-solid', 'fa-pause');
         masterplay.classList.add('fa-solid','fa-play');
         gif.style.opacity=0;
         songinfo.innerText=songs[songindex].songName;

    }
  document.getElementById('previous').addEventListener('click',()=>{
    songindex--;
    if(songindex<0){
        songindex=songs.length-1;
    }
    audioElement.src=songs[songindex].filePath;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-solid','fa-play');
    masterplay.classList.add( 'fa-solid', 'fa-pause');
    gif.style.opacity=1;
    songinfo.innerText=songs[songindex].songName;
  });
   document.getElementById('next').addEventListener('click',()=>{
    songindex++;
    if(songindex>=songs.length){
        songindex=0;
    }
    audioElement.src=songs[songindex].filePath;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-solid','fa-play');
    masterplay.classList.add( 'fa-solid', 'fa-pause');
    gif.style.opacity=1;
    songinfo.innerText=songs[songindex].songName;
  });



 });
 audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progess=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value=progess;
 });
 myprogressBar.addEventListener('change',()=>{
     audioElement.currentTime=myprogressBar.value*audioElement.duration/100;
 });
 