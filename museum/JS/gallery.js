const leftColumn = document.querySelector('.left-column');
const middleColumn = document.querySelector('.middle-column');
const rightColumn = document.querySelector('.right-column');
// leftColumn.innerHTML = gallery1;

// const gallery1 = `<img src="images/gallery/galery2.jpg" alt="photo" width="455" height="456">`;

// const gallery2 = `<img src="images/gallery/galery9.jpg" alt="photo" width="455" height="570">`;

// const gallery3 = `<img src="images/gallery/galery4.jpg" alt="photo" width="455" height="456">`;

// const gallery4 = `<img src="images/gallery/galery6.jpg" alt="photo" width="455" height="570">`;

// const gallery5 = `<img src="images/gallery/galery13.jpg" alt="photo" width="455" height="456">`;

// const gallery6 = `<img src="images/gallery/galery1.jpg" alt="photo" width="455" height="456">`;

// const gallery7 = `<img src="images/gallery/galery8.jpg" alt="photo" width="455" height="570">`;

// const gallery8 = `<img src="images/gallery/galery3.jpg" alt="photo" width="455" height="570">`;

// const gallery9 = `<img src="images/gallery/galery5.jpg" alt="photo" width="455" height="456">`;

// const gallery10 = `<img src="images/gallery/galery11.jpg" alt="photo" width="455" height="456">`;

// const gallery11 = `<img src="images/gallery/galery7.jpg" alt="photo" width="455" height="570">`;

// const gallery12 = `<img src="images/gallery/galery10.jpg" alt="photo" width="455" height="456">`;

// const gallery13 = `<img src="images/gallery/galery15.jpg" alt="photo" width="455" height="456">`;

// const gallery14 = `<img src="images/gallery/galery12.jpg" alt="photo" width="455" height="456">`;

// const gallery15 = `<img src="images/gallery/galery14.jpg" alt="photo" width="455" height="570">`;

// let arrLeft = [gallery1, gallery2, gallery3, gallery4, gallery5];
// let arrMiddle = [gallery6, gallery7, gallery8, gallery9, gallery10];
// let arrRight = [gallery11, gallery12, gallery13, gallery14, gallery15];

const width = screen.width;
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const photoHeight1920 = [456, 570];
const photoHeight1024 = [304, 380];
nums.sort(() => Math.random() - 0.5);
nums.forEach(elem => {
    if (width > 1400) {
        elem < 6 ? leftColumn.innerHTML += `<img src="images/gallery/galery${nums[elem - 1]}.jpg" alt="photo" width="455" height="auto">` :
            elem >= 6 && elem < 11 ? middleColumn.innerHTML += `<img src="images/gallery/galery${nums[elem - 1]}.jpg" alt="photo" width="455" height="auto">` :
                elem >= 11 ? rightColumn.innerHTML += `<img src="images/gallery/galery${nums[elem - 1]}.jpg" alt="photo" width="455" height="auto">` : elem;
    } else
        elem < 6 ? leftColumn.innerHTML += `<img src="images/gallery/galery${nums[elem - 1]}.jpg" alt="photo" width="304" height="auto">` :
            elem >= 6 && elem < 11 ? middleColumn.innerHTML += `<img src="images/gallery/galery${nums[elem - 1]}.jpg" alt="photo" width="304" height="auto">` :
                elem >= 11 ? rightColumn.innerHTML += `<img src="images/gallery/galery${nums[elem - 1]}.jpg" alt="photo" width="304" height="auto">` : elem;
})