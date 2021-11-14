const artist = document.querySelector('.artist'),
    workArea = document.querySelector('.wrapper-work');
import images from './images.js'

function changeContent() {
    workArea.innerHTML = `<div class="categories">
        <h2>Choose categorie</h2>
        <button class="portrait" type="button">
            <img src="./assets/img/0.jpg" alt="" width="150" height="150">
            Portrait
        </button>
        <button class="landscape" type="button">
            <img src="./assets/img/10.jpg" alt="" width="150" height="150">
            Landscape
        </button>
        <button class="still-life" type="button">
            <img src="./assets/img/20.jpg" alt="" width="150" height="150">
            Still Life
        </button>
        <button class="graphic" type="button">
            <img src="./assets/img/30.jpg" alt="" width="150" height="150">
            Graphic
        </button>
        <button class="antique" type="button">
            <img src="./assets/img/40.jpg" alt="" width="150" height="150">
            Antique
        </button>
        <button class="avant-garde" type="button">
            <img src="./assets/img/50.jpg" alt="" width="150" height="150">
            Avant-Garde
        </button>
        <button class="renaissance" type="button">
            <img src="./assets/img/60.jpg" alt="" width="150" height="150">
            Renaissance
        </button>
        <button class="surrealism" type="button">
            <img src="./assets/img/70.jpg" alt="" width="150" height="150">
            Surrealism
        </button>
        <button class="kitsch" type="button">
            <img src="./assets/img/80.jpg" alt="" width="150" height="150">
            Kitsch
        </button>
        <button class="minimalism" type="button">
            <img src="./assets/img/90.jpg" alt="" width="150" height="150">
            Minimalism
        </button>
        <button class="avangard" type="button">
            <img src="./assets/img/100.jpg" alt="" width="150" height="150">
            Avangard
        </button>
        <button class="industrial" type="button">
            <img src="./assets/img/110.jpg" alt="" width="150" height="150">
            Industrial
        </button>
    </div>`
    chooseCategorie()
}

artist.addEventListener('click', changeContent)

function chooseCategorie() {
    const allBtns = document.querySelectorAll('button');
    allBtns.forEach((el, i) => {
        allBtns[i].addEventListener('click', () => {
            if (i == 0) {
                workArea.innerHTML = `<h2 class="question">Кто автор данной картины?</h2>
                <img class="quest-img" src="./assets/img/${0}.jpg" alt="" width="150" height="150">
                <ul class="answers">
                    ${correctAnswer(i)}
                </ul>
                <div class="counter">
                    <div class="all-answers">1/10</div>
                    <div class="correct-answers">Correct answers: 0</div>
                </div>`
            } else {
                workArea.innerHTML = `<h2 class="question">Кто автор данной картины?</h2>
                <img class="quest-img" src="./assets/img/${i}0.jpg" alt="" width="150" height="150">
                <ul class="answers">
                    ${correctAnswer(i * 10)}
                </ul>
                <div class="counter">
                    <div class="all-answers">1/10</div>
                    <div class="correct-answers">Correct answers: 0</div>
                </div>`
            }
        })
    })
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function correctAnswer(i) {
    let answers = null;
    const random = getRandom(1, 4)
    if (random === 1) {
        answers = `<li class="correct">${images[i].author}</li>
        <li>${images[i + 1].author}</li>
        <li>${images[i + 2].author}</li>
        <li>${images[i + 3].author}</li>`
    } else if (random === 2) {
        answers = `<li>${images[i + 1].author}</li>
        <li class="correct">${images[i].author}</li>
        <li>${images[i + 2].author}</li>
        <li>${images[i + 3].author}</li>`
    } else if (random === 3) {
        answers = `<li>${images[i + 1].author}</li>
        <li>${images[i + 2].author}</li>
        <li class="correct">${images[i].author}</li>
        <li>${images[i + 3].author}</li>`
    } else if (random === 4) {
        answers = `<li>${images[i + 1].author}</li>
        <li>${images[i + 2].author}</li>
        <li>${images[i + 3].author}</li>
        <li class="correct">${images[i].author}</li>`
    }
    return answers;
}

