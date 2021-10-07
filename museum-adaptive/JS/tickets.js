let select;

function check() {
    let inp = document.getElementsByName('radio');
    for (let i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            select = Number.parseInt(inp[i].id);
        }
    }
}

const plusBasic = document.querySelector('.btn-plusb'),
    plusSen = document.querySelector('.btn-pluss'),
    total = document.querySelector('.total'),
    radioinp = document.querySelector('.ticket-type'),
    inpBasic = document.getElementById('i-basic'),
    inpSenior = document.getElementById('i-senior');

let totalPrice = 0;
let valueOfinp = true;
let counterB = 0;
let counterS = 0;

radioinp.addEventListener('click', () => {
    total.innerHTML = `Total € 0`;
    inpBasic.value = 0;
    inpSenior.value = 0;
    totalPrice = 0;
    counterB = 0;
    counterS = 0;
});

function plusB() {
    if (select === 1) {
        totalPrice += 20;
        counterB += 1;
        total.innerHTML = `Total € ${totalPrice}`;
    } else if (select === 2) {
        totalPrice += 25;
        counterB += 1;
        total.innerHTML = `Total € ${totalPrice}`;
    } else {
        totalPrice += 40;
        counterB += 1;
        total.innerHTML = `Total € ${totalPrice}`;
    }
}

function plusS() {
    if (select === 1) {
        totalPrice += 10;
        counterS += 1;
        total.innerHTML = `Total € ${totalPrice}`;
    } else if (select === 2) {
        totalPrice += 12.5;
        counterS += 1;
        total.innerHTML = `Total € ${totalPrice}`;
    } else {
        totalPrice += 20;
        counterS += 1;
        total.innerHTML = `Total € ${totalPrice}`;
    }
}

function minusB() {
    if (counterB === 0) {
        return false
    }
    if (select === 1) {
        totalPrice -= 20;
        counterB -= 1;
        total.innerHTML = `Total € ${totalPrice}`;
    } else if (select === 2) {
        totalPrice -= 25;
        counterB -= 1;
        total.innerHTML = `Total € ${totalPrice} `;
    } else {
        totalPrice -= 40;
        counterB -= 1;
        total.innerHTML = `Total € ${totalPrice} `;
    }
}

function minusS() {
    if (counterS === 0) {
        return false
    }
    if (select === 1) {
        totalPrice -= 10;
        counterS -= 1;
        total.innerHTML = `Total € ${totalPrice}`;
    } else if (select === 2) {
        totalPrice -= 12.5;
        counterS -= 1;
        total.innerHTML = `Total € ${totalPrice} `;
    } else {
        totalPrice -= 20;
        counterS -= 1;
        total.innerHTML = `Total € ${totalPrice} `;
    }
}