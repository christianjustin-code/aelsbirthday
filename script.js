const navLinks= document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
})


const openBtn = document.getElementById("open-note-btn");
const passwordArea = document.getElementById("password-area");
const submitBtn = document.getElementById("submit-code");
const secretMessage = document.getElementById("secret-message");
const errorMessage = document.getElementById("error-message");

const correctCode = "2429";

openBtn.addEventListener("click", () => {
    passwordArea.classList.remove("hidden");
});

submitBtn.addEventListener("click", () => {
    const userInput = document.getElementById("secret-code").value;

    if (userInput === correctCode) {
        secretMessage.classList.remove("hidden");
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "Wrong code, try again.";
    }
});

document.getElementById("secret-code").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        submitBtn.click();
    }
});

const hintBox = document.getElementById("hint-box");
const hintConfirm = document.getElementById("hint-confirm");
const showHintBtn = document.getElementById("show-hint-btn");
const cancelHintBtn = document.getElementById("cancel-hint-btn");
const hintMessage = document.getElementById("hint-message");

hintBox.addEventListener("click", () => {
    hintConfirm.classList.remove("hidden");
});

showHintBtn.addEventListener("click", () => {
    hintMessage.classList.remove("hidden");
    hintConfirm.classList.add("hidden");
});

cancelHintBtn.addEventListener("click", () => {
    hintConfirm.classList.add("hidden");
});