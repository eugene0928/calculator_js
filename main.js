let display = document.querySelector("#display");
let [c, r] = document.querySelectorAll(".remove-element");
let nums = document.querySelectorAll(".num");
let signs = document.querySelectorAll(".sign");
let equal = document.querySelector(".equal");
let dot  = document.querySelector('.dot');
let val1 = '';
let val2 = '';
let sign_ = '';
let sign_pressed = false;

class Calculator {
    constructor() {
        this.num_press()
        this.signs_press()
        this.equal_press()
        this.c_press()
        this.r_press()
        this.dot_press()
    }

    num_press() {
        for (let num of nums) {
            num.addEventListener("click", function () {
                if (!sign_pressed) {
                    val1 += num.textContent;
                    display.value = (+val1).toString();
                    console.log("1", val1);
                } else {
                    val2 += num.textContent;
                    display.value = (+val2).toString();
                    console.log("2", val2);
                }
            });
        }
    }

    signs_press() {
        for (let sign of signs) {
            sign.addEventListener("click", function () {
                if(val1)
                    sign_pressed = true;
                sign_ = sign.textContent
            })
        }
    }

    equal_press() {
        equal.addEventListener('click', function() {
            if(val1 && val2) {
                switch (sign_) {
                    case '+':
                        val1 = ((parseFloat(val1) + parseFloat(val2))).toString()
                        val2 = ''
                        val1 = trim_dot(val1)
                        display.value = val1
                        sign_pressed = false
                        break

                    case '-':
                        val1 = ((parseFloat(val1) - parseFloat(val2))).toString()
                        val2 = ''
                        val1 = trim_dot(val1)
                        display.value = val1
                        sign_pressed = false
                        break

                    case 'x':
                        val1 = ((parseFloat(val1) * parseFloat(val2))).toString()
                        val2 = ''
                        val1 = trim_dot(val1)
                        display.value = val1
                        sign_pressed = false
                        break

                    case '÷':
                        val1 = ((parseFloat(val1) / parseFloat(val2))).toString()
                        val2 = ''
                        val1 = trim_dot(val1);
                        display.value = val1
                        sign_pressed = false
                        break

                }
            }
        })
    }

    c_press() {
        c.addEventListener('click', () => {
            val1 = "";
            val2 = ""; sign_ = "";
            sign_pressed = false;
            display.value = "";
        })
    }

    r_press() {
        r.addEventListener('click', () => {

            if(val1.length === 1 && !val2) {
                val1 = '';
                val2 = '';
                sign_ = '';
                sign_pressed = false;
                display.value = '';
            }
            else if(!val2 && val1.length > 0) {
                val1 = val1.slice(0, val1.length-1)
                display.value = val1
                console.log('val1 ' + val1.length)
            } else if(val1 && val2.length >= 1) {
                val2 = val2.slice(0, val2.length-1)
                display.value = val2
                console.log('val2 ' + val2.length)
            }
        })
    }

    dot_press() {
        dot.addEventListener('click', () => {

            if(val1 && !val2 && !val1.includes(dot.textContent)) {
                val1 += dot.textContent
                display.value = val1
            } else if(val2 && !val2.includes(dot.textContent)) {
                val2 += dot.textContent
                display.value = val2
            }
        })
    }
}

function trim_dot(val) {
    let dot_index = val.indexOf('.')
    if(dot_index !== -1 && (val.slice(dot_index, val.length)).length > 9) {
        val = (parseFloat(val).toFixed(9)).toString()
    }
    return val;
}


let calc = new Calculator()