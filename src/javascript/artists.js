import images from './images.js';

function init() {
    const artist = document.querySelector('.artist'),
        workArea = document.querySelector('.wrapper-work'),
        popup = document.querySelector('.popup'),
        todo = document.querySelector('.todo'),
        nav = document.querySelector('.nav__arrow');

    let counterCorrect = 0;
    let counterAllAnsw = 1;
    let corRes = {
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
    let currentCategorie = [];
    let isMainScreen = true;

    function changeContent() {
        isMainScreen = false;
        navArrow();
        const mainScreen = document.querySelector('.main-screen')
        // mainScreen.style.opacity = '0'
        setTimeout(() => {
            workArea.innerHTML = `<div class="categories">
        <h2>Choose categorie</h2>
        <button class="portrait" type="button">  
        <div class="image-with-res" id="portrait">
            <img src="./assets/img/0.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.portrait}/9</p> 
        </div>                  
            Portrait            
        </button>
        <button class="landscape" type="button">
        <div class="image-with-res" id="landscape">
            <img src="./assets/img/10.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.landscape}/9</p> 
            </div>
            Landscape
        </button>
        <button class="still-life" type="button">
        <div class="image-with-res" id="still">
            <img src="./assets/img/20.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.stillLife}/9</p> 
            </div>
            Still Life
        </button>
        <button class="graphic" type="button">
        <div class="image-with-res" id="graphic">
            <img src="./assets/img/30.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.graphic}/9</p> 
            </div>
            Graphic
        </button>
        <button class="antique" type="button">
        <div class="image-with-res" id="antique">
            <img src="./assets/img/40.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.antique}/9</p> 
            </div>
            Antique
        </button>
        <button class="avant-garde" type="button">
        <div class="image-with-res" id="avant">
            <img src="./assets/img/50.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.avantGarde}/9</p> 
            </div>
            Avant-Garde
        </button>
        <button class="renaissance" type="button">
        <div class="image-with-res" id="renaissance">
            <img src="./assets/img/60.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.renaissance}/9</p> 
            </div>
            Renaissance
        </button>
        <button class="surrealism" type="button">
        <div class="image-with-res" id="surrealism">
            <img src="./assets/img/70.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.surrealism}/9</p> 
            </div>
            Surrealism
        </button>
        <button class="kitsch" type="button">
        <div class="image-with-res" id="kitsch">
            <img src="./assets/img/80.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.kitsch}/9</p> 
            </div>
            Kitsch
        </button>
        <button class="minimalism" type="button">
        <div class="image-with-res" id="minimalism">
            <img src="./assets/img/90.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.minimalism}/9</p> 
            </div>
            Minimalism
        </button>
        <button class="avangard" type="button">
        <div class="image-with-res" id="avangard">
            <img src="./assets/img/100.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.avangard}/9</p> 
            </div>
            Avangard
        </button>
        <button class="industrial" type="button">
        <div class="image-with-res" id="industrial">
            <img src="./assets/img/110.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.industrial}/9</p> 
            </div>
            Industrial
        </button>
    </div>`
            chooseCategorie()
            counterCorrect = 0;
            counterAllAnsw = 1
        }, 100)
        setTimeout(() => {
            const categories = document.querySelector('.categories');
            categories.style.opacity = '1'
        }, 200)
    }

    artist.addEventListener('click', changeContent)

    function chooseCategorie() {
        isMainScreen = false;
        navArrow();
        const allBtns = document.querySelectorAll('button');
        allBtns.forEach((el, i) => {
            allBtns[i].addEventListener('click', () => {
                if (i == 0) {
                    workArea.innerHTML = `<h2 class="question">Кто автор данной картины?</h2>
                <img class="quest-img" src="./assets/img/${0}.jpg" alt="" width="150" height="150">
                <ul class="answers">
                    ${getAnswers(i)}
                </ul>
                <div class="counter">                    
                    <div class="correct-answers">Correct answers: 0</div>
                    <div class="all-answers">1/9</div>
                </div>`;
                    correctAnswer(i + 1)
                } else {
                    workArea.innerHTML = `<h2 class="question">Кто автор данной картины?</h2>
                <img class="quest-img" src="./assets/img/${i}0.jpg" alt="" width="150" height="150">
                <ul class="answers">
                    ${getAnswers(i * 10)}
                </ul>
                <div class="counter">                    
                    <div class="correct-answers">Correct answers: 0</div>
                    <div class="all-answers">1/9</div>
                </div>`;
                    correctAnswer(i * 10)
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
        if (random === 1) {
            answers = `<li class="correct">${images[i].author}</li>
        <li class="incorrect">${images[i + 1].author}</li>
        <li class="incorrect">${images[i + 2].author}</li>
        <li class="incorrect">${images[i + 3].author}</li>`
        } else if (random === 2) {
            answers = `<li class="incorrect">${images[i + 1].author}</li>
        <li class="correct">${images[i].author}</li>
        <li class="incorrect">${images[i + 2].author}</li>
        <li class="incorrect">${images[i + 3].author}</li>`
        } else if (random === 3) {
            answers = `<li class="incorrect">${images[i + 1].author}</li>
        <li class="incorrect">${images[i + 2].author}</li>
        <li class="correct">${images[i].author}</li>
        <li class="incorrect">${images[i + 3].author}</li>`
        } else if (random === 4) {
            answers = `<li class="incorrect">${images[i + 1].author}</li>
        <li class="incorrect">${images[i + 2].author}</li>
        <li class="incorrect">${images[i + 3].author}</li>
        <li class="correct">${images[i].author}</li>`
        }
        return answers;
    }



    function correctAnswer(index) {
        const corAnsw = document.querySelector('.correct');
        const incorAnsw = document.querySelectorAll('.incorrect');
        let lowerIndex = 0;
        currentCategorie.push(index);
        if (index >= 10) lowerIndex = index % 10;
        todo.innerHTML = `<img src="./assets/img/${index}.jpg" alt="">
        <p class="cor-incor">Верно!</p>
        <p class="description">Автор: ${images[index].author}</p>
        <p class="go-next">Продолжить</p>
        <p class="exit">Выйти</p>`
        corAnsw.addEventListener('click', () => {
            const popup = document.querySelector('.popup');
            const goNext = document.querySelector('.go-next');
            const exit = document.querySelector('.exit');
            popup.style.display = 'block';
            setTimeout(() => todo.style.transform = 'translate(0, 0)', 100)
            goNext.addEventListener('click', () => {
                popup.style.display = 'none';
                todo.style.transform = 'translate(0, 100%)';
                counterCorrect++
                counterAllAnsw++
                images[index].isCorrect = true;
                workArea.innerHTML = `<h2 class="question">Кто автор данной картины?</h2>
        <img class="quest-img" src="./assets/img/${index + 1}.jpg" alt="" width="150" height="150">
        <ul class="answers">
            ${getAnswers(index + 1)}
        </ul>
        <div class="counter">            
    <div class="correct-answers">Correct answers: ${counterCorrect}</div>
    <div class="all-answers">${counterAllAnsw}/9</div >
        </div > `
                correctAnswer(index + 1)
            })
            exit.addEventListener('click', () => {
                popup.style.display = 'none';
                todo.style.transform = 'translate(0, 100%)';
                countRight()
                changeContent()
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
                setTimeout(() => todo.style.transform = 'translate(0, 0)', 100)
                goNext.addEventListener('click', () => {
                    popup.style.display = 'none';
                    todo.style.transform = 'translate(0, 100%)';
                    counterAllAnsw++
                    workArea.innerHTML = `<h2 class="question">Кто автор данной картины?</h2>
                <img class="quest-img" src="./assets/img/${index + 1}.jpg" alt="" width="150" height="150">
                <ul class="answers">
                    ${getAnswers(index + 1)}
                </ul>
                <div class="counter">            
            <div class="correct-answers">Correct answers: ${counterCorrect}</div>
            <div class="all-answers">${counterAllAnsw}/9</div >
                </div > `
                    correctAnswer(index + 1)
                })
                exit.addEventListener('click', () => {
                    popup.style.display = 'none';
                    todo.style.transform = 'translate(0, 100%)';
                    countRight()
                    changeContent()
                })
            })
        })
        if (counterAllAnsw == 9) {
            corAnsw.addEventListener('click', () => {
                counterCorrect++
                todo.innerHTML = `<img src="./assets/img/${index}.jpg" alt="">
                <p class="cor-incor">Верно!</p>
                <p class="description">Автор: ${images[index].author}</p>
                <p class="descr-results">Ваш результат ${counterCorrect} из 9</p>
                <p class="go-next">Продолжить</p>
                <p class="exit">Выйти</p>`;

                popup.style.display = 'block';
                setTimeout(() => todo.style.transform = 'translate(0, 0)', 100)

                const goNext = document.querySelector('.go-next');
                const exit = document.querySelector('.exit');

                goNext.style.paddingTop = '2%';

                goNext.addEventListener('click', () => {
                    popup.style.display = 'none';
                    todo.style.transform = 'translate(0, 100%)';
                    countRight()
                    changeContent()
                    currentCategorie = [];
                })
                exit.addEventListener('click', () => {
                    popup.style.display = 'none';
                    todo.style.transform = 'translate(0, 100%)';
                    countRight()
                    changeContent()
                    currentCategorie = [];
                })
            })
            incorAnsw.forEach((el, i) => {
                incorAnsw[i].addEventListener('click', () => {
                    todo.innerHTML = `<img src="./assets/img/${index}.jpg" alt="">
                <p class="cor-incor">Неверно!</p>
                <p class="description">Автор: ${images[index].author}</p>
                <p class="descr-results">Ваш результат ${counterCorrect} из 9</p>
                <p class="go-next">Продолжить</p>
                <p class="exit">Выйти</p>`;

                    popup.style.display = 'block';
                    setTimeout(() => todo.style.transform = 'translate(0, 0)', 100)

                    const goNext = document.querySelector('.go-next');
                    const exit = document.querySelector('.exit');

                    goNext.style.paddingTop = '2%';

                    goNext.addEventListener('click', () => {
                        popup.style.display = 'none';
                        todo.style.transform = 'translate(0, 100%)';
                        countRight()
                        changeContent()
                        currentCategorie = [];
                    })
                    exit.addEventListener('click', () => {
                        popup.style.display = 'none';
                        todo.style.transform = 'translate(0, 100%)';
                        countRight()
                        changeContent()
                        currentCategorie = [];
                    })
                })
            })
        }
    }

    function countRight() {
        switch (visCorRes()) {
            case 'portrait':
                if (counterCorrect > corRes.portrait) corRes.portrait = counterCorrect;
                break;
            case 'landscape':
                if (counterCorrect > corRes.landscape) corRes.landscape = counterCorrect;
                break;
            case 'stillLife':
                if (counterCorrect > corRes.stillLife) corRes.stillLife = counterCorrect;
                break;
            case 'graphic':
                if (counterCorrect > corRes.graphic) corRes.graphic = counterCorrect;
                break;
            case 'antique':
                if (counterCorrect > corRes.antique) corRes.antique = counterCorrect;
                break;
            case 'avantGarde':
                if (counterCorrect > corRes.avantGarde) corRes.avantGarde = counterCorrect;
                break;
            case 'renaissance':
                if (counterCorrect > corRes.renaissance) corRes.renaissance = counterCorrect;
                break;
            case 'surrealism':
                if (counterCorrect > corRes.surrealism) corRes.surrealism = counterCorrect;
                break;
            case 'kitsch':
                if (counterCorrect > corRes.kitsch) corRes.kitsch = counterCorrect;
                break;
            case 'minimalism':
                if (counterCorrect > corRes.minimalism) corRes.minimalism = counterCorrect;
                break;
            case 'avangard':
                if (counterCorrect > corRes.avangard) corRes.avangard = counterCorrect;
                break;
            case 'industrial':
                if (counterCorrect > corRes.industrial) corRes.industrial = counterCorrect;
                break;
        }
    }

    function visCorRes() {
        switch (currentCategorie[0]) {
            case 1: return 'portrait';
            case 10: return 'landscape';
            case 20: return 'stillLife';
            case 30: return 'graphic';
            case 40: return 'antique';
            case 50: return 'avantGarde';
            case 60: return 'renaissance';
            case 70: return 'surrealism';
            case 80: return 'kitsch';
            case 90: return 'minimalism';
            case 100: return 'avangard';
            case 110: return 'industrial';
        }
    }

    function navArrow() {
        if (isMainScreen) {
            nav.style.opacity = '0';
        } else {
            nav.style.opacity = '1';
            nav.addEventListener('click', () => {
                workArea.innerHTML = `<div class="main-screen">
            <button class="artist" type="button">
                <img src="./assets/img/1.jpg" alt="pic" width="150" height="150">
                Start artist quiz
            </button>
            <button class="pictures" type="button">
                <img src="./assets/img/2.jpg" alt="pic" width="150" height="150">
                Start pictures quiz
            </button>
            <button type="button">Settings</button>
        </div>`
                init()
                nav.style.opacity = '0';
                isMainScreen = true

            })
        }
    }
}

init()