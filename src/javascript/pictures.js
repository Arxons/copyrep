import images from './images.js';

export function initPic() {
    const pic = document.querySelector('.pictures');
    const workArea = document.querySelector('.wrapper-work'),
        popup = document.querySelector('.popup'),
        todo = document.querySelector('.todo'),
        toMenu = document.getElementById('menu'),
        toArtQuiz = document.getElementById('art-quiz'),
        toPicQuiz = document.getElementById('pic-quiz'),
        toSettings = document.getElementById('sett'),
        menuCheckBox = document.getElementById('menu__toggle')

    let counterCorrectPic = 0;
    let counterAllAnswPic = 1;
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

    let currentCategoriePic = [];

    function changeContent() {
        setTimeout(() => {
            workArea.innerHTML = `<div class="categories">
        <h2>Choose categorie</h2>
        <button class="portrait" type="button">  
        <div class="image-with-res" id="portrait">
            <img src="./assets/img/120.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.portrait}/9</p> 
        </div>                  
            Portrait            
        </button>
        <button class="landscape" type="button">
        <div class="image-with-res" id="landscape">
            <img src="./assets/img/130.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.landscape}/9</p> 
            </div>
            Landscape
        </button>
        <button class="still-life" type="button">
        <div class="image-with-res" id="still">
            <img src="./assets/img/140.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.stillLife}/9</p> 
            </div>
            Still Life
        </button>
        <button class="graphic" type="button">
        <div class="image-with-res" id="graphic">
            <img src="./assets/img/150.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.graphic}/9</p> 
            </div>
            Graphic
        </button>
        <button class="antique" type="button">
        <div class="image-with-res" id="antique">
            <img src="./assets/img/160.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.antique}/9</p> 
            </div>
            Antique
        </button>
        <button class="avant-garde" type="button">
        <div class="image-with-res" id="avant">
            <img src="./assets/img/170.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.avantGarde}/9</p> 
            </div>
            Avant-Garde
        </button>
        <button class="renaissance" type="button">
        <div class="image-with-res" id="renaissance">
            <img src="./assets/img/180.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.renaissance}/9</p> 
            </div>
            Renaissance
        </button>
        <button class="surrealism" type="button">
        <div class="image-with-res" id="surrealism">
            <img src="./assets/img/190.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.surrealism}/9</p> 
            </div>
            Surrealism
        </button>
        <button class="kitsch" type="button">
        <div class="image-with-res" id="kitsch">
            <img src="./assets/img/200.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.kitsch}/9</p> 
            </div>
            Kitsch
        </button>
        <button class="minimalism" type="button">
        <div class="image-with-res" id="minimalism">
            <img src="./assets/img/210.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.minimalism}/9</p> 
            </div>
            Minimalism
        </button>
        <button class="avangard" type="button">
        <div class="image-with-res" id="avangard">
            <img src="./assets/img/220.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.avangard}/9</p> 
            </div>
            Avangard
        </button>
        <button class="industrial" type="button">
        <div class="image-with-res" id="industrial">
            <img src="./assets/img/230.jpg" alt="" width="150" height="150">
            <p class="res">${corResPic.industrial}/9</p> 
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
        const allBtns = document.querySelectorAll('button');
        allBtns.forEach((el, i) => {
            allBtns[i].addEventListener('click', () => {
                if (i < 8) {
                    workArea.innerHTML = `<div class="pic-questions">
                    <ul class="pic-answers">
                        <h2 class="pic-question question">Какую картину написал ${images[Number.parseInt(`1${i + 2}0`)].author}?</h2>
                        ${getAnswers(i)}
                    </ul>
                    <div class="pic-counter counter">
                        <div class="correct-answers">Correct answers: 0</div>
                        <div class="all-answers">Question: 1/9</div>
                    </div>;
                </div>`;
                    correctAnswer(i + 1)
                } else {
                    workArea.innerHTML = `<div class="pic-questions">
                    <ul class="pic-answers">
                        <h2 class="pic-question question">Какую картину написал ${images[Number.parseInt(`2${i - 8}0`)].author}?</h2>
                        ${getAnswers(i)}
                    </ul>
                    <div class="pic-counter counter">
                        <div class="correct-answers">Correct answers: 0</div>
                        <div class="all-answers">Question: 1/9</div>
                    </div>;
                </div>`;
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



    function correctAnswer(index) {
        const corAnsw = document.querySelector('.correct');
        const incorAnsw = document.querySelectorAll('.incorrect');
        let lowerIndex = 0;
        currentCategoriePic.push(index);
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
            setTimeout(() => todo.style.transform = 'translate(0, 43%)', 100)
            goNext.addEventListener('click', () => {
                popup.style.display = 'none';
                todo.style.transform = 'translate(0, 145%)';
                counterCorrectPic++
                counterAllAnswPic++
                images[index].isCorrect = true;
                workArea.innerHTML = `<h2 class="question">Кто автор данной картины?</h2>
        <img class="quest-img" src="./assets/img/${index + 1}.jpg" alt="" width="150" height="150">
        <ul class="answers">
            ${getAnswers(index + 1)}
        </ul>
        <div class="counter">            
    <div class="correct-answers">Correct answers: ${counterCorrectPic}</div>
    <div class="all-answers">Question: ${counterAllAnswPic}/9</div >
        </div > `
                correctAnswer(index + 1)
            })
            exit.addEventListener('click', () => {
                popup.style.display = 'none';
                todo.style.transform = 'translate(0, 145%)';
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
                setTimeout(() => todo.style.transform = 'translate(0, 43%)', 100)
                goNext.addEventListener('click', () => {
                    popup.style.display = 'none';
                    todo.style.transform = 'translate(0, 145%)';
                    counterAllAnswPic++
                    workArea.innerHTML = `<h2 class="question">Кто автор данной картины?</h2>
                <img class="quest-img" src="./assets/img/${index + 1}.jpg" alt="" width="150" height="150">
                <ul class="answers">
                    ${getAnswers(index + 1)}
                </ul>
                <div class="counter">            
            <div class="correct-answers">Correct answers: ${counterCorrectPic}</div>
            <div class="all-answers">Question: ${counterAllAnswPic}/9</div >
                </div > `
                    correctAnswer(index + 1)
                })
                exit.addEventListener('click', () => {
                    popup.style.display = 'none';
                    todo.style.transform = 'translate(0, 145%)';
                    countRight()
                    changeContent()
                })
            })
        })
        if (counterAllAnswPic == 9) {
            corAnsw.addEventListener('click', () => {
                counterCorrectPic++
                todo.innerHTML = `<img src="./assets/img/${index}.jpg" alt="">
                <p class="cor-incor">Верно!</p>
                <p class="description">Автор: ${images[index].author}</p>
                <p class="descr-results">Ваш результат ${counterCorrectPic} из 9</p>
                <p class="go-next">Продолжить</p>
                <p class="exit">Выйти</p>`;

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
                <p class="descr-results">Ваш результат ${counterCorrectPic} из 9</p>
                <p class="go-next">Продолжить</p>
                <p class="exit">Выйти</p>`;

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
                checkAuthor(index + 1);
            } else return randNum;
        } else {
            if (images[randNum].author === images[Number.parseInt(`2${index - 8}0`)].author) {
                checkAuthor(index + 1);
            } else return randNum;
        }
    }
}