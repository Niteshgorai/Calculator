let buttons = document.querySelector('.buttons');
let btn = buttons.querySelectorAll('span');
let value = document.getElementById('value');

for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function () {
        if (this.innerHTML == "=") {
            if (eval(value.innerHTML) == 'Infinity')
                value.innerHTML = "Cannot Divide by 0";
            else
            value.innerHTML = eval(value.innerHTML);
        }
        else if (this.innerHTML == 'Clear') {
            value.innerHTML = "";
        }
        else if (this.innerHTML == '⌫') {
            value.innerHTML = value.innerHTML.substring(0, value.innerHTML.length - 1);
        }
        else if (this.innerHTML == 'sin') {
            value.innerHTML = Math.sin(value.innerHTML * Math.PI / 180);
        }
        else if (this.innerHTML == 'cos') {
            value.innerHTML = Math.cos(value.innerHTML * Math.PI / 180);
        }
        else if (this.innerHTML == 'tan') {
            value.innerHTML = Math.tan(value.innerHTML * Math.PI / 180);
        }
        else if (this.innerHTML == 'log') {
            value.innerHTML = Math.log10(value.innerHTML);
        }
        else if (this.id == "pi") {
            value.innerHTML += Math.PI;
        }
        else if (this.id == "sup") {
            value.innerHTML = Math.pow(value.innerHTML,2);
        }
        else if (this.id == "sqrt") {
            value.innerHTML = Math.sqrt(value.innerHTML,2);
        }
        else if (this.innerHTML == "e") {
            value.innerHTML = Math.exp(value.innerHTML);
        }
        else if (this.innerHTML == 'x!') {
            var f = 1;
            for (let i = 1; i <= value.innerHTML; i++){
                f = f * i;
            }
            value.innerHTML = f;
        }
        else {
            value.innerHTML += this.innerHTML;
        }
    })
}