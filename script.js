const box = document.querySelector('.Test')
document.addEventListener('DOMContentLoaded', function() {
    box.setAttribute("autofocus", "true")
    box.addEventListener('input', function(event) {
        box.value = event.data
    })
})
