const leftColumn = document.querySelector('.left-column');
const middleColumn = document.querySelector('.middle-column');
const rightColumn = document.querySelector('.right-column');

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
nums.sort(() => Math.random() - 0.5);
nums.forEach(elem => {
    elem < 6 ? leftColumn.innerHTML += `<img src="images/gallery/galery${nums[elem - 1]}.webp" alt="photo" width="455" height="auto">` :
        elem >= 6 && elem < 11 ? middleColumn.innerHTML += `<img src="images/gallery/galery${nums[elem - 1]}.webp" alt="photo" width="455" height="auto">` :
            elem >= 11 ? rightColumn.innerHTML += `<img src="images/gallery/galery${nums[elem - 1]}.webp" alt="photo" width="455" height="auto">` : elem;

})
