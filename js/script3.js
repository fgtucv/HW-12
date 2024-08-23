const joinForm = document.querySelector('.join_form');
const joinName = document.querySelector('.join_name');
const joinPasword = document.querySelector('.join_pasword');
const joinButton = document.querySelector('.join_button');
const resultSpan = document.querySelector(".result");

joinForm.addEventListener("submit", join);

function join(event) {
    event.preventDefault();

    if (localStorage.getItem("joinPassword") === joinPasword.value && localStorage.getItem("joinName") === joinName.value) {
        resultSpan.textContent = "Ви успішно увійшли";
        resultSpan.style.color = "green"
        joinName.value = "";
        joinPasword.value = "";
    } else if (localStorage.getItem("joinPassword") === null && localStorage.getItem("joinName") === null) {
        localStorage.setItem("joinPassword", joinPasword.value);
        localStorage.setItem("joinName", joinName.value);
        resultSpan.textContent = "Ви успішно зарегіструвалися";
        resultSpan.style.color = "green"
        joinName.value = "";
        joinPasword.value = "";
    } else {
        resultSpan.textContent = "Такого акавнту не існує"
        resultSpan.style.color = "red"
        joinName.value = "";
        joinPasword.value = "";
    }
}