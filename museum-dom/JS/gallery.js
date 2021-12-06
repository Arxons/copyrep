const leftColumn = document.querySelector('.left-column');
const middleColumn = document.querySelector('.middle-column');
const rightColumn = document.querySelector('.right-column');
const underCards = document.querySelector('.underline'),
    underContacts = document.querySelector('.underline-c'),
    vTour = document.querySelector('.v-tour'),
    eachCard = document.querySelectorAll('.each-card'),
    expInfo = document.querySelector('.explore-info'),
    expSpan = expInfo.querySelectorAll('span'),
    tTickets = document.querySelector('.t-tickets'),
    cContacts = document.querySelector('.c-contacts')

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
nums.sort(() => Math.random() - 0.5);
nums.forEach(elem => {
    elem < 6 ? leftColumn.innerHTML += `<img class="galpics" src="images/gallery/galery${nums[elem - 1]}.webp" alt="photo" width="455" height="auto">` :
        elem >= 6 && elem < 11 ? middleColumn.innerHTML += `<img class="galpics" src="images/gallery/galery${nums[elem - 1]}.webp" alt="photo" width="455" height="auto">` :
            elem >= 11 ? rightColumn.innerHTML += `<img class="galpics" src="images/gallery/galery${nums[elem - 1]}.webp" alt="photo" width="455" height="auto">` : elem;

})

const galpic = document.querySelectorAll('.galpics');

window.addEventListener('scroll', animate)

const animElems = [underCards, underContacts, vTour, tTickets, cContacts]

//anim elems
function animate() {
    galpic.forEach(elem => {
        const itemHeight = elem.offsetHeight;
        const itemOffset = getPosition(elem);
        const startPoint = window.innerHeight - itemHeight;

        if ((scrollY > itemOffset - startPoint) && scrollY < (itemOffset + itemHeight)) {
            elem.classList.add('onfocus')
        } else {
            elem.classList.remove('onfocus')
        }
    })

    animElems.forEach(elem => {
        const itemHeight = elem.offsetHeight;
        const itemOffset = getPosition(elem);
        const startPoint = window.innerHeight - itemHeight;

        if ((scrollY > itemOffset - startPoint) && scrollY < (itemOffset + itemHeight)) {
            elem.classList.add('focus')
        }
    })

    eachCard.forEach(elem => {
        const itemHeight = elem.offsetHeight;
        const itemOffset = getPosition(elem);
        const startPoint = window.innerHeight - itemHeight;

        if ((scrollY > itemOffset - startPoint) && scrollY < (itemOffset + itemHeight)) {
            elem.classList.add('focus')
        }
    })

    expSpan.forEach(elem => {
        const itemHeight = elem.offsetHeight;
        const itemOffset = getPosition(elem);
        const startPoint = window.innerHeight - itemHeight;

        if ((scrollY > itemOffset - startPoint / 1.5) && scrollY < (itemOffset + itemHeight)) {
            elem.style.transform = `translate(0)`
        }
    })
}

//position of element on page
function getPosition(element) {
    let yPosition = 0;

    while (element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return yPosition;
}
