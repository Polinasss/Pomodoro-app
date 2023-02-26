const audioPlayer = document.getElementById('audio-player');
const musicName = document.getElementById('music-name');
const musicAuthor = document.getElementById('music-author');
const playerElemLi = [...document.getElementsByClassName('pleyer-elemLi')];
const playerImg = document.getElementById('player-img');

let hhh = 0;
async function getMusicPlayer() {  
    const musicFiles = 'music.json';
    const res = await fetch(musicFiles);
    const data = await res.json();
    audioPlayer.src = data[hhh].src;
    musicName.textContent = data[hhh].name;
    musicAuthor.textContent = data[hhh].author;

    playerElemLi.forEach((item) => {
        let ind = playerElemLi.indexOf(item);
        item.textContent = data[ind].name + " | " + data[ind].author;
    });

    playerImg.src = data[hhh].image;
}
getMusicPlayer();

playerElemLi.forEach(item => item.addEventListener('click', function(){
    let indexOfElement = playerElemLi.indexOf(item);
    hhh = indexOfElement;
    for(let i = 0; i < playerElemLi.length; i++) {playerElemLi[i].classList.remove('hoverUlList')}
    item.classList.add('hoverUlList');
    getMusicPlayer();
}));
