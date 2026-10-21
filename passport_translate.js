function translatePassport() {
    const surnameNode = document.querySelector(".fio");
    const nameNode = document.querySelector(".name");
    const patronymicNode = document.querySelector(".middle_name");
    const btn = document.getElementById("for_click");

    if (surnameNode.innerHTML.trim() === "Вавилова") {
        surnameNode.innerHTML = "Vavilova";
        nameNode.innerHTML = "Maria";
        patronymicNode.innerHTML = "Antonovna";
        
        btn.innerText = "Вернуть кириллицу";
    } else {
        surnameNode.innerHTML = "Вавилова";
        nameNode.innerHTML = "Мария";
        patronymicNode.innerHTML = "Антоновна";
        
        btn.innerText = "Перевести на латиницу";
    }
}

const buttonNode = document.getElementById("for_click");
buttonNode.addEventListener("click", translatePassport);