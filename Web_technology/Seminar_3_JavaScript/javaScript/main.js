function GetValue() {
    var inputValue = document.getElementById('myInput').value;
    alert(inputValue);
}

var body = document.getElementById('page')
let themeButton = document.querySelector('.Theme_button')
themeButton.onclick = function() {
    body.classList.toggle('ligth')
    body.classList.toggle('dark')
}