const botão = document.getElementById ("botão");

botão.addEventListener ("change", (e) => {
    document.body.classList.toggle ("dark", e.target.checked)
})