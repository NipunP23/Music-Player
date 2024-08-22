const audio = new Audio('./music/Animal.mp3');
const audio2 = new Audio('./music/KaliZulfok.mp3');
const audio3 = new Audio('./music/Satranga.mp3');
const audio4 = new Audio('./music/Imagine Dragons - Radioactive (320 kbps).mp3');
const audio5 = new Audio('./music/See-You-Again.mp3');
const play = document.querySelector("#play");
const songname = document.querySelector("#songname span");
const skipleft = document.querySelector("#skipleft");
const skipright = document.querySelector("#skipright");
const crousalimages=document.querySelectorAll("#crousal img");
// crousalimages.style.translate='-50px';
var position=0;

const changer=(action)=>{
    if(action==='next'){
        position=position-50;
    }
    if(action==='prev'){
        position=position+50;
    }
    console.log(position);
    if(position<-(Songs.length*50-50)){
        position=0;
    }
    if(position>0){
        position=-((Songs.length*50-50));
    }


};
const imagscrol=(action)=>{
crousalimages.forEach(function(element){
    element.style.translate=position+'px';
})
}

let Songs = [
    { elem: audio, audioname: 'Animal' },
    { elem: audio2, audioname: 'Kali Kali Zulfon Ke' },
    {elem:audio3,audioname:'Satranga'},
    {elem:audio4,audioname:'Radio-active'},
    {elem:audio5,audioname:'See-You-Again'},
];

let current = 0;
    let currentSong = Songs[current].elem;
    let names = Songs[current].audioname;
    songname.textContent = names;

const playPauseSong=()=>{  
    if (currentSong.paused) {
        play.className = 'ri-pause-circle-fill'
        currentSong.play();
    }
    else {
        play.className = 'ri-play-circle-fill'
        currentSong.pause();
    } 
};

play.addEventListener("click", function () {
    playPauseSong();
});



    skipleft.addEventListener("click", function () {
        update('prev');

    });
    skipright.addEventListener("click", function () {
        update('next');
    });

const update=(action)=>{
    currentSong.pause();
    currentSong.currentTime=0;
    if(action==='next'){
        current++ ;
        if(current> Songs.length-1){current=0;}
        currentSong = Songs[current].elem;
        names = Songs[current].audioname;
        songname.textContent = names;
        playPauseSong();
        changer('next');
        imagscrol('next');
        
    }
    if(action==='prev'){
        current--;
        if(current< 0){current=Songs.length-1;}
        currentSong = Songs[current].elem;
        names = Songs[current].audioname;
        songname.textContent = names;
        playPauseSong();
        changer('prev');
        imagscrol('prev');
    }
};
