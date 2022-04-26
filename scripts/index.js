function PlayReDirect() {
    location.href = 'selectgame.html';
}

function LeaderBoard() {

    var DivLB = document.getElementById("LeaderBoard");
    var LBBtn = document.getElementById("LeaderBoardBtn");
    var CJBtn = document.getElementById("HowToPlay");

    DivLB.style.display = "block";
    LBBtn.setAttribute("disabled", "disabled");
    CJBtn.setAttribute("disabled", "disabled");

}

function CerrarLeaderBoard() {
    var DivLB = document.getElementById("LeaderBoard");
    var LBBtn = document.getElementById("LeaderBoardBtn");
    var CJBtn = document.getElementById("HowToPlay");

    DivLB.style.display = "none";
    LBBtn.removeAttribute("disabled");
    CJBtn.removeAttribute("disabled");
}

function ComoJugar() {
    var DivCJ = document.getElementById("ComoJugar");
    var LBBtn = document.getElementById("LeaderBoardBtn");
    var CJBtn = document.getElementById("HowToPlay");

    DivCJ.style.display = "block";
    LBBtn.setAttribute("disabled", "disabled");
    CJBtn.setAttribute("disabled", "disabled");
}

function CerrarComoJugar() {
    var DivCJ = document.getElementById("ComoJugar");
    var LBBtn = document.getElementById("LeaderBoardBtn");
    var CJBtn = document.getElementById("HowToPlay");

    DivCJ.style.display = "none";
    LBBtn.removeAttribute("disabled");
    CJBtn.removeAttribute("disabled");
}