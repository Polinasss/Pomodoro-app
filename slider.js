const applyKey = 'yHw0EUH6eC5n_g6UUGZDFehNy9OC5O8-hzaDRhxLuvQ';

let sliderItems = [...document.getElementsByClassName('slider')];
let arrOfData = [];

let ul = document.getElementById('backgroundSliderPhotoes');


function addBtnEvents () {
    let firstElemLi = [...document.getElementsByClassName('slider')];
    let buttons = [...document.getElementsByClassName('slider-btn')];
    let num = 0;
    firstElemLi[0].classList.add('slider__active');

    buttons.forEach((item) => {item.addEventListener('click', function () {
        if (item.id === "next") {
            firstElemLi.forEach((e) => e.classList.remove('slider__active'));
            num = num + 1;
            if (num > 4) { num = 0 }
            firstElemLi[num].classList.add('slider__active');
            console.log(num);
        }
        if (item.id === "prev") {
            firstElemLi.forEach((e) => e.classList.remove('slider__active'));
            num = num - 1;
            if (num < 0) { num = 4 }
            firstElemLi[num].classList.add('slider__active');
            console.log(num);
        }
    })});
}

async function getPhotoes () {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=switzerland&client_id=${applyKey}`);
        const data = await response.json();
        arrOfData = data.results.slice(0, 5);
        console.log(data);
        setPhotoes();
        addBtnEvents();
    } catch (err) {
        console.log(err);
    }
}
getPhotoes();

const setPhotoes = () => {
    arrOfData.map(({urls: {regular}}) => {
        let elemLi = document.createElement('li');
        elemLi.classList.add('slider');

        let elemImg = document.createElement('img');
        elemImg.src = regular;
        elemImg.alt = 'background slider img';

        elemImg.classList.add('slider-img');

        elemLi.append(elemImg);
        ul.append(elemLi);
        return elemLi;
    })
}