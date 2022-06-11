/**
 * Vuelve al la página de inicio
 * @method ProfileBack()
 */

function ProfileBack() {
    location.href = 'index.html';
}

/**
 * Verifica los datos ingresados por el usuario en el input de nombre,
 * y de ser correctos redirige a la página de Selección de Modo de Juego
 * @method Continue()
 */

function Continue() {
    let NameInput = document.getElementById("inputname")
    if (NameInput.value === '') {
        alert('Amig@ te olvidaste de escribir el nombre 👀')
    } else {
        if (NameInput.value.length <= 20 && NameInput.value.length >= 4) {
            sessionStorage.setItem("username", document.getElementById("inputname").value);
            sessionStorage.setItem("balance", 1000);
            location.href = 'selectgame.html';
        } else {
            alert('Ingrese un nombre de mínimo 4 caracteres y máximo 20')
            NameInput.value = ''; //Blanqueo del contenido del campo
        }
    }
}

document.addEventListener('keydown', function (key) {
    if (key.keyCode === 13) {
        Continue();
    }
});