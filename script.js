const button = document.getElementById("btn");
const result = document.getElementById("result");
const resetButton = document.getElementById("resetbtn");
const minusButton = document.getElementById("minusbtn");
let cislo = 0;

button.addEventListener("click", () => {
    cislo += 1
    result.textContent = cislo;
    
});

resetButton.addEventListener("click", () => {
    cislo = 0
    result.textContent = cislo;
})

minusButton.addEventListener("click", () => {
    cislo -= 1;
    result.textContent = cislo;
})