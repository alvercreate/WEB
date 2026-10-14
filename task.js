function verify() {
    console.log ("сейчас мы находимся в a ")
    let a = parseInt(elementA.value);
    console.log(a)
    if ((a%500 == 0) || (a%100 == 0) || (a%10 == 0) && (a%2 == 0)){ 
    
        document.getElementById('result').value= "число" +a + "можно разменять";
        check = true;    
    }
    else {  

        document.getElementById('result').value= "число" +a + "нельзя разменять";
        check = false;
    }
}

function send() {
console.log("я внутри функции send")
    if (check == true) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

const elementA = document.getElementById("a");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send);