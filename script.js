const box = document.querySelector('.Test')
const Input = document.querySelector('.input')
const pre = "You typed: "
document.addEventListener('DOMContentLoaded', function() {
    // 
})

document.addEventListener('keyup', function(input) {
    Input.textContent = pre + input.key
})