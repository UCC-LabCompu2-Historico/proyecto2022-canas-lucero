function ProfileBack() {
    location.href = 'index.html';
}

function Continue() {
    let NameInput = document.getElementById("inputname")
    if (NameInput.value === '') {
        alert('Amig@ te olvidaste de escribir el nombre 👀')
    } else {
        sessionStorage.setItem("username", document.getElementById("inputname").value);
        location.href = 'selectgame.html';
    }

}
