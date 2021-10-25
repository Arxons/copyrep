const quote = document.querySelector('.quote'),
    author = document.querySelector('.author'),
    changeBtn = document.querySelector('.change-quote');


async function getQuote() {
    const url = `${languages.quotes}`
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        const randNum = getRandom(1, 11);
        quote.textContent = data.quotes[Number.parseInt(randNum)].quote;
        author.textContent = data.quotes[Number.parseInt(randNum)].author;

    } else throw new Error('Error: 404 not found');
}

window.addEventListener('DOMContentLoaded', getQuote)
changeBtn.addEventListener('click', getQuote)