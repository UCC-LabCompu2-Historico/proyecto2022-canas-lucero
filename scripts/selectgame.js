let counter = 0;

function SelectGameBack() {
    if(counter === 0){
        alert('¿Seguro que quieres volver?\nSi vuelves sin darle al botón ' +
            '"Check Out" tu sesión terminará y se perderán todos los datos del juego en progreso.');
        counter+=1;
    }
    else{
        location.href = 'index.html';
    }
}

function PlayRuleta() {
    location.href = 'ruleta.html';
}

function PlaySlots() {
    location.href = 'slots.html';
}

function CheckOut() {

}

function ProfileCardDataLoading() {
    let Username = sessionStorage.getItem("username");
    let Balance = sessionStorage.getItem("balance");
    let UsernameLabel = document.getElementById("inputname");
    let BalanceLabel = document.getElementById("bal");
    BalanceLabel.innerHTML = "$" + Balance +"⁰⁰";
    UsernameLabel.innerHTML = Username;
}

