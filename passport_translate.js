function translatePassport() {
    // Находим элементы по КЛАССАМ (они есть в твоем HTML)
    const surnameNode = document.querySelector(".fio");
    const nameNode = document.querySelector(".name");
    const patronymicNode = document.querySelector(".middle_name");
    const btn = document.getElementById("for_click");

    // Проверяем текущее состояние
    if (surnameNode.innerHTML.trim() === "Вавилова") {
        // Меняем на латиницу
        surnameNode.innerHTML = "Vavilova";
        nameNode.innerHTML = "Maria";
        patronymicNode.innerHTML = "Antonovna";
        
        btn.innerText = "Вернуть кириллицу";
    } else {
        // Возвращаем обратно на кириллицу
        surnameNode.innerHTML = "Вавилова";
        nameNode.innerHTML = "Мария";
        patronymicNode.innerHTML = "Антоновна";
        
        btn.innerText = "Перевести на латиницу";
    }
}

// Находим кнопку и вешаем на неё событие клика
const buttonNode = document.getElementById("for_click");
buttonNode.addEventListener("click", translatePassport);