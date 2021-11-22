import images from './images.js';
export { corResPic, isPlayedPic }

let corResPic = {
    portrait: 0,
    landscape: 0,
    stillLife: 0,
    graphic: 0,
    antique: 0,
    avantGarde: 0,
    renaissance: 0,
    surrealism: 0,
    kitsch: 0,
    minimalism: 0,
    avangard: 0,
    industrial: 0
};

let isPlayedPic = {
    portrait: false,
    landscape: false,
    stillLife: false,
    graphic: false,
    antique: false,
    avantGarde: false,
    renaissance: false,
    surrealism: false,
    kitsch: false,
    minimalism: false,
    avangard: false,
    industrial: false
}

export function initPic() {
    const pic = document.querySelector('.pictures');
    const workArea = document.querySelector('.wrapper-work'),
        popup = document.querySelector('.popup'),
        todo = document.querySelector('.todo'),
        toMenu = document.getElementById('menu'),
        toArtQuiz = document.getElementById('art-quiz'),
        toPicQuiz = document.getElementById('pic-quiz'),
        toSettings = document.getElementById('sett'),
        menuCheckBox = document.getElementById('menu__toggle'),
        resultsBtn = document.querySelector('.results'),
        footer = document.querySelector('.foot')

    let counterCorrectPic = 0;
    let counterAllAnswPic = 1;


    corResPic = JSON.parse(localStorage.getItem('corResPic'))
    if (JSON.parse(localStorage.getItem('isPlayedPic')) != null) {
        isPlayedPic = JSON.parse(localStorage.getItem('isPlayedPic'))
    }

    let currentCategoriePic = [];

    function changeContent() {
        footer.style.display = 'block';
        setTimeout(() => {
            workArea.innerHTML = `<div class="categories">
        <h2>Choose categorie</h2>
        <button class="portrait" type="button">  
        <div class="image-with-res ${isPlayedPic.portrait === true ? 'played' : ''}" id="portrait">
            <img src="./assets/img/120.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.portrait}/10</p> 
        </div>                  
            Portrait            
        </button>
        <button class="landscape" type="button">
        <div class="image-with-res ${isPlayedPic.landscape === true ? 'played' : ''}" id="landscape">
            <img src="./assets/img/130.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.landscape}/10</p> 
            </div>
            Landscape
        </button>
        <button class="still-life" type="button">
        <div class="image-with-res ${isPlayedPic.stillLife === true ? 'played' : ''}" id="still">
            <img src="./assets/img/140.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.stillLife}/10</p> 
            </div>
            Still Life
        </button>
        <button class="graphic" type="button">
        <div class="image-with-res ${isPlayedPic.graphic === true ? 'played' : ''}" id="graphic">
            <img src="./assets/img/150.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.graphic}/10</p> 
            </div>
            Graphic
        </button>
        <button class="antique" type="button">
        <div class="image-with-res ${isPlayedPic.antique === true ? 'played' : ''}" id="antique">
            <img src="./assets/img/160.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.antique}/10</p> 
            </div>
            Antique
        </button>
        <button class="avant-garde" type="button">
        <div class="image-with-res ${isPlayedPic.avantGarde === true ? 'played' : ''}" id="avant">
            <img src="./assets/img/170.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.avantGarde}/10</p> 
            </div>
            Avant-Garde
        </button>
        <button class="renaissance" type="button">
        <div class="image-with-res ${isPlayedPic.renaissance === true ? 'played' : ''}" id="renaissance">
            <img src="./assets/img/180.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.renaissance}/10</p> 
            </div>
            Renaissance
        </button>
        <button class="surrealism" type="button">
        <div class="image-with-res ${isPlayedPic.surrealism === true ? 'played' : ''}" id="surrealism">
            <img src="./assets/img/190.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.surrealism}/10</p> 
            </div>
            Surrealism
        </button>
        <button class="kitsch" type="button">
        <div class="image-with-res" id="kitsch">
            <img src="./assets/img/200.jpg ${isPlayedPic.kitsch === true ? 'played' : ''}" alt="" width="150" height="150">
            <p class="res">${corResPic.kitsch}/10</p> 
            </div>
            Kitsch
        </button>
        <button class="minimalism" type="button">
        <div class="image-with-res ${isPlayedPic.minimalism === true ? 'played' : ''}" id="minimalism">
            <img src="./assets/img/210.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.minimalism}/10</p> 
            </div>
            Minimalism
        </button>
        <button class="avangard" type="button">
        <div class="image-with-res ${isPlayedPic.avangard === true ? 'played' : ''}" id="avangard">
            <img src="./assets/img/220.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.avangard}/10</p> 
            </div>
            Avangard
        </button>
        <button class="industrial" type="button">
        <div class="image-with-res ${isPlayedPic.industrial === true ? 'played' : ''}" id="industrial">
            <img src="./assets/img/230.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.industrial}/10</p> 
            </div>
            Industrial
        </button>
    </div>`
            chooseCategorie()
            counterCorrectPic = 0;
            counterAllAnswPic = 1
        }, 100)
        setTimeout(() => {
            const categories = document.querySelector('.categories');
            categories.style.opacity = '1'
        }, 200)
    }

    pic.addEventListener('click', changeContent)

    function chooseCategorie() {
        footer.style.display = 'none';
        const allBtns = document.querySelectorAll('button');
        currentCategoriePic = []
        allBtns.forEach((el, i) => {
            allBtns[i].addEventListener('click', () => {
                currentCategoriePic.push(i);
                if (i < 8) {
                    workArea.innerHTML = `<div class="pic-questions">
                    <ul class="pic-answers">
                        <h2 class="pic-question question">Какую картину написал ${images[Number.parseInt(`1${i + 2}0`)].author}?</h2>
                        ${getAnswers(i)}
                    </ul>
                    <div class="pic-counter counter">
                        <div class="correct-answers">Correct answers: 0</div>
                        <div class="all-answers">Question: 1/10</div>
                    </div>;
                </div>`;
                    correctAnswer(Number.parseInt(`1${i + 2}0`))
                } else {
                    workArea.innerHTML = `<div class="pic-questions">
                    <ul class="pic-answers">
                        <h2 class="pic-question question">Какую картину написал ${images[Number.parseInt(`2${i - 8}0`)].author}?</h2>
                        ${getAnswers(i)}
                    </ul>
                    <div class="pic-counter counter">
                        <div class="correct-answers">Correct answers: 0</div>
                        <div class="all-answers">Question: 1/10</div>
                    </div>;
                </div>`;
                    correctAnswer(Number.parseInt(`2${i - 8}0`))
                }
            })
        })
    }

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function getAnswers(i) {
        let answers = null;
        const random = getRandom(1, 4)
        if (i < 8) {
            if (random === 1) {
                answers = `<li class="correct"><img class="pic-quest-img" src="./assets/img/1${i + 2}0.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect">><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>`
            } else if (random === 2) {
                answers = `<li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="correct"><img class="pic-quest-img" src="./assets/img/1${i + 2}0.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>`
            } else if (random === 3) {
                answers = `<li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="correct"><img class="pic-quest-img" src="./assets/img/1${i + 2}0.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>`
            } else if (random === 4) {
                answers = `<li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="correct"><img class="pic-quest-img" src="./assets/img/1${i + 2}0.jpg" alt="pic" width="150" height="150"></li>`
            }
        } else {
            if (random === 1) {
                answers = `<li class="correct"><img class="pic-quest-img" src="./assets/img/2${i - 8}0.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect">><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>`
            } else if (random === 2) {
                answers = `<li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="correct"><img class="pic-quest-img" src="./assets/img/2${i - 8}0.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>`
            } else if (random === 3) {
                answers = `<li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="correct"><img class="pic-quest-img" src="./assets/img/2${i - 8}0.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>`
            } else if (random === 4) {
                answers = `<li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthor(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="correct"><img class="pic-quest-img" src="./assets/img/2${i - 8}0.jpg" alt="pic" width="150" height="150"></li>`
            }
        }
        return answers;
    }

    function getAnswersNext(i) {
        let answers = null;
        const random = getRandom(1, 4)
        if (random === 1) {
            answers = `<li class="correct"><img class="pic-quest-img" src="./assets/img/${i}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect">><img class="pic-quest-img" src="./assets/img/${checkAuthorNext(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthorNext(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthorNext(i)}.jpg" alt="pic" width="150" height="150"></li>`
        } else if (random === 2) {
            answers = `<li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthorNext(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="correct"><img class="pic-quest-img" src="./assets/img/${i}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthorNext(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthorNext(i)}.jpg" alt="pic" width="150" height="150"></li>`
        } else if (random === 3) {
            answers = `<li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthorNext(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthorNext(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="correct"><img class="pic-quest-img" src="./assets/img/${i}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthorNext(i)}.jpg" alt="pic" width="150" height="150"></li>`
        } else if (random === 4) {
            answers = `<li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthorNext(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthorNext(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="incorrect"><img class="pic-quest-img" src="./assets/img/${checkAuthorNext(i)}.jpg" alt="pic" width="150" height="150"></li>
        <li class="correct"><img class="pic-quest-img" src="./assets/img/${i}.jpg" alt="pic" width="150" height="150"></li>`
        }
        return answers;
    }

    function correctAnswer(index) {
        const corAnsw = document.querySelector('.correct');
        const incorAnsw = document.querySelectorAll('.incorrect');
        let indexForGetAnswers = null;
        // if (index < 200) {
        //     indexForGetAnswers = Number.parseInt(JSON.stringify(index).split('')[1] - 2);
        // } else indexForGetAnswers = Number.parseInt(JSON.stringify(index).split('')[1] + 8);        
        todo.innerHTML = `<img src="./assets/img/${index}.jpg" alt="">
        <p class="cor-incor">Верно!</p>
        <p class="description">Автор: ${images[index].author}</p>
        <div class="next-exit-wrapper">
                <p class="go-next">Продолжить</p>
                <p class="exit">Выйти</p>
            </div>`
        corAnsw.addEventListener('click', () => {
            const popup = document.querySelector('.popup');
            const goNext = document.querySelector('.go-next');
            const exit = document.querySelector('.exit');
            popup.style.display = 'block';
            setTimeout(() => todo.style.transform = 'translate(0, 43%)', 100)
            goNext.addEventListener('click', () => {
                popup.style.display = 'none';
                todo.style.transform = 'translate(0, 145%)';
                counterCorrectPic++
                counterAllAnswPic++
                images[index].isCorrect = true;
                workArea.innerHTML = `<div class="pic-questions">
                <ul class="pic-answers">
                    <h2 class="pic-question question">Какую картину написал ${images[index + 1].author}?</h2>
                    ${getAnswersNext(index + 1)}
                </ul>
                <div class="pic-counter counter">
                    <div class="correct-answers">Correct answers: ${counterCorrectPic}</div>
                    <div class="all-answers">Question: ${counterAllAnswPic}/10</div>
                </div>;
            </div>`;
                countRight()
                correctAnswer(index + 1)
            })
            exit.addEventListener('click', () => {
                popup.style.display = 'none';
                todo.style.transform = 'translate(0, 145%)';
                countRight()
                changeContent()
                currentCategoriePic = []
            })
        })
        incorAnsw.forEach((el, i) => {
            incorAnsw[i].addEventListener('click', () => {
                const popup = document.querySelector('.popup');
                const goNext = document.querySelector('.go-next');
                const exit = document.querySelector('.exit');
                const corIncor = document.querySelector('.cor-incor');
                corIncor.innerHTML = `Неверно!`
                popup.style.display = 'block';
                setTimeout(() => todo.style.transform = 'translate(0, 43%)', 100)
                goNext.addEventListener('click', () => {
                    popup.style.display = 'none';
                    todo.style.transform = 'translate(0, 145%)';
                    counterAllAnswPic++
                    workArea.innerHTML = `<div class="pic-questions">
                    <ul class="pic-answers">
                        <h2 class="pic-question question">Какую картину написал ${images[index + 1].author}?</h2>
                        ${getAnswersNext(index + 1)}
                    </ul>
                    <div class="pic-counter counter">
                        <div class="correct-answers">Correct answers: ${counterCorrectPic}</div>
                        <div class="all-answers">Question: ${counterAllAnswPic}/10</div>
                    </div>;
                </div>`;
                    countRight()
                    correctAnswer(index + 1)
                })
                exit.addEventListener('click', () => {
                    popup.style.display = 'none';
                    todo.style.transform = 'translate(0, 145%)';
                    countRight()
                    changeContent()
                    currentCategoriePic = []
                })
            })
        })
        if (counterAllAnswPic > 9) {
            corAnsw.addEventListener('click', () => {
                counterCorrectPic++
                todo.innerHTML = `<img src="./assets/img/${index}.jpg" alt="">
                <p class="cor-incor">Верно!</p>
                <p class="description">Автор: ${images[index].author}</p>
                <p class="descr-results">Ваш результат ${counterCorrectPic} из 10</p>
                <div class="next-exit-wrapper">
                <p class="go-next">Продолжить</p>
                <p class="exit">Выйти</p>
            </div>`;

                popup.style.display = 'block';
                setTimeout(() => todo.style.transform = 'translate(0, 43%)', 100)

                const goNext = document.querySelector('.go-next');
                const exit = document.querySelector('.exit');

                goNext.style.marginTop = '2%';
                goNext.style.marginLeft = '11%';

                goNext.addEventListener('click', () => {
                    popup.style.display = 'none';
                    todo.style.transform = 'translate(0, 145%)';
                    countRight()
                    changeContent()
                    currentCategoriePic = [];
                })
                exit.addEventListener('click', () => {
                    popup.style.display = 'none';
                    todo.style.transform = 'translate(0, 145%)';
                    countRight()
                    changeContent()
                    currentCategoriePic = [];
                })
            })
            incorAnsw.forEach((el, i) => {
                incorAnsw[i].addEventListener('click', () => {
                    todo.innerHTML = `<img src="./assets/img/${index}.jpg" alt="">
                <p class="cor-incor">Неверно!</p>
                <p class="description">Автор: ${images[index].author}</p>
                <p class="descr-results">Ваш результат ${counterCorrectPic} из 10</p>
                <div class="next-exit-wrapper">
                <p class="go-next">Продолжить</p>
                <p class="exit">Выйти</p>
            </div>`;

                    popup.style.display = 'block';
                    setTimeout(() => todo.style.transform = 'translate(0, 43%)', 100)

                    const goNext = document.querySelector('.go-next');
                    const exit = document.querySelector('.exit');

                    goNext.style.marginTop = '2%';
                    goNext.style.marginLeft = '11%';

                    goNext.addEventListener('click', () => {
                        popup.style.display = 'none';
                        todo.style.transform = 'translate(0, 145%)';
                        countRight()
                        changeContent()
                        currentCategoriePic = [];
                    })
                    exit.addEventListener('click', () => {
                        popup.style.display = 'none';
                        todo.style.transform = 'translate(0, 145%)';
                        countRight()
                        changeContent()
                        currentCategoriePic = [];
                    })
                })
            })
        }
    }

    function checkAuthor(index) {
        const randNum = getRandom(130, 220);
        if (index < 8) {
            if (images[randNum].author === images[Number.parseInt(`1${index + 2}0`)].author) {
                checkAuthor(index);
            } else return randNum;
        } else {
            if (images[randNum].author === images[Number.parseInt(`2${index - 8}0`)].author) {
                checkAuthor(index);
            } else return randNum;
        }
    }

    function checkAuthorNext(index) {
        const randNum = getRandom(0, 240);
        if (images[randNum].author === images[index].author) {
            checkAuthorNext(index);
        } else return randNum;
    }

    function countRight() {
        switch (visCorRes()) {
            case 'portrait':
                isPlayedPic.portrait = true;
                if (counterCorrectPic > corResPic.portrait) corResPic.portrait = counterCorrectPic;
                break;
            case 'landscape':
                isPlayedPic.landscape = true;
                if (counterCorrectPic > corResPic.landscape) corResPic.landscape = counterCorrectPic;
                break;
            case 'stillLife':
                isPlayedPic.stillLife = true;
                if (counterCorrectPic > corResPic.stillLife) corResPic.stillLife = counterCorrectPic;
                break;
            case 'graphic':
                isPlayedPic.graphic = true;
                if (counterCorrectPic > corResPic.graphic) corResPic.graphic = counterCorrectPic;
                break;
            case 'antique':
                isPlayedPic.antique = true;
                if (counterCorrectPic > corResPic.antique) corResPic.antique = counterCorrectPic;
                break;
            case 'avantGarde':
                isPlayedPic.avantGarde = true;
                if (counterCorrectPic > corResPic.avantGarde) corResPic.avantGarde = counterCorrectPic;
                break;
            case 'renaissance':
                isPlayedPic.renaissance = true;
                if (counterCorrectPic > corResPic.renaissance) corResPic.renaissance = counterCorrectPic;
                break;
            case 'surrealism':
                isPlayedPic.surrealism = true;
                if (counterCorrectPic > corResPic.surrealism) corResPic.surrealism = counterCorrectPic;
                break;
            case 'kitsch':
                isPlayedPic.kitsch = true;
                if (counterCorrectPic > corResPic.kitsch) corResPic.kitsch = counterCorrectPic;
                break;
            case 'minimalism':
                isPlayedPic.minimalism = true;
                if (counterCorrectPic > corResPic.minimalism) corResPic.minimalism = counterCorrectPic;
                break;
            case 'avangard':
                isPlayedPic.avangard = true;
                if (counterCorrectPic > corResPic.avangard) corResPic.avangard = counterCorrectPic;
                break;
            case 'industrial':
                isPlayedPic.industrial = true;
                if (counterCorrectPic > corResPic.industrial) corResPic.industrial = counterCorrectPic;
                break;
        }
        localStorage.setItem('corResPic', JSON.stringify(corResPic))
        localStorage.setItem('isPlayedPic', JSON.stringify(isPlayedPic))
    }

    function visCorRes() {
        switch (currentCategoriePic[0]) {
            case 0: return 'portrait';
            case 1: return 'landscape';
            case 2: return 'stillLife';
            case 3: return 'graphic';
            case 4: return 'antique';
            case 5: return 'avantGarde';
            case 6: return 'renaissance';
            case 7: return 'surrealism';
            case 8: return 'kitsch';
            case 9: return 'minimalism';
            case 10: return 'avangard';
            case 11: return 'industrial';
        }
    }

    function burgerMenu() {
        toPicQuiz.addEventListener('click', () => {
            changeContent();
            menuCheckBox.checked = false;
        })
    }
    burgerMenu()
}