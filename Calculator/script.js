let paragraphText = document.querySelector('.displayCalc');
let statement = ''

function allClear(){
    paragraphText.innerHTML = ''
    statement = ''
}

function deleteWord(){
    let word = paragraphText.innerHTML.trim().length;
    paragraphText.innerHTML = paragraphText.innerHTML.trim().slice(0, word-1)
    statement = paragraphText.innerHTML.trim()
}

function updateStatement(button){
    let update = button.textContent;
    if (button.textContent === 'x'){
        update = '*'
    }
    else if (button.textContent === 'AC') {
        update = ''
    }
    else if (button.textContent === 'DE') {
        update = ''
    }
    else if (button.textContent === '=') {
        update = ''
    }
    paragraphText.innerHTML += button.textContent;
    statement += update;

}

function calcResult(){
    paragraphText.innerHTML = eval(statement)
}
