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
    totalPopup.innerHTML = `${totalPrice} €`;
    quantityBasic.innerHTML = `${counterB}`;
    quantitySenior.innerHTML = `${counterS}`;

    check();
    let basicValue = 0;
    let seniorValue = 0;
    if (select === 1) {
        basicValue = counterB * 20;
        seniorValue = counterS * 10;
        ticketCostBas.innerHTML = `Basic (20 €)`;
        ticketCostSen.innerHTML = `Senior (10 €)`;
        ticketCostBas.style.margin = '0 256px 5px 10px'; //Дичайшие костыли, лучше не трогать
        ticketCostSen.style.margin = '0 247px 5px 10px'; //Дичайшие костыли, лучше не трогать
        document.querySelector('.kindof').innerHTML = 'Permanent exhibition'
    } else if (select === 2) {
        basicValue = counterB * 25;
        seniorValue = counterS * 12.5;
        ticketCostBas.innerHTML = `Basic (25 €)`;
        ticketCostSen.innerHTML = `Senior (12.5 €)`;
        ticketCostBas.style.margin = '0 252px 5px 10px'; //Дичайшие костыли, лучше не трогать
        ticketCostSen.style.margin = '0 211px 5px 10px'; //Дичайшие костыли, лучше не трогать
        document.querySelector('.kindof').innerHTML = 'Temporary exhibition'
    } else {
        basicValue = counterB * 40;
        seniorValue = counterS * 20;
        ticketCostBas.innerHTML = `Basic (40 €)`;
        ticketCostSen.innerHTML = `Senior (20 €)`;
        ticketCostBas.style.margin = '0 256px 5px 10px'; //Дичайшие костыли, лучше не трогать
        ticketCostSen.style.margin = '0 247px 5px 10px'; //Дичайшие костыли, лучше не трогать
        document.querySelector('.kindof').innerHTML = 'Combined admission'
    }

    priceBasic.innerHTML = `${basicValue} €`;
    priceSenior.innerHTML = `${seniorValue} €`;

    formInpBas.value = counterB;
    formInpSen.value = counterS;
    formSelect.options[selectIndex].selected = true;
}

function checkSelectedIndex() {
    selectIndex = formSelect.options.selectedIndex;
    total.innerHTML = `Total € ${totalPrice}`;
    totalPopup.innerHTML = `${totalPrice} €`;
}

function formPlusB() {
    let basicValue = 0;
    let seniorValue = 0;
    if (selectIndex === 0) {
        totalPrice += 20;
        counterB += 1;
        basicValue = counterB * 20;
        seniorValue = counterS * 10;
        total.innerHTML = `Total € ${totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpBasic.value = counterB;
    } else if (selectIndex === 1) {
        totalPrice += 25;
        counterB += 1;
        basicValue = counterB * 25;
        seniorValue = counterS * 12.5;
        total.innerHTML = `Total € ${totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpBasic.value = counterB;
    } else {
        totalPrice += 40;
        counterB += 1;
        basicValue = counterB * 40;
        seniorValue = counterS * 20;
        total.innerHTML = `Total € ${totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpBasic.value = counterB;
    }
    priceBasic.innerHTML = `${basicValue} €`;
    priceSenior.innerHTML = `${seniorValue} €`;
    quantityBasic.innerHTML = `${counterB}`;
    quantitySenior.innerHTML = `${counterS}`;
}

function formPlusS() {
    let basicValue = 0;
    let seniorValue = 0;
    if (selectIndex === 0) {
        totalPrice += 10;
        counterS += 1;
        basicValue = counterB * 20;
        seniorValue = counterS * 10;
        total.innerHTML = `Total € ${totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpSenior.value = counterS;
    } else if (selectIndex === 1) {
        totalPrice += 12.5;
        counterS += 1;
        basicValue = counterB * 25;
        seniorValue = counterS * 12.5;
        total.innerHTML = `Total € ${totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpSenior.value = counterS;
    } else {
        totalPrice += 20;
        counterS += 1;
        basicValue = counterB * 40;
        seniorValue = counterS * 20;
        total.innerHTML = `Total € ${totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpSenior.value = counterS;
    }
    priceBasic.innerHTML = `${basicValue} €`;
    priceSenior.innerHTML = `${seniorValue} €`;
    quantityBasic.innerHTML = `${counterB}`;
    quantitySenior.innerHTML = `${counterS}`;
}

function formMinusB() {
    let basicValue = 0;
    let seniorValue = 0;
    if (counterB === 0) {
        return false
    }
    if (selectIndex === 0) {
        totalPrice -= 20;
        counterB -= 1;
        basicValue = counterB * 20;
        seniorValue = counterS * 10;
        total.innerHTML = `Total € ${totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpBasic.value = counterB;
    } else if (selectIndex === 1) {
        totalPrice -= 25;
        counterB -= 1;
        basicValue = counterB * 25;
        seniorValue = counterS * 12.5;
        total.innerHTML = `Total € ${totalPrice} `;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpBasic.value = counterB;
    } else {
        totalPrice -= 40;
        counterB -= 1;
        basicValue = counterB * 40;
        seniorValue = counterS * 20;
        total.innerHTML = `Total € ${totalPrice} `;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpBasic.value = counterB;
    }
    priceBasic.innerHTML = `${basicValue} €`;
    priceSenior.innerHTML = `${seniorValue} €`;
    quantityBasic.innerHTML = `${counterB}`;
    quantitySenior.innerHTML = `${counterS}`;
}

function formMinusS() {
    let basicValue = 0;
    let seniorValue = 0;
    if (counterS === 0) {
        return false
    }
    if (selectIndex === 0) {
        totalPrice -= 10;
        counterS -= 1;
        basicValue = counterB * 20;
        seniorValue = counterS * 10;
        total.innerHTML = `Total € ${totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpSenior.value = counterS;
    } else if (selectIndex === 1) {
        totalPrice -= 12.5;
        counterS -= 1;
        basicValue = counterB * 25;
        seniorValue = counterS * 12.5;
        total.innerHTML = `Total € ${totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpSenior.value = counterS;
    } else {
        totalPrice -= 20;
        counterS -= 1;
        basicValue = counterB * 40;
        seniorValue = counterS * 20;
        total.innerHTML = `Total € ${totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpSenior.value = counterS;
    }
    priceBasic.innerHTML = `${basicValue} €`;
    priceSenior.innerHTML = `${seniorValue} €`;
    quantityBasic.innerHTML = `${counterB}`;
    quantitySenior.innerHTML = `${counterS}`;

}

function changeExhib() {
    checkSelectedIndex()
    console.log(selectIndex)
    if (selectIndex === 0) {
        totalPrice = counterB * 20 + counterS * 10;
        ticketCostBas.innerHTML = `Basic (20 €)`;
        ticketCostSen.innerHTML = `Senior (10 €)`;
    } else if (selectIndex === 1) {
        totalPrice = counterB * 25 + counterS * 12.5;
        ticketCostBas.innerHTML = `Basic (25 €)`;
        ticketCostSen.innerHTML = `Senior (12.5 €)`;
    } else if (selectIndex === 2) {
        totalPrice = counterB * 40 + counterS * 20;
        ticketCostBas.innerHTML = `Basic (40 €)`;
        ticketCostSen.innerHTML = `Senior (20 €)`;
    }
    total.innerHTML = `Total € ${totalPrice}`;

    totalPopup.innerHTML = `${totalPrice} €`;
}