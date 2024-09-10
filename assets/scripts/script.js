let count = 0
const button = document.querySelector('#count');
const error = document.querySelector('#error');

function updateButtonText(){
    button.innerText = count + (count >= 1 ? ' counts' : ' count')
}

function increase(){
    count +=  1
    error.style.display = 'none';
    this.updateButtonText()
}

function decrease(){
    if(count === 0){
        error.style.display = 'block';
    }else{
        count -= 1
        this.updateButtonText()
    }
}

function reset(){
    count = 0;
    error.style.display = 'none';
    this.updateButtonText()
}