const buyNowBTN = document.querySelector('.buy-now'),
    totalPopup = document.querySelector('.total-popup'),
    quantityBasic = document.querySelector('.count-basic'),
    quantitySenior = document.querySelector('.count-sen'),
    priceBasic = document.querySelector('.price-basic'),
    priceSenior = document.querySelector('.price-senior'),
    ticketCostBas = document.querySelector('.bas'),
    ticketCostSen = document.querySelector('.sen'),
    formInpBas = document.querySelector('.forminp-basic'),
    formInpSen = document.querySelector('.forminp-senior'),
    formSelect = document.querySelector('.ticket__type');

buyNowBTN.addEventListener('click', valuesDisplacement);
formSelect.addEventListener('click', checkSelectedIndex);
formSelect.addEventListener('click', changeExhib)
formSelect.addEventListener('change', () => {
    document.querySelector('.kindof').innerHTML = `${formSelect.value}`
});

function valuesDisplacement() {
    totalPopup.innerHTML = `${typeWithPrice.totalPrice} €`;
    quantityBasic.innerHTML = `${typeWithPrice.counterB}`;
    quantitySenior.innerHTML = `${typeWithPrice.counterS}`;

    check();
    let basicValue = 0;
    let seniorValue = 0;
    if (typeWithPrice.select === 1) {
        basicValue = typeWithPrice.counterB * 20;
        seniorValue = typeWithPrice.counterS * 10;
        ticketCostBas.innerHTML = `Basic (20 €)`;
        ticketCostSen.innerHTML = `Senior (10 €)`;
        ticketCostBas.style.margin = '0 256px 5px 10px'; //Дичайшие костыли, лучше не трогать
        ticketCostSen.style.margin = '0 247px 5px 10px'; //Дичайшие костыли, лучше не трогать
        document.querySelector('.kindof').innerHTML = 'Permanent exhibition'
    } else if (typeWithPrice.select === 2) {
        basicValue = typeWithPrice.counterB * 25;
        seniorValue = typeWithPrice.counterS * 12.5;
        ticketCostBas.innerHTML = `Basic (25 €)`;
        ticketCostSen.innerHTML = `Senior (12.5 €)`;
        ticketCostBas.style.margin = '0 252px 5px 10px'; //Дичайшие костыли, лучше не трогать
        ticketCostSen.style.margin = '0 211px 5px 10px'; //Дичайшие костыли, лучше не трогать
        document.querySelector('.kindof').innerHTML = 'Temporary exhibition'
    } else {
        basicValue = typeWithPrice.counterB * 40;
        seniorValue = typeWithPrice.counterS * 20;
        ticketCostBas.innerHTML = `Basic (40 €)`;
        ticketCostSen.innerHTML = `Senior (20 €)`;
        ticketCostBas.style.margin = '0 256px 5px 10px'; //Дичайшие костыли, лучше не трогать
        ticketCostSen.style.margin = '0 247px 5px 10px'; //Дичайшие костыли, лучше не трогать
        document.querySelector('.kindof').innerHTML = 'Combined admission'
    }

    priceBasic.innerHTML = `${basicValue} €`;
    priceSenior.innerHTML = `${seniorValue} €`;

    formInpBas.value = typeWithPrice.counterB;
    formInpSen.value = typeWithPrice.counterS;
    formSelect.options[typeWithPrice.selectIndex].selected = true;
}

function checkSelectedIndex() {
    typeWithPrice.selectIndex = formSelect.options.selectedIndex;
    total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
    totalPopup.innerHTML = `${typeWithPrice.totalPrice} €`;
}

function formPlusB() {
    let basicValue = 0;
    let seniorValue = 0;
    if (typeWithPrice.selectIndex === 0) {
        typeWithPrice.totalPrice += 20;
        typeWithPrice.counterB += 1;
        basicValue = typeWithPrice.counterB * 20;
        seniorValue = typeWithPrice.counterS * 10;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpBasic.value = typeWithPrice.counterB;
    } else if (typeWithPrice.selectIndex === 1) {
        typeWithPrice.totalPrice += 25;
        typeWithPrice.counterB += 1;
        basicValue = typeWithPrice.counterB * 25;
        seniorValue = typeWithPrice.counterS * 12.5;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpBasic.value = typeWithPrice.counterB;
    } else {
        typeWithPrice.totalPrice += 40;
        typeWithPrice.counterB += 1;
        basicValue = typeWithPrice.counterB * 40;
        seniorValue = typeWithPrice.counterS * 20;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpBasic.value = typeWithPrice.counterB;
    }
    priceBasic.innerHTML = `${basicValue} €`;
    priceSenior.innerHTML = `${seniorValue} €`;
    quantityBasic.innerHTML = `${typeWithPrice.counterB}`;
    quantitySenior.innerHTML = `${typeWithPrice.counterS}`;
    localStorage.setItem('valuesOfprice', JSON.stringify(typeWithPrice))
}

function formPlusS() {
    let basicValue = 0;
    let seniorValue = 0;
    if (typeWithPrice.selectIndex === 0) {
        typeWithPrice.totalPrice += 10;
        typeWithPrice.counterS += 1;
        basicValue = typeWithPrice.counterB * 20;
        seniorValue = typeWithPrice.counterS * 10;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpSenior.value = typeWithPrice.counterS;
    } else if (typeWithPrice.selectIndex === 1) {
        typeWithPrice.totalPrice += 12.5;
        typeWithPrice.counterS += 1;
        basicValue = typeWithPrice.counterB * 25;
        seniorValue = typeWithPrice.counterS * 12.5;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpSenior.value = typeWithPrice.counterS;
    } else {
        typeWithPrice.totalPrice += 20;
        typeWithPrice.counterS += 1;
        basicValue = typeWithPrice.counterB * 40;
        seniorValue = typeWithPrice.counterS * 20;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpSenior.value = typeWithPrice.counterS;
    }
    priceBasic.innerHTML = `${basicValue} €`;
    priceSenior.innerHTML = `${seniorValue} €`;
    quantityBasic.innerHTML = `${typeWithPrice.counterB}`;
    quantitySenior.innerHTML = `${typeWithPrice.counterS}`;
    localStorage.setItem('valuesOfprice', JSON.stringify(typeWithPrice))
}

function formMinusB() {
    let basicValue = 0;
    let seniorValue = 0;
    if (typeWithPrice.counterB === 0) {
        return false
    }
    if (typeWithPrice.selectIndex === 0) {
        typeWithPrice.totalPrice -= 20;
        typeWithPrice.counterB -= 1;
        basicValue = typeWithPrice.counterB * 20;
        seniorValue = typeWithPrice.counterS * 10;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpBasic.value = typeWithPrice.counterB;
    } else if (typeWithPrice.selectIndex === 1) {
        typeWithPrice.totalPrice -= 25;
        typeWithPrice.counterB -= 1;
        basicValue = typeWithPrice.counterB * 25;
        seniorValue = typeWithPrice.counterS * 12.5;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice} `;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpBasic.value = typeWithPrice.counterB;
    } else {
        typeWithPrice.totalPrice -= 40;
        typeWithPrice.counterB -= 1;
        basicValue = typeWithPrice.counterB * 40;
        seniorValue = typeWithPrice.counterS * 20;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice} `;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpBasic.value = typeWithPrice.counterB;
    }
    priceBasic.innerHTML = `${basicValue} €`;
    priceSenior.innerHTML = `${seniorValue} €`;
    quantityBasic.innerHTML = `${typeWithPrice.counterB}`;
    quantitySenior.innerHTML = `${typeWithPrice.counterS}`;
    localStorage.setItem('valuesOfprice', JSON.stringify(typeWithPrice))
}

function formMinusS() {
    let basicValue = 0;
    let seniorValue = 0;
    if (typeWithPrice.counterS === 0) {
        return false
    }
    if (typeWithPrice.selectIndex === 0) {
        typeWithPrice.totalPrice -= 10;
        typeWithPrice.counterS -= 1;
        basicValue = typeWithPrice.counterB * 20;
        seniorValue = typeWithPrice.counterS * 10;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpSenior.value = typeWithPrice.counterS;
    } else if (typeWithPrice.selectIndex === 1) {
        typeWithPrice.totalPrice -= 12.5;
        typeWithPrice.counterS -= 1;
        basicValue = typeWithPrice.counterB * 25;
        seniorValue = typeWithPrice.counterS * 12.5;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpSenior.value = typeWithPrice.counterS;
    } else {
        typeWithPrice.totalPrice -= 20;
        typeWithPrice.counterS -= 1;
        basicValue = typeWithPrice.counterB * 40;
        seniorValue = typeWithPrice.counterS * 20;
        total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${typeWithPrice.totalPrice} €`;
        inpSenior.value = typeWithPrice.counterS;
    }
    priceBasic.innerHTML = `${basicValue} €`;
    priceSenior.innerHTML = `${seniorValue} €`;
    quantityBasic.innerHTML = `${typeWithPrice.counterB}`;
    quantitySenior.innerHTML = `${typeWithPrice.counterS}`;
    localStorage.setItem('valuesOfprice', JSON.stringify(typeWithPrice))
}

function changeExhib() {
    checkSelectedIndex()
    console.log(typeWithPrice.selectIndex)
    if (typeWithPrice.selectIndex === 0) {
        typeWithPrice.totalPrice = typeWithPrice.counterB * 20 + typeWithPrice.counterS * 10;
        ticketCostBas.innerHTML = `Basic (20 €)`;
        ticketCostSen.innerHTML = `Senior (10 €)`;
    } else if (typeWithPrice.selectIndex === 1) {
        typeWithPrice.totalPrice = typeWithPrice.counterB * 25 + typeWithPrice.counterS * 12.5;
        ticketCostBas.innerHTML = `Basic (25 €)`;
        ticketCostSen.innerHTML = `Senior (12.5 €)`;
    } else if (typeWithPrice.selectIndex === 2) {
        typeWithPrice.totalPrice = typeWithPrice.counterB * 40 + typeWithPrice.counterS * 20;
        ticketCostBas.innerHTML = `Basic (40 €)`;
        ticketCostSen.innerHTML = `Senior (20 €)`;
    }
    total.innerHTML = `Total € ${typeWithPrice.totalPrice}`;

    totalPopup.innerHTML = `${typeWithPrice.totalPrice} €`;
}