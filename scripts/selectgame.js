let counter = 0;

/**
 * Vuelve al la página de inicio, pero antes te avisa de la pérdida de tus datos de juego
 * de elegir volver al inicio a través de este botón y no del correspondiente ("Check Out")
 * @method SelectGameBack()
 */

function SelectGameBack() {
    if (counter === 0) {
        alert('¿Seguro que quieres volver?\nSi vuelves sin darle al botón ' +
            '"Check Out" tu sesión terminará y se perderán todos los datos del juego en progreso.');
        counter += 1;
    } else {
        location.href = 'index.html';
    }
}

/**
 * Redirige al juego de la Ruleta
 * @method PlayRuleta()
 */

function PlayRuleta() {
    location.href = 'ruleta.html';
}

/**
 * Redirige al juego de los Slots
 * @method PlaySlots()
 */

function PlaySlots() {
    location.href = 'slots.html';
}

/**
 * Le permite al usuario finalizar su partida de manera correcta, cargando los datos de la misma
 * a la LeaderBoard
 * @method CheckOut()
 */

function CheckOut() {

}

/**
 * Se encarga de cargar/actualizar el nombre y el balance del usuario en la "ProfileCard"
 * @method ProfileCardDataLoading()
 */

function ProfileCardDataLoading() {
    let Username = sessionStorage.getItem("username");
    let Balance = sessionStorage.getItem("balance");
    let UsernameLabel = document.getElementById("inputname");
    let BalanceLabel = document.getElementById("bal");
    BalanceLabel.innerHTML = "$" + Balance + "⁰⁰";
    UsernameLabel.innerHTML = Username;
}

