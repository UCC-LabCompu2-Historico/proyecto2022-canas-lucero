function Back(){
    location.href='index.html';
}

function Continue(){
    let NameInput = document.getElementById("inputname")
    if(NameInput.value === ''){
        alert('Amig@ te olvidaste de escribir el nombre 👀')
    }
    else{
        location.href='selectgame.html';
    }
}
