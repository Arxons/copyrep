let select;

function check() {
    let inp = document.getElementsByName('radio');
    for (let i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            select = Number.parseInt(inp[i].id);
            console.log(select)
        }
    }
}

const plusBasic = document.querySelector('.btn-plusb'),
    plusSen = document.querySelector('.btn-pluss'),
    total = document.querySelector('.total');

let checker = 0;
