let typeWithPrice = {
    totalPrice: 0,
    valueoOfinp: true,
    counterB: 0,
    counterS: 0,
    select: 0,
    selectIndex: 0
}

function check() {
    let inp = document.querySelectorAll('.ticket-type');
    for (let i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            typeWithPrice.select = Number.parseInt(inp[i].id);
            typeWithPrice.selectIndex = Number.parseInt(inp[i].id) - 1;
        }
    }
}

const plusBasic = document.querySelector('.btn-plusb'),
    plusSen = document.querySelector('.btn-pluss'),
    total = document.querySelector('.total'),
    radioinp = document.querySelector('.ticket-type'),
    inpBasic = document.getElementById('i-basic'),
    inpSenior = document.getElementById('i-senior'),
    inpRadioAll = document.querySelectorAll('.ticket-type');

radioinp.addEventListener('click', () => {
    check();
    typeWithPrice.select === 1 ? typeWithPrice.totalPrice = inpBasic.value * 20 + inpSenior.value * 10 :
        typeWithPrice.select === 2 ? typeWithPrice.totalPrice = inpBasic.value * 25 + inpSenior.value * 12.5 :
            typeWithPrice.select === 3 ? typeWithPrice.totalPrice = inpBasic.value * 40 + inpSenior.value * 20 : typeWithPrice.select;
    total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
    localStorage.setItem('valuesOfprice', JSON.stringify(typeWithPrice))
});

function plusB() {
    if (typeWithPrice.select === 1) {
        typeWithPrice.totalPrice += 20;
        typeWithPrice.counterB += 1;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpBasic.value = typeWithPrice.counterB;
    } else if (typeWithPrice.select === 2) {
        typeWithPrice.totalPrice += 25;
        typeWithPrice.counterB += 1;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpBasic.value = typeWithPrice.counterB;
    } else {
        typeWithPrice.totalPrice += 40;
        typeWithPrice.counterB += 1;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpBasic.value = typeWithPrice.counterB;
    }
    localStorage.setItem('valuesOfprice', JSON.stringify(typeWithPrice))
}

function plusS() {
    if (typeWithPrice.select === 1) {
        typeWithPrice.totalPrice += 10;
        typeWithPrice.counterS += 1;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpSenior.value = typeWithPrice.counterS;
    } else if (typeWithPrice.select === 2) {
        typeWithPrice.totalPrice += 12.5;
        typeWithPrice.counterS += 1;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpSenior.value = typeWithPrice.counterS;
    } else {
        typeWithPrice.totalPrice += 20;
        typeWithPrice.counterS += 1;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpSenior.value = typeWithPrice.counterS;
    }
    localStorage.setItem('valuesOfprice', JSON.stringify(typeWithPrice))
}

function minusB() {
    if (typeWithPrice.counterB === 0) {
        return false
    }
    if (typeWithPrice.select === 1) {
        typeWithPrice.totalPrice -= 20;
        typeWithPrice.counterB -= 1;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpBasic.value = typeWithPrice.counterB;
    } else if (typeWithPrice.select === 2) {
        typeWithPrice.totalPrice -= 25;
        typeWithPrice.counterB -= 1;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice} `;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpBasic.value = typeWithPrice.counterB;
    } else {
        typeWithPrice.totalPrice -= 40;
        typeWithPrice.counterB -= 1;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice} `;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpBasic.value = typeWithPrice.counterB;
    }
    localStorage.setItem('valuesOfprice', JSON.stringify(typeWithPrice))
}

function minusS() {
    if (typeWithPrice.counterS === 0) {
        return false
    }
    if (typeWithPrice.select === 1) {
        typeWithPrice.totalPrice -= 10;
        typeWithPrice.counterS -= 1;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpSenior.value = typeWithPrice.counterS;
    } else if (typeWithPrice.select === 2) {
        typeWithPrice.totalPrice -= 12.5;
        typeWithPrice.counterS -= 1;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpSenior.value = typeWithPrice.counterS;
    } else {
        typeWithPrice.totalPrice -= 20;
        typeWithPrice.counterS -= 1;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpSenior.value = typeWithPrice.counterS;
    }
    localStorage.setItem('valuesOfprice', JSON.stringify(typeWithPrice))
}

typeWithPrice = JSON.parse(localStorage.getItem('valuesOfprice'));
total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
inpBasic.value = typeWithPrice.counterB;
inpSenior.value = typeWithPrice.counterS;
inpRadioAll[typeWithPrice.select].checked = 'checked';
