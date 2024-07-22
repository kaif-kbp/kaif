let screen = document.querySelector("#output");

let first = null;
let operator = null;
let second= null;
let curr = 0;

function enterNumber(num){
    screen.innerHTML += num;

    if(isNaN(curr)){
        //curr ha number nahi
            second = num;
            curr=second;
    }else{
        // curr ha number ahe
        console.log("before" + curr  + " " +  num);
        if(first == null && second == null){
            first = parseFloat(curr.toString() + ((num == ".") ? "." : num ));
            console.log("without convert " + curr.toString() + ((num == ".") ? "." : num ));
            curr = first;
        }else if(second == null){
            first = parseFloat(curr.toString() + ((num == ".") ? "." : num ));
            console.log("without convert " + curr.toString() + ((num == ".") ? "." : num ));     
            curr = first;
        }else{
            second =  parseFloat(curr.toString() + ((num == ".") ? "." : num ));
            console.log("without convert " + curr.toString() + ((num == ".") ? "." : num ));
            curr=second;
        }

        console.log(first + " " + second);
    }

}


function enterOperator(op){
    screen.innerHTML += op;
    if(operator == null){
        operator = op;
        curr = operator;
        return;
    }else{
        if(op != "="){
        calculate();
        screen.innerHTML += op;
        operator = op;
        curr = operator;
        }else{
            calculate();
            operator = null;
            second= null;
            curr = first;
        }
    }
}


function calculate(){

    switch(operator){
        case "+":
            first = parseFloat(first) + parseFloat(second);
            break;
        case "-":
            first = parseFloat(first) - parseFloat(second);
            break;    
        case "/":
            first = parseFloat(first) / parseFloat(second);
            break;
        case "*":
            first = parseFloat(first) * parseFloat(second);
            break;                 
    }

    screen.innerHTML = first;
}


function clearScreen(){
    first = null;
    second = null;
    operator = null;
    curr = 0;
    screen.innerHTML ='';
}