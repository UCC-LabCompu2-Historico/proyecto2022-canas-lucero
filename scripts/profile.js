function ProfileBack() {
    location.href = 'index.html';
}

function Continue() {
    let NameInput = document.getElementById("inputname")
    if (NameInput.value === '') {
        alert('Amig@ te olvidaste de escribir el nombre 👀')
    } else {
        if(NameInput.value.length <= 20 && NameInput.value.length >= 4){
            sessionStorage.setItem("username", document.getElementById("inputname").value);
            sessionStorage.setItem("balance", 1000);
            location.href = 'selectgame.html';
        }
        else{
            alert('Ingrese un nombre de mínimo 4 caracteres y máximo 20')
            NameInput.value = ''; //Blanqueo del contenido del campo
        }
    }
}

document.addEventListener('keydown', function(key){
    if(key.keyCode === 13){
        Continue();
    }
} );