let totalPrice = 0,
    valueoOfinp = true,
    counterB = 0,
    counterS = 0,
    select = 0,
    selectIndex = 0


function check() {
    let inp = document.querySelectorAll('.ticket-type');
    for (let i = 1; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {

            select = Number.parseInt(inp[i].id);
            selectIndex = Number.parseInt(inp[i].id) - 1;
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
    select === 1 ? totalPrice = inpBasic.value * 20 + inpSenior.value * 10 :
        select === 2 ? totalPrice = inpBasic.value * 25 + inpSenior.value * 12.5 :
            select === 3 ? totalPrice = inpBasic.value * 40 + inpSenior.value * 20 : select;
    total.innerHTML = `Total € ${totalPrice}`;
});

function plusB() {
    if (select === 1) {
        totalPrice += 20;
        counterB += 1;
        total.innerHTML = `Total € ${totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpBasic.value = counterB;
    } else if (select === 2) {
        totalPrice += 25;
        counterB += 1;
        total.innerHTML = `Total € ${totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpBasic.value = counterB;
    } else {
        totalPrice += 40;
        counterB += 1;
        total.innerHTML = `Total € ${totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpBasic.value = counterB;
    }
}

function plusS() {
    if (select === 1) {
        totalPrice += 10;
        counterS += 1;
        total.innerHTML = `Total € ${totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpSenior.value = counterS;
    } else if (select === 2) {
        totalPrice += 12.5;
        counterS += 1;
        total.innerHTML = `Total € ${totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpSenior.value = counterS;
    } else {
        totalPrice += 20;
        counterS += 1;
        total.innerHTML = `Total € ${totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpSenior.value = counterS;
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
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpBasic.value = counterB;
    } else if (select === 2) {
        totalPrice -= 25;
        counterB -= 1;
        total.innerHTML = `Total € ${totalPrice} `;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpBasic.value = counterB;
    } else {
        totalPrice -= 40;
        counterB -= 1;
        total.innerHTML = `Total € ${totalPrice} `;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpBasic.value = counterB;
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
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpSenior.value = counterS;
    } else if (select === 2) {
        totalPrice -= 12.5;
        counterS -= 1;
        total.innerHTML = `Total € ${totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpSenior.value = counterS;
    } else {
        totalPrice -= 20;
        counterS -= 1;
        total.innerHTML = `Total € ${totalPrice}`;
        document.querySelector('.total-popup').innerHTML = `${totalPrice} €`;
        inpSenior.value = counterS;
    }
}