const tlacitko = document.getElementById("btn");
const result = document.getElementById("result");
const resetTlacitko = document.getElementById("resetbtn");
const minusTlacitko = document.getElementById("minusbtn");
let cislo = 0;

tlacitko.addEventListener("click", () => {
    cislo += 1
    result.textContent = cislo;
    
});

resetTlacitko.addEventListener("click", () => {
    cislo = 0
    result.textContent = cislo;
})

minusTlacitko.addEventListener("click", () => {
    cislo -= 1;
    result.textContent = cislo;
})