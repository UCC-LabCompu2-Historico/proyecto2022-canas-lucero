/**
 * Te redirige a la página de creación de perfil
 * @method PlayReDirect()
 */

function PlayReDirect() {
    location.href = 'profile.html';

}

/**
 * Abre la tabla de puntuaciones
 * @method AbrirLeaderBoard()
 */

function AbrirLeaderBoard() {

    var DivLB = document.getElementById("LeaderBoard");
    var LBBtn = document.getElementById("LeaderBoardBtn");
    var CJBtn = document.getElementById("HowToPlay");

    DivLB.style.display = "block";
    LBBtn.setAttribute("disabled", "disabled");
    CJBtn.setAttribute("disabled", "disabled");

    // LoadLeaderBoardData();

}

/**
 * Cierra la tabla de puntuaciones
 * @method CerrarLeaderBoard()
 */

function CerrarLeaderBoard() {
    var DivLB = document.getElementById("LeaderBoard");
    var LBBtn = document.getElementById("LeaderBoardBtn");
    var CJBtn = document.getElementById("HowToPlay");

    DivLB.style.display = "none";
    LBBtn.removeAttribute("disabled");
    CJBtn.removeAttribute("disabled");
}

/**
 * Abre la ventana de ¿Como jugar?
 * @method AbrirComoJugar()
 */

function AbrirComoJugar() {
    var DivCJ = document.getElementById("ComoJugar");
    var LBBtn = document.getElementById("LeaderBoardBtn");
    var CJBtn = document.getElementById("HowToPlay");

    DivCJ.style.display = "block";
    LBBtn.setAttribute("disabled", "disabled");
    CJBtn.setAttribute("disabled", "disabled");
}

/**
 * Cierra la ventana de ¿Como jugar?
 * @method CerrarComoJugar()
 */

function CerrarComoJugar() {
    var DivCJ = document.getElementById("ComoJugar");
    var LBBtn = document.getElementById("LeaderBoardBtn");
    var CJBtn = document.getElementById("HowToPlay");

    DivCJ.style.display = "none";
    LBBtn.removeAttribute("disabled");
    CJBtn.removeAttribute("disabled");
}

/* LEADERBOARD CONFIG */

