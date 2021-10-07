const leftColumn = document.querySelector('.left-column');
const middleColumn = document.querySelector('.middle-column');
const rightColumn = document.querySelector('.right-column');

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
nums.sort(() => Math.random() - 0.5);
nums.forEach(elem => {
    elem < 6 ? leftColumn.innerHTML += `<img class="galpics" src="images/gallery/galery${nums[elem - 1]}.webp" alt="photo" width="455" height="auto">` :
        elem >= 6 && elem < 11 ? middleColumn.innerHTML += `<img class="galpics" src="images/gallery/galery${nums[elem - 1]}.webp" alt="photo" width="455" height="auto">` :
            elem >= 11 ? rightColumn.innerHTML += `<img class="galpics" src="images/gallery/galery${nums[elem - 1]}.webp" alt="photo" width="455" height="auto">` : elem;

})

const galpic = document.querySelectorAll('.galpics');

window.addEventListener('scroll', animate)

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
