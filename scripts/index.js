function PlayReDirect() {
    location.href = 'profile.html';

}

function AbrirLeaderBoard() {

    var DivLB = document.getElementById("LeaderBoard");
    var LBBtn = document.getElementById("LeaderBoardBtn");
    var CJBtn = document.getElementById("HowToPlay");

    DivLB.style.display = "block";
    LBBtn.setAttribute("disabled", "disabled");
    CJBtn.setAttribute("disabled", "disabled");

    LoadLeaderBoardData();

}

function CerrarLeaderBoard() {
    var DivLB = document.getElementById("LeaderBoard");
    var LBBtn = document.getElementById("LeaderBoardBtn");
    var CJBtn = document.getElementById("HowToPlay");

    DivLB.style.display = "none";
    LBBtn.removeAttribute("disabled");
    CJBtn.removeAttribute("disabled");
}

function AbrirComoJugar() {
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

/* LEADERBOARD CONFIG */

function LoadLeaderBoardData(){
    const leaderboard = [
        {
            name: 'MaximoLR',
            score: 10
        },
        {
            name: 'Lucas',
            score: 3
        },
        {
            name: 'Bro',
            score: 5
        }
    ];
    const LBTable = document.getElementById('LB');

}
