const sendEmail = document.querySelector(".send_email");
const sendText = document.querySelector(".send_text");
const sendForm = document.querySelector(".send_form");
const sendButton = document.querySelector(".send_button");

sendForm.addEventListener("submit", removeInputAndLocalStorage);

console.log(localStorage.getItem("sendText") === null)

if(localStorage.getItem("sendEmail") === null || localStorage.getItem("sendText") === null){
    sendForm.addEventListener("input", sendToLocalStorage);
}else{
    sendEmail.value = localStorage.getItem("sendEmail");
    sendText.value = localStorage.getItem("sendText");
}

function sendToLocalStorage(event){
    const element = event.target;

    if(element.classList.contains("send_email")){
        localStorage.setItem("sendEmail", sendEmail.value);
    } else if(element.classList.contains("send_text")){
        localStorage.setItem("sendText", sendText.value);
    } else{
        return
    }
}

function removeInputAndLocalStorage(event){
    event.preventDefault();

    sendEmail.value = "";
    sendText.value = "";
    localStorage.removeItem("sendEmail");
    localStorage.removeItem("sendText");
}