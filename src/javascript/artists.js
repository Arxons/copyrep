import images from './images.js';
import { initPic } from './pictures.js';

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

let isPlayed = {
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

let corImages = []

function init() {
    corRes = JSON.parse(localStorage.getItem('corRes'))
    if (JSON.parse(localStorage.getItem('isPlayed')) != null) {
        isPlayed = JSON.parse(localStorage.getItem('isPlayed'))
    }

    const artist = document.querySelector('.artist'),
        workArea = document.querySelector('.wrapper-work'),
        popup = document.querySelector('.popup'),
        todo = document.querySelector('.todo'),
        toMenu = document.getElementById('menu'),
        toArtQuiz = document.getElementById('art-quiz'),
        toPicQuiz = document.getElementById('pic-quiz'),
        toSettings = document.getElementById('sett'),
        toResults = document.getElementById('results'),
        menuCheckBox = document.getElementById('menu__toggle'),
        resultsBtn = document.querySelector('.results')

    artist.addEventListener('click', changeContent)

    let counterCorrect = 0;
    let counterAllAnsw = 1;
    let currentCategorie = [];

    function changeContent() {
        setTimeout(() => {
            workArea.innerHTML = `<div class="categories">
        <h2>Choose categorie</h2>
        <button class="portrait" type="button">  
        <div class="image-with-res ${isPlayed.portrait === true ? 'played' : ''}" id="portrait">
            <img src="./assets/img/0.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.portrait}/9</p> 
        </div>                  
            Portrait            
        </button>
        <button class="landscape" type="button">
        <div class="image-with-res ${isPlayed.landscape === true ? 'played' : ''}" id="landscape">
            <img src="./assets/img/10.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.landscape}/9</p> 
            </div>
            Landscape
        </button>
        <button class="still-life" type="button">
        <div class="image-with-res ${isPlayed.stillLife === true ? 'played' : ''}" id="still">
            <img src="./assets/img/20.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.stillLife}/9</p> 
            </div>
            Still Life
        </button>
        <button class="graphic" type="button">
        <div class="image-with-res ${isPlayed.graphic === true ? 'played' : ''}" id="graphic">
            <img src="./assets/img/30.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.graphic}/9</p> 
            </div>
            Graphic
        </button>
        <button class="antique" type="button">
        <div class="image-with-res ${isPlayed.antique === true ? 'played' : ''}" id="antique">
            <img src="./assets/img/40.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.antique}/9</p> 
            </div>
            Antique
        </button>
        <button class="avant-garde" type="button">
        <div class="image-with-res ${isPlayed.avantGarde === true ? 'played' : ''}" id="avant">
            <img src="./assets/img/50.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.avantGarde}/9</p> 
            </div>
            Avant-Garde
        </button>
        <button class="renaissance" type="button">
        <div class="image-with-res ${isPlayed.renaissance === true ? 'played' : ''}" id="renaissance">
            <img src="./assets/img/60.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.renaissance}/9</p> 
            </div>
            Renaissance
        </button>
        <button class="surrealism" type="button">
        <div class="image-with-res ${isPlayed.surrealism === true ? 'played' : ''}" id="surrealism">
            <img src="./assets/img/70.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.surrealism}/9</p> 
            </div>
            Surrealism
        </button>
        <button class="kitsch" type="button">
        <div class="image-with-res ${isPlayed.kitsch === true ? 'played' : ''}" id="kitsch">
            <img src="./assets/img/80.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.kitsch}/9</p> 
            </div>
            Kitsch
        </button>
        <button class="minimalism" type="button">
        <div class="image-with-res ${isPlayed.minimalism === true ? 'played' : ''}" id="minimalism">
            <img src="./assets/img/90.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.minimalism}/9</p> 
            </div>
            Minimalism
        </button>
        <button class="avangard" type="button">
        <div class="image-with-res ${isPlayed.avangard === true ? 'played' : ''}" id="avangard">
            <img src="./assets/img/100.jpg" alt="" width="150" height="150">
            <p class="res">${corRes.avangard}/9</p> 
            </div>
            Avangard
        </button>
        <button class="industrial" type="button">
        <div class="image-with-res ${isPlayed.industrial === true ? 'played' : ''}" id="industrial">
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

    function chooseCategorie() {
        const allBtns = document.querySelectorAll('button');
        currentCategorie = [];
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
                    <div class="all-answers">Question: 1/9</div>
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
                    <div class="all-answers">Question: 1/9</div>
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
            setTimeout(() => todo.style.transform = 'translate(0, 43%)', 100)
            goNext.addEventListener('click', () => {
                popup.style.display = 'none';
                todo.style.transform = 'translate(0, 145%)';
                counterCorrect++
                counterAllAnsw++
                images[index].isCorrect = true;
                corImages.push(images[index])
                workArea.innerHTML = `<h2 class="question">Кто автор данной картины?</h2>
        <img class="quest-img" src="./assets/img/${index + 1}.jpg" alt="" width="150" height="150">
        <ul class="answers">
            ${getAnswers(index + 1)}
        </ul>
        <div class="counter">            
    <div class="correct-answers">Correct answers: ${counterCorrect}</div>
    <div class="all-answers">Question: ${counterAllAnsw}/9</div >
        </div > `
                correctAnswer(index + 1)
                countRight()
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
                    counterAllAnsw++
                    workArea.innerHTML = `<h2 class="question">Кто автор данной картины?</h2>
                <img class="quest-img" src="./assets/img/${index + 1}.jpg" alt="" width="150" height="150">
                <ul class="answers">
                    ${getAnswers(index + 1)}
                </ul>
                <div class="counter">            
            <div class="correct-answers">Correct answers: ${counterCorrect}</div>
            <div class="all-answers">Question: ${counterAllAnsw}/9</div >
                </div > `
                    correctAnswer(index + 1)
                    countRight()
                })
                exit.addEventListener('click', () => {
                    popup.style.display = 'none';
                    todo.style.transform = 'translate(0, 145%)';
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
                    currentCategorie = [];
                })
                exit.addEventListener('click', () => {
                    popup.style.display = 'none';
                    todo.style.transform = 'translate(0, 145%)';
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
                        currentCategorie = [];
                    })
                    exit.addEventListener('click', () => {
                        popup.style.display = 'none';
                        todo.style.transform = 'translate(0, 145%)';
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
                isPlayed.portrait = true;
                if (counterCorrect > corRes.portrait) corRes.portrait = counterCorrect;
                break;
            case 'landscape':
                isPlayed.landscape = true;
                if (counterCorrect > corRes.landscape) corRes.landscape = counterCorrect;
                break;
            case 'stillLife':
                isPlayed.stillLife = true;
                if (counterCorrect > corRes.stillLife) corRes.stillLife = counterCorrect;
                break;
            case 'graphic':
                isPlayed.graphic = true;
                if (counterCorrect > corRes.graphic) corRes.graphic = counterCorrect;
                break;
            case 'antique':
                isPlayed.antique = true;
                if (counterCorrect > corRes.antique) corRes.antique = counterCorrect;
                break;
            case 'avantGarde':
                isPlayed.avantGarde = true;
                if (counterCorrect > corRes.avantGarde) corRes.avantGarde = counterCorrect;
                break;
            case 'renaissance':
                isPlayed.renaissance = true;
                if (counterCorrect > corRes.renaissance) corRes.renaissance = counterCorrect;
                break;
            case 'surrealism':
                isPlayed.surrealism = true;
                if (counterCorrect > corRes.surrealism) corRes.surrealism = counterCorrect;
                break;
            case 'kitsch':
                isPlayed.kitsch = true;
                if (counterCorrect > corRes.kitsch) corRes.kitsch = counterCorrect;
                break;
            case 'minimalism':
                isPlayed.minimalism = true;
                if (counterCorrect > corRes.minimalism) corRes.minimalism = counterCorrect;
                break;
            case 'avangard':
                isPlayed.avangard = true;
                if (counterCorrect > corRes.avangard) corRes.avangard = counterCorrect;
                break;
            case 'industrial':
                isPlayed.industrial = true;
                if (counterCorrect > corRes.industrial) corRes.industrial = counterCorrect;
                break;
        }
        localStorage.setItem('corRes', JSON.stringify(corRes))
        localStorage.setItem('isPlayed', JSON.stringify(isPlayed))
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

    function burgerMenu() {
        toMenu.addEventListener('click', () => {
            workArea.innerHTML = `<div class="main-screen">
                    <ul class="main-categories">
                        <li class="first-li">
                            <button class="artist" type="button">                            
                                Start artist quiz
                            </button>
                        </li>
                        <li>
                            <button class="pictures" type="button">
                                Start pictures quiz
                            </button>
                        </li>
                        <li>
                            <button type="button" class="results">Results</button>
                        </li>
                        <li>
                            <button type="button" class="settings">Settings</button>
                        </li>
                    </ul>
                </div>`
            menuCheckBox.checked = false;
            init()
        })

        toArtQuiz.addEventListener('click', () => {
            changeContent()
            menuCheckBox.checked = false;
        })

        toResults.addEventListener('click', () => {
            workArea.innerHTML = `<div class="main-screen">
            <ul class="main-categories">
                <li class="first-li">
                    <button class="artist-results" type="button">                            
                        Artist quiz results
                    </button>
                </li>
                <li>
                    <button class="pictures-results" type="button">
                        Pictures quiz results
                    </button>
                </li>`
            getArtistsCategorieRes()
            menuCheckBox.checked = false;
        })
    }

    function checkResults() {
        resultsBtn.addEventListener('click', () => {
            workArea.innerHTML = `<div class="main-screen">
            <ul class="main-categories">
                <li class="first-li">
                    <button class="artist-results" type="button">                            
                        Artist quiz results
                    </button>
                </li>
                <li>
                    <button class="pictures-results" type="button">
                        Pictures quiz results
                    </button>
                </li>`
            getArtistsCategorieRes()
        })
    }

    function getArtistsCategorieRes() {
        const artistsResBtn = document.querySelector('.artist-results')
        const picturesResBtn = document.querySelector('.pictures-results')

        artistsResBtn.addEventListener('click', () => {
            setTimeout(() => {
                workArea.innerHTML = `<div class="categories">
            <h2>Choose categorie</h2>
            <button class="portrait" type="button">  
            <div class="image-with-res ${isPlayed.portrait === true ? 'played' : ''}" id="portrait">
                <img src="./assets/img/0.jpg" alt="" width="150" height="150">
                <p class="res">${corRes.portrait}/9</p> 
            </div>                  
                Portrait            
            </button>
            <button class="landscape" type="button">
            <div class="image-with-res ${isPlayed.landscape === true ? 'played' : ''}" id="landscape">
                <img src="./assets/img/10.jpg" alt="" width="150" height="150">
                <p class="res">${corRes.landscape}/9</p> 
                </div>
                Landscape
            </button>
            <button class="still-life" type="button">
            <div class="image-with-res ${isPlayed.stillLife === true ? 'played' : ''}" id="still">
                <img src="./assets/img/20.jpg" alt="" width="150" height="150">
                <p class="res">${corRes.stillLife}/9</p> 
                </div>
                Still Life
            </button>
            <button class="graphic" type="button">
            <div class="image-with-res ${isPlayed.graphic === true ? 'played' : ''}" id="graphic">
                <img src="./assets/img/30.jpg" alt="" width="150" height="150">
                <p class="res">${corRes.graphic}/9</p> 
                </div>
                Graphic
            </button>
            <button class="antique" type="button">
            <div class="image-with-res ${isPlayed.antique === true ? 'played' : ''}" id="antique">
                <img src="./assets/img/40.jpg" alt="" width="150" height="150">
                <p class="res">${corRes.antique}/9</p> 
                </div>
                Antique
            </button>
            <button class="avant-garde" type="button">
            <div class="image-with-res ${isPlayed.avantGarde === true ? 'played' : ''}" id="avant">
                <img src="./assets/img/50.jpg" alt="" width="150" height="150">
                <p class="res">${corRes.avantGarde}/9</p> 
                </div>
                Avant-Garde
            </button>
            <button class="renaissance" type="button">
            <div class="image-with-res ${isPlayed.renaissance === true ? 'played' : ''}" id="renaissance">
                <img src="./assets/img/60.jpg" alt="" width="150" height="150">
                <p class="res">${corRes.renaissance}/9</p> 
                </div>
                Renaissance
            </button>
            <button class="surrealism" type="button">
            <div class="image-with-res ${isPlayed.surrealism === true ? 'played' : ''}" id="surrealism">
                <img src="./assets/img/70.jpg" alt="" width="150" height="150">
                <p class="res">${corRes.surrealism}/9</p> 
                </div>
                Surrealism
            </button>
            <button class="kitsch" type="button">
            <div class="image-with-res ${isPlayed.kitsch === true ? 'played' : ''}" id="kitsch">
                <img src="./assets/img/80.jpg" alt="" width="150" height="150">
                <p class="res">${corRes.kitsch}/9</p> 
                </div>
                Kitsch
            </button>
            <button class="minimalism" type="button">
            <div class="image-with-res ${isPlayed.minimalism === true ? 'played' : ''}" id="minimalism">
                <img src="./assets/img/90.jpg" alt="" width="150" height="150">
                <p class="res">${corRes.minimalism}/9</p> 
                </div>
                Minimalism
            </button>
            <button class="avangard" type="button">
            <div class="image-with-res ${isPlayed.avangard === true ? 'played' : ''}" id="avangard">
                <img src="./assets/img/100.jpg" alt="" width="150" height="150">
                <p class="res">${corRes.avangard}/9</p> 
                </div>
                Avangard
            </button>
            <button class="industrial" type="button">
            <div class="image-with-res ${isPlayed.industrial === true ? 'played' : ''}" id="industrial">
                <img src="./assets/img/110.jpg" alt="" width="150" height="150">
                <p class="res">${corRes.industrial}/9</p> 
                </div>
                Industrial
            </button>
        </div>`
                getArtistsRes()
            }, 100)
            setTimeout(() => {
                const categories = document.querySelector('.categories');
                categories.style.opacity = '1'
            }, 200)
        })
    }

    function getArtistsRes() {
        const allBtns = document.querySelectorAll('button');
        allBtns.forEach((el, i) => {
            allBtns[i].addEventListener('click', () => {
                if (i == 0) {
                    workArea.innerHTML = `<div class="art-res-images">                    
                </div>`;
                    const artResImg = document.querySelector('.art-res-images');
                    for (let ind = 0; ind < 10; ind++) {
                        const artWithDescr = document.createElement('div')
                        const image = document.createElement('img');
                        const author = document.createElement('p')
                        const nameArt = document.createElement('p')
                        artWithDescr.classList.add('art-with-descr')
                        author.innerHTML = `Автор: ${images[ind].author}`
                        nameArt.innerHTML = `Название: ${images[ind].name}`
                        image.src = `./assets/img/${ind}.jpg`;
                        image.classList.add('res-img')
                        artWithDescr.appendChild(image)
                        artWithDescr.appendChild(author)
                        artWithDescr.appendChild(nameArt)
                        artResImg.appendChild(artWithDescr);
                        if (images[ind].isCorrect) image.classList.add('played')
                    }

                } else {
                    workArea.innerHTML = `<div class="art-res-images">                    
                    </div>`;
                    const artResImg = document.querySelector('.art-res-images');
                    for (let ind = 0; ind < 10; ind++) {
                        const artWithDescr = document.createElement('div');
                        const image = document.createElement('img');
                        const author = document.createElement('p')
                        const nameArt = document.createElement('p')
                        artWithDescr.classList.add('art-with-descr');
                        author.innerHTML = `Автор: ${images[Number.parseInt(`${i}${ind}`)].author}`
                        nameArt.innerHTML = `Название: ${images[Number.parseInt(`${i}${ind}`)].name}`
                        image.src = `./assets/img/${i}${ind}.jpg`;
                        image.classList.add('res-img')
                        artWithDescr.appendChild(image)
                        artWithDescr.appendChild(author)
                        artWithDescr.appendChild(nameArt)
                        artResImg.appendChild(artWithDescr);
                        if (images[Number.parseInt(`${i}${ind}`)].isCorrect) image.classList.add('played')
                    }
                }
            })
        })
    }

    burgerMenu()
    initPic()
    checkResults()
}


init()