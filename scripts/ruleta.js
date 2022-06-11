let Balance = sessionStorage.getItem("balance");

/* TABLERO */

const Grid = {
    rows: 3, columns: 12,
};

let TableroPosCounter = {
    T1: 0,
    T2: 0,
    T3: 0,
    T4: 0,
    T5: 0,
    T6: 0,
    T7: 0,
    T8: 0,
    T9: 0,
    T10: 0,
    T11: 0,
    T12: 0,
    T13: 0,
    T14: 0,
    T15: 0,
    T16: 0,
    T17: 0,
    T18: 0,
    T19: 0,
    T20: 0,
    T21: 0,
    T22: 0,
    T23: 0,
    T24: 0,
    T25: 0,
    T26: 0,
    T27: 0,
    T28: 0,
    T29: 0,
    T30: 0,
    T31: 0,
    T32: 0,
    T33: 0,
    T34: 0,
    T35: 0,
    T36: 0,
};

let AmountDivs = {
    AT1: document.getElementById('AT1'),
    AT2: document.getElementById('AT2'),
    AT3: document.getElementById('AT3'),
    AT4: document.getElementById('AT4'),
    AT5: document.getElementById('AT5'),
    AT6: document.getElementById('AT6'),
    AT7: document.getElementById('AT7'),
    AT8: document.getElementById('AT8'),
    AT9: document.getElementById('AT9'),
    AT10: document.getElementById('AT10'),
    AT11: document.getElementById('AT11'),
    AT12: document.getElementById('AT12'),
    AT13: document.getElementById('AT13'),
    AT14: document.getElementById('AT14'),
    AT15: document.getElementById('AT15'),
    AT16: document.getElementById('AT16'),
    AT17: document.getElementById('AT17'),
    AT18: document.getElementById('AT18'),
    AT19: document.getElementById('AT19'),
    AT20: document.getElementById('AT20'),
    AT21: document.getElementById('AT21'),
    AT22: document.getElementById('AT22'),
    AT23: document.getElementById('AT23'),
    AT24: document.getElementById('AT24'),
    AT25: document.getElementById('AT25'),
    AT26: document.getElementById('AT26'),
    AT27: document.getElementById('AT27'),
    AT28: document.getElementById('AT28'),
    AT29: document.getElementById('AT29'),
    AT30: document.getElementById('AT30'),
    AT31: document.getElementById('AT31'),
    AT32: document.getElementById('AT32'),
    AT33: document.getElementById('AT33'),
    AT34: document.getElementById('AT34'),
    AT35: document.getElementById('AT35'),
    AT36: document.getElementById('AT36'),
}

const Fichas = {
    Azul: document.getElementById('fichaazul'),
    Roja: document.getElementById('ficharoja'),
    Verde: document.getElementById('fichaverde'),
    Negra: document.getElementById('fichanegra'),
}

let FS = 0;

let mouse = {
    x: null, y: null,
};

Fichas.Azul.addEventListener("click", function () {
    FS = 1;
});

Fichas.Roja.addEventListener("click", function () {
    FS = 2;
});
Fichas.Verde.addEventListener("click", function () {
    FS = 3;
});
Fichas.Negra.addEventListener("click", function () {
    FS = 4;
});

window.addEventListener('click', function (event) {

    const interactivecanvas = document.getElementById('tablero_fichas')
    const ctx = interactivecanvas.getContext('2d');
    const rect = interactivecanvas.getBoundingClientRect();
    const CW = interactivecanvas.width;
    const CH = interactivecanvas.height;

    switch (FS) {
        case 1:
            Fichas.Azul.style.border = "10px solid white";
            Fichas.Roja.style.border = "none";
            Fichas.Verde.style.border = "none";
            Fichas.Negra.style.border = "none";
            break;
        case 2:
            Fichas.Azul.style.border = "none";
            Fichas.Roja.style.border = "10px solid white";
            Fichas.Verde.style.border = "none";
            Fichas.Negra.style.border = "none";
            break;
        case 3:
            Fichas.Azul.style.border = "none";
            Fichas.Roja.style.border = "none";
            Fichas.Verde.style.border = "10px solid white";
            Fichas.Negra.style.border = "none";
            break;
        case 4:
            Fichas.Azul.style.border = "none";
            Fichas.Roja.style.border = "none";
            Fichas.Verde.style.border = "none";
            Fichas.Negra.style.border = "10px solid white";
            break;
    }

    mouse.x = CW * ((event.clientX - rect.left) / interactivecanvas.clientWidth);
    mouse.y = CH * ((event.clientY - rect.top) / interactivecanvas.clientHeight);

    if (FS !== 0) {
        if (mouse.x >= 0 && mouse.x <= CW / Grid.columns && mouse.y >= 0 && mouse.y <= CH / Grid.rows) {
            drawFicha(80, 180, FS, 3);
        } else if (mouse.x >= 0 && mouse.x <= CW / Grid.columns && mouse.y >= CH / Grid.rows && mouse.y <= 2 * CH / Grid.rows) {
            drawFicha(80, 540, FS, 2);
        } else if (mouse.x >= 0 && mouse.x <= CW / Grid.columns && mouse.y >= 2 * CH / Grid.rows && mouse.y <= 3 * CH / Grid.rows) {
            drawFicha(80, 900, FS, 1);
        } else if (mouse.x >= CW / Grid.columns && mouse.x <= 2 * CW / Grid.columns && mouse.y >= 0 && mouse.y <= CH / Grid.rows) {
            drawFicha(240, 180, FS, 6);
        } else if (mouse.x >= CW / Grid.columns && mouse.x <= 2 * CW / Grid.columns && mouse.y >= CH / Grid.rows && mouse.y <= 2 * CH / Grid.rows) {
            drawFicha(240, 540, FS, 5);
        } else if (mouse.x >= CW / Grid.columns && mouse.x <= 2 * CW / Grid.columns && mouse.y >= 2 * CH / Grid.rows && mouse.y <= 3 * CH / Grid.rows) {
            drawFicha(240, 900, FS, 4);
        } else if (mouse.x >= 2 * CW / Grid.columns && mouse.x <= 3 * CW / Grid.columns && mouse.y >= 0 && mouse.y <= CH / Grid.rows) {
            drawFicha(400, 180, FS, 9);
        } else if (mouse.x >= 2 * CW / Grid.columns && mouse.x <= 3 * CW / Grid.columns && mouse.y >= CH / Grid.rows && mouse.y <= 2 * CH / Grid.rows) {
            drawFicha(400, 540, FS, 8);
        } else if (mouse.x >= 2 * CW / Grid.columns && mouse.x <= 3 * CW / Grid.columns && mouse.y >= 2 * CH / Grid.rows && mouse.y <= 3 * CH / Grid.rows) {
            drawFicha(400, 900, FS, 7);
        } else if (mouse.x >= 3 * CW / Grid.columns && mouse.x <= 4 * CW / Grid.columns && mouse.y >= 0 && mouse.y <= CH / Grid.rows) {
            drawFicha(560, 180, FS, 12);
        } else if (mouse.x >= 3 * CW / Grid.columns && mouse.x <= 4 * CW / Grid.columns && mouse.y >= CH / Grid.rows && mouse.y <= 2 * CH / Grid.rows) {
            drawFicha(560, 540, FS, 11);
        } else if (mouse.x >= 3 * CW / Grid.columns && mouse.x <= 4 * CW / Grid.columns && mouse.y >= 2 * CH / Grid.rows && mouse.y <= 3 * CH / Grid.rows) {
            drawFicha(560, 900, FS, 10);
        } else if (mouse.x >= 4 * CW / Grid.columns && mouse.x <= 5 * CW / Grid.columns && mouse.y >= 0 && mouse.y <= CH / Grid.rows) {
            drawFicha(720, 180, FS, 15);
        } else if (mouse.x >= 4 * CW / Grid.columns && mouse.x <= 5 * CW / Grid.columns && mouse.y >= CH / Grid.rows && mouse.y <= 2 * CH / Grid.rows) {
            drawFicha(720, 540, FS, 14);
        } else if (mouse.x >= 4 * CW / Grid.columns && mouse.x <= 5 * CW / Grid.columns && mouse.y >= 2 * CH / Grid.rows && mouse.y <= 3 * CH / Grid.rows) {
            drawFicha(720, 900, FS, 13);
        } else if (mouse.x >= 5 * CW / Grid.columns && mouse.x <= 6 * CW / Grid.columns && mouse.y >= 0 && mouse.y <= CH / Grid.rows) {
            drawFicha(880, 180, FS, 18);
        } else if (mouse.x >= 5 * CW / Grid.columns && mouse.x <= 6 * CW / Grid.columns && mouse.y >= CH / Grid.rows && mouse.y <= 2 * CH / Grid.rows) {
            drawFicha(880, 540, FS, 17);
        } else if (mouse.x >= 5 * CW / Grid.columns && mouse.x <= 6 * CW / Grid.columns && mouse.y >= 2 * CH / Grid.rows && mouse.y <= 3 * CH / Grid.rows) {
            drawFicha(880, 900, FS, 16);
        } else if (mouse.x >= 6 * CW / Grid.columns && mouse.x <= 7 * CW / Grid.columns && mouse.y >= 0 && mouse.y <= CH / Grid.rows) {
            drawFicha(1040, 180, FS, 21);
        } else if (mouse.x >= 6 * CW / Grid.columns && mouse.x <= 7 * CW / Grid.columns && mouse.y >= CH / Grid.rows && mouse.y <= 2 * CH / Grid.rows) {
            drawFicha(1040, 540, FS, 20);
        } else if (mouse.x >= 6 * CW / Grid.columns && mouse.x <= 7 * CW / Grid.columns && mouse.y >= 2 * CH / Grid.rows && mouse.y <= 3 * CH / Grid.rows) {
            drawFicha(1040, 900, FS, 19);
        } else if (mouse.x >= 7 * CW / Grid.columns && mouse.x <= 8 * CW / Grid.columns && mouse.y >= 0 && mouse.y <= CH / Grid.rows) {
            drawFicha(1200, 180, FS, 24);
        } else if (mouse.x >= 7 * CW / Grid.columns && mouse.x <= 8 * CW / Grid.columns && mouse.y >= CH / Grid.rows && mouse.y <= 2 * CH / Grid.rows) {
            drawFicha(1200, 540, FS, 23);
        } else if (mouse.x >= 7 * CW / Grid.columns && mouse.x <= 8 * CW / Grid.columns && mouse.y >= 2 * CH / Grid.rows && mouse.y <= 3 * CH / Grid.rows) {
            drawFicha(1200, 900, FS, 22);
        } else if (mouse.x >= 8 * CW / Grid.columns && mouse.x <= 9 * CW / Grid.columns && mouse.y >= 0 && mouse.y <= CH / Grid.rows) {
            drawFicha(1360, 180, FS, 27);
        } else if (mouse.x >= 8 * CW / Grid.columns && mouse.x <= 9 * CW / Grid.columns && mouse.y >= CH / Grid.rows && mouse.y <= 2 * CH / Grid.rows) {
            drawFicha(1360, 540, FS, 26);
        } else if (mouse.x >= 8 * CW / Grid.columns && mouse.x <= 9 * CW / Grid.columns && mouse.y >= 2 * CH / Grid.rows && mouse.y <= 3 * CH / Grid.rows) {
            drawFicha(1360, 900, FS, 25);
        } else if (mouse.x >= 9 * CW / Grid.columns && mouse.x <= 10 * CW / Grid.columns && mouse.y >= 0 && mouse.y <= CH / Grid.rows) {
            drawFicha(1520, 180, FS, 30);
        } else if (mouse.x >= 9 * CW / Grid.columns && mouse.x <= 10 * CW / Grid.columns && mouse.y >= CH / Grid.rows && mouse.y <= 2 * CH / Grid.rows) {
            drawFicha(1520, 540, FS, 29);
        } else if (mouse.x >= 9 * CW / Grid.columns && mouse.x <= 10 * CW / Grid.columns && mouse.y >= 2 * CH / Grid.rows && mouse.y <= 3 * CH / Grid.rows) {
            drawFicha(1520, 900, FS, 28);
        } else if (mouse.x >= 10 * CW / Grid.columns && mouse.x <= 11 * CW / Grid.columns && mouse.y >= 0 && mouse.y <= CH / Grid.rows) {
            drawFicha(1680, 180, FS, 33);
        } else if (mouse.x >= 10 * CW / Grid.columns && mouse.x <= 11 * CW / Grid.columns && mouse.y >= CH / Grid.rows && mouse.y <= 2 * CH / Grid.rows) {
            drawFicha(1680, 540, FS, 32);
        } else if (mouse.x >= 10 * CW / Grid.columns && mouse.x <= 11 * CW / Grid.columns && mouse.y >= 2 * CH / Grid.rows && mouse.y <= 3 * CH / Grid.rows) {
            drawFicha(1680, 900, FS, 31);
        } else if (mouse.x >= 11 * CW / Grid.columns && mouse.x <= 12 * CW / Grid.columns && mouse.y >= 0 && mouse.y <= CH / Grid.rows) {
            drawFicha(1840, 180, FS, 36);
        } else if (mouse.x >= 11 * CW / Grid.columns && mouse.x <= 12 * CW / Grid.columns && mouse.y >= CH / Grid.rows && mouse.y <= 2 * CH / Grid.rows) {
            drawFicha(1840, 540, FS, 35);
        } else if (mouse.x >= 11 * CW / Grid.columns && mouse.x <= 12 * CW / Grid.columns && mouse.y >= 2 * CH / Grid.rows && mouse.y <= 3 * CH / Grid.rows) {
            drawFicha(1840, 900, FS, 34);
        }
        ProfileCardDataLoading();
    }
});

/**
* Se encarga de dibujar el tablero
* @method drawTablero()
*/

function drawTablero() {

    const canvas = document.getElementById('tablero');
    const Context = canvas.getContext('2d');
    const CW = canvas.width;
    const CH = canvas.height;
    let ColumnNumber = 0;

    Context.strokeStyle = "white";
    Context.lineWidth = "10";
    Context.font = "80px Arial Black"

    // First Column
    Context.fillStyle = "red";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "black";
    Context.fillRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "red";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.save();
    Context.fillStyle = "white";
    Context.translate(55, 200);
    Context.fillText("1", ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows);
    Context.fillText("2", ColumnNumber * CW / Grid.columns, CH / Grid.rows);
    Context.fillText("3", ColumnNumber * CW / Grid.columns, 0);
    Context.restore();
    ColumnNumber += 1;
    // Second Column
    Context.fillStyle = "black";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "red";
    Context.fillRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "black";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.save();
    Context.fillStyle = "white";
    Context.translate(55, 200);
    Context.fillText("4", ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows);
    Context.fillText("5", ColumnNumber * CW / Grid.columns, CH / Grid.rows);
    Context.fillText("6", ColumnNumber * CW / Grid.columns, 0);
    Context.restore();
    ColumnNumber += 1;
    // Third Column
    Context.fillStyle = "red";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "black";
    Context.fillRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "red";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.save();
    Context.fillStyle = "white";
    Context.translate(55, 200);
    Context.fillText("7", ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows);
    Context.fillText("8", ColumnNumber * CW / Grid.columns, CH / Grid.rows);
    Context.fillText("9", ColumnNumber * CW / Grid.columns, 0);
    Context.restore();
    ColumnNumber += 1;
    // Forth Column
    Context.fillStyle = "red";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "black";
    Context.fillRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "black";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.save();
    Context.fillStyle = "white";
    Context.translate(25, 200);
    Context.fillText("10", ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows);
    Context.fillText("11", ColumnNumber * CW / Grid.columns, CH / Grid.rows);
    Context.fillText("12", ColumnNumber * CW / Grid.columns, 0);
    Context.restore();
    ColumnNumber += 1;
    // Fifth Column
    Context.fillStyle = "black";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "red";
    Context.fillRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "black";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.save();
    Context.fillStyle = "white";
    Context.translate(25, 200);
    Context.fillText("13", ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows);
    Context.fillText("14", ColumnNumber * CW / Grid.columns, CH / Grid.rows);
    Context.fillText("15", ColumnNumber * CW / Grid.columns, 0);
    Context.restore();
    ColumnNumber += 1;
    // Sixth Column
    Context.fillStyle = "red";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "black";
    Context.fillRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "red";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.save();
    Context.fillStyle = "white";
    Context.translate(25, 200);
    Context.fillText("16", ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows);
    Context.fillText("17", ColumnNumber * CW / Grid.columns, CH / Grid.rows);
    Context.fillText("18", ColumnNumber * CW / Grid.columns, 0);
    Context.restore();
    ColumnNumber += 1;
    // Seventh Column
    Context.fillStyle = "red";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "black";
    Context.fillRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "red";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.save();
    Context.fillStyle = "white";
    Context.translate(25, 200);
    Context.fillText("19", ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows);
    Context.fillText("20", ColumnNumber * CW / Grid.columns, CH / Grid.rows);
    Context.fillText("21", ColumnNumber * CW / Grid.columns, 0);
    Context.restore();
    ColumnNumber += 1;
    // Eighth Column
    Context.fillStyle = "black";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "red";
    Context.fillRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "black";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.save();
    Context.fillStyle = "white";
    Context.translate(25, 200);
    Context.fillText("22", ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows);
    Context.fillText("23", ColumnNumber * CW / Grid.columns, CH / Grid.rows);
    Context.fillText("24", ColumnNumber * CW / Grid.columns, 0);
    Context.restore();
    ColumnNumber += 1;
    // Ninth Column
    Context.fillStyle = "red";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "black";
    Context.fillRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "red";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.save();
    Context.fillStyle = "white";
    Context.translate(25, 200);
    Context.fillText("25", ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows);
    Context.fillText("26", ColumnNumber * CW / Grid.columns, CH / Grid.rows);
    Context.fillText("27", ColumnNumber * CW / Grid.columns, 0);
    Context.restore();
    ColumnNumber += 1;
    // Tenth Column
    Context.fillStyle = "red";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "black";
    Context.fillRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "black";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.save();
    Context.fillStyle = "white";
    Context.translate(25, 200);
    Context.fillText("28", ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows);
    Context.fillText("29", ColumnNumber * CW / Grid.columns, CH / Grid.rows);
    Context.fillText("30", ColumnNumber * CW / Grid.columns, 0);
    Context.restore();
    ColumnNumber += 1;
    // Eleventh Column
    Context.fillStyle = "black";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "red";
    Context.fillRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "black";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.save();
    Context.fillStyle = "white";
    Context.translate(25, 200);
    Context.fillText("31", ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows);
    Context.fillText("32", ColumnNumber * CW / Grid.columns, CH / Grid.rows);
    Context.fillText("33", ColumnNumber * CW / Grid.columns, 0);
    Context.restore();
    ColumnNumber += 1;
    // Twelfth Column
    Context.fillStyle = "red";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "black";
    Context.fillRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.fillStyle = "red";
    Context.fillRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 0, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.strokeRect(ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows, CW / Grid.columns, CH / Grid.rows);
    Context.save();
    Context.fillStyle = "white";
    Context.translate(25, 200);
    Context.fillText("34", ColumnNumber * CW / Grid.columns, 2 * CH / Grid.rows);
    Context.fillText("35", ColumnNumber * CW / Grid.columns, CH / Grid.rows);
    Context.fillText("36", ColumnNumber * CW / Grid.columns, 0);
    Context.restore();

}

/**
 * Se encarga de colocar las fichas en el tablero según la posición seleccionada
 * @method drawFichas()
 * @param {number} posx - Almacena la posición en "x" donde se colocará la ficha
 * @param {number} posy - Almacena la posición en "y" donde se colocará la ficha
 * @param {number} color - Almacena el color de la ficha
 * @param {number} post - Almacena el número del casillero donde se colocará la ficha
 */

function drawFicha(posx, posy, color, post) {

    const canvas_fichas = document.getElementById('tablero_fichas');
    const Ctx = canvas_fichas.getContext('2d');

    Ctx.strokeStyle = 'white';
    Ctx.lineWidth = "5";

    switch (post) {
        case 1:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T1 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT1.innerHTML = TableroPosCounter.T1;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T1 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT1.innerHTML = TableroPosCounter.T1;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T1 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT1.innerHTML = TableroPosCounter.T1;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T1 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT1.innerHTML = TableroPosCounter.T1;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 2:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T2 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT2.innerHTML = TableroPosCounter.T2;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T2 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT2.innerHTML = TableroPosCounter.T2;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T2 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT2.innerHTML = TableroPosCounter.T2;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T2 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT2.innerHTML = TableroPosCounter.T2;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 3:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T3 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT3.innerHTML = TableroPosCounter.T3;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T3 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT3.innerHTML = TableroPosCounter.T3;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T3 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT3.innerHTML = TableroPosCounter.T3;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T3 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT3.innerHTML = TableroPosCounter.T3;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 4:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T4 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT4.innerHTML = TableroPosCounter.T4;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T4 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT4.innerHTML = TableroPosCounter.T4;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T4 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT4.innerHTML = TableroPosCounter.T4;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T4 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT4.innerHTML = TableroPosCounter.T4;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 5:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T5 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT5.innerHTML = TableroPosCounter.T5;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T5 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT5.innerHTML = TableroPosCounter.T5;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T5 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT5.innerHTML = TableroPosCounter.T5;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T5 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT5.innerHTML = TableroPosCounter.T5;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 6:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T6 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT6.innerHTML = TableroPosCounter.T6;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T6 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT6.innerHTML = TableroPosCounter.T6;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T6 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT6.innerHTML = TableroPosCounter.T6;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T6 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT6.innerHTML = TableroPosCounter.T6;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 7:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T7 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT7.innerHTML = TableroPosCounter.T7;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T7 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT7.innerHTML = TableroPosCounter.T7;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T7 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT7.innerHTML = TableroPosCounter.T7;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T7 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT7.innerHTML = TableroPosCounter.T7;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 8:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T8 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT8.innerHTML = TableroPosCounter.T8;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T8 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT8.innerHTML = TableroPosCounter.T8;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T8 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT8.innerHTML = TableroPosCounter.T8;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T8 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT8.innerHTML = TableroPosCounter.T8;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 9:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T9 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT9.innerHTML = TableroPosCounter.T9;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T9 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT9.innerHTML = TableroPosCounter.T9;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T9 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT9.innerHTML = TableroPosCounter.T9;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T9 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT9.innerHTML = TableroPosCounter.T9;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 10:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T10 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT10.innerHTML = TableroPosCounter.T10;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T10 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT10.innerHTML = TableroPosCounter.T10;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T10 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT10.innerHTML = TableroPosCounter.T10;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T10 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT10.innerHTML = TableroPosCounter.T10;
                        }
                        break;
                    case 0:
                        break;
                }
                break;
            }
        case 11:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T11 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT11.innerHTML = TableroPosCounter.T11
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T11 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT11.innerHTML = TableroPosCounter.T11
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T11 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT11.innerHTML = TableroPosCounter.T11
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T11 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT11.innerHTML = TableroPosCounter.T11
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 12:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T12 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT12.innerHTML = TableroPosCounter.T12;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T12 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT12.innerHTML = TableroPosCounter.T12;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T12 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT12.innerHTML = TableroPosCounter.T12;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T12 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT12.innerHTML = TableroPosCounter.T12;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 13:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T13 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT13.innerHTML = TableroPosCounter.T13;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T13 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT13.innerHTML = TableroPosCounter.T13;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T13 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT13.innerHTML = TableroPosCounter.T13;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T13 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT13.innerHTML = TableroPosCounter.T13;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 14:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T14 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT14.innerHTML = TableroPosCounter.T14;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T14 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT14.innerHTML = TableroPosCounter.T14;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T14 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT14.innerHTML = TableroPosCounter.T14;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T14 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT14.innerHTML = TableroPosCounter.T14;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 15:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T15 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT15.innerHTML = TableroPosCounter.T15;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T15 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT15.innerHTML = TableroPosCounter.T15;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T15 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT15.innerHTML = TableroPosCounter.T15;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T15 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT15.innerHTML = TableroPosCounter.T15;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 16:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T16 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT16.innerHTML = TableroPosCounter.T16;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T16 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT16.innerHTML = TableroPosCounter.T16;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T16 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT16.innerHTML = TableroPosCounter.T16;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T16 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT16.innerHTML = TableroPosCounter.T16;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 17:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T17 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT17.innerHTML = TableroPosCounter.T17;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T17 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT17.innerHTML = TableroPosCounter.T17;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T17 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT17.innerHTML = TableroPosCounter.T17;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T17 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT17.innerHTML = TableroPosCounter.T17;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 18:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T18 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT18.innerHTML = TableroPosCounter.T18;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T18 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT18.innerHTML = TableroPosCounter.T18;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T18 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT18.innerHTML = TableroPosCounter.T18;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T18 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT18.innerHTML = TableroPosCounter.T18;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 19:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T19 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT19.innerHTML = TableroPosCounter.T19;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T19 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT19.innerHTML = TableroPosCounter.T19;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T19 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT19.innerHTML = TableroPosCounter.T19;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T19 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT19.innerHTML = TableroPosCounter.T19;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 20:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T20 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT20.innerHTML = TableroPosCounter.T20;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T20 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT20.innerHTML = TableroPosCounter.T20;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T20 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT20.innerHTML = TableroPosCounter.T20;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T20 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT20.innerHTML = TableroPosCounter.T20;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 21:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T21 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT21.innerHTML = TableroPosCounter.T21;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T21 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT21.innerHTML = TableroPosCounter.T21;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T21 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT21.innerHTML = TableroPosCounter.T21;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T21 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT21.innerHTML = TableroPosCounter.T21;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 22:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T22 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT22.innerHTML = TableroPosCounter.T22;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T22 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT22.innerHTML = TableroPosCounter.T22;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T22 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT22.innerHTML = TableroPosCounter.T22;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T22 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT22.innerHTML = TableroPosCounter.T22;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 23:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T23 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT23.innerHTML = TableroPosCounter.T23;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T23 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT23.innerHTML = TableroPosCounter.T23;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T23 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT23.innerHTML = TableroPosCounter.T23;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T23 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT23.innerHTML = TableroPosCounter.T23;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 24:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T24 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT24.innerHTML = TableroPosCounter.T24;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T24 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT24.innerHTML = TableroPosCounter.T24;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T24 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT24.innerHTML = TableroPosCounter.T24;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T24 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT24.innerHTML = TableroPosCounter.T24;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 25:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T25 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT25.innerHTML = TableroPosCounter.T25;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T25 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT25.innerHTML = TableroPosCounter.T25;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T25 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT25.innerHTML = TableroPosCounter.T25;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T25 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT25.innerHTML = TableroPosCounter.T25;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 26:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T26 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT26.innerHTML = TableroPosCounter.T26;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T26 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT26.innerHTML = TableroPosCounter.T26;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T26 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT26.innerHTML = TableroPosCounter.T26;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T26 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT26.innerHTML = TableroPosCounter.T26;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 27:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T27 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT27.innerHTML = TableroPosCounter.T27;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T27 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT27.innerHTML = TableroPosCounter.T27;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T27 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT27.innerHTML = TableroPosCounter.T27;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T27 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT27.innerHTML = TableroPosCounter.T27;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 28:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T28 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT28.innerHTML = TableroPosCounter.T28;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T28 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT28.innerHTML = TableroPosCounter.T28;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T28 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT28.innerHTML = TableroPosCounter.T28;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T28 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT28.innerHTML = TableroPosCounter.T28;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 29:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T29 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT29.innerHTML = TableroPosCounter.T29;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T29 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT29.innerHTML = TableroPosCounter.T29;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T29 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT29.innerHTML = TableroPosCounter.T29;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T29 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT29.innerHTML = TableroPosCounter.T29;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 30:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T30 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT30.innerHTML = TableroPosCounter.T30;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T30 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT30.innerHTML = TableroPosCounter.T30;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T30 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT30.innerHTML = TableroPosCounter.T30;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T30 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT30.innerHTML = TableroPosCounter.T30;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 31:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T31 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT31.innerHTML = TableroPosCounter.T31;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T31 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT31.innerHTML = TableroPosCounter.T31;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T31 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT31.innerHTML = TableroPosCounter.T31;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T31 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT31.innerHTML = TableroPosCounter.T31;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 32:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T32 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT32.innerHTML = TableroPosCounter.T32;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T32 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT32.innerHTML = TableroPosCounter.T32;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T32 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT32.innerHTML = TableroPosCounter.T32;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T32 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT32.innerHTML = TableroPosCounter.T32;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 33:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T33 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT33.innerHTML = TableroPosCounter.T33;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T33 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT33.innerHTML = TableroPosCounter.T33;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T33 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT33.innerHTML = TableroPosCounter.T33;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T33 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT33.innerHTML = TableroPosCounter.T33;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 34:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T34 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT34.innerHTML = TableroPosCounter.T34;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T34 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT34.innerHTML = TableroPosCounter.T34;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T34 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT34.innerHTML = TableroPosCounter.T34;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T34 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT34.innerHTML = TableroPosCounter.T34;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 35:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T35 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT35.innerHTML = TableroPosCounter.T35;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T35 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT35.innerHTML = TableroPosCounter.T35;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T35 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT35.innerHTML = TableroPosCounter.T35;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T35 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT35.innerHTML = TableroPosCounter.T35;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
        case 36:
            if (Balance !== 0) {
                switch (color) {
                    case 1:
                        if (Balance - 5 >= 0) {
                            Ctx.fillStyle = 'blue';
                            TableroPosCounter.T36 += 5;
                            Balance -= 5;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT36.innerHTML = TableroPosCounter.T36;
                        }
                        break;
                    case 2:
                        if (Balance - 10 >= 0) {
                            Ctx.fillStyle = 'red';
                            TableroPosCounter.T36 += 10;
                            Balance -= 10;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT36.innerHTML = TableroPosCounter.T36;
                        }
                        break;
                    case 3:
                        if (Balance - 50 >= 0) {
                            Ctx.fillStyle = 'darkgreen';
                            TableroPosCounter.T36 += 50;
                            Balance -= 50;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT36.innerHTML = TableroPosCounter.T36;
                        }
                        break;
                    case 4:
                        if (Balance - 100 >= 0) {
                            Ctx.fillStyle = 'black';
                            TableroPosCounter.T36 += 100;
                            Balance -= 100;
                            sessionStorage.setItem("balance", Balance);
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 60, 0, Math.PI * 2);
                            Ctx.fill();
                            Ctx.stroke();
                            Ctx.beginPath();
                            Ctx.arc(posx, posy, 45, 0, Math.PI * 2);
                            Ctx.stroke();
                            AmountDivs.AT36.innerHTML = TableroPosCounter.T36;
                        }
                        break;
                    case 0:
                        break;
                }
            }
            break;
    }

}

window.onbeforeunload = function () {
    ClearFichas();
};

/**
 * Se encarga de borrar las fichas puestas en el tablero
 * @method ClearFichas()
 */

function ClearFichas() {

    const canvas_fichas = document.getElementById('tablero_fichas');
    const Ctx = canvas_fichas.getContext('2d');
    let RestoreBalance = TableroPosCounter.T1 + TableroPosCounter.T2 + TableroPosCounter.T3 + TableroPosCounter.T4 + TableroPosCounter.T5 + TableroPosCounter.T6 + TableroPosCounter.T7 + TableroPosCounter.T8 + TableroPosCounter.T9 + TableroPosCounter.T10 + TableroPosCounter.T11 + TableroPosCounter.T12 + TableroPosCounter.T13 + TableroPosCounter.T14 + TableroPosCounter.T15 + TableroPosCounter.T16 + TableroPosCounter.T17 + TableroPosCounter.T18 + TableroPosCounter.T19 + TableroPosCounter.T20 + TableroPosCounter.T21 + TableroPosCounter.T22 + TableroPosCounter.T23 + TableroPosCounter.T24 + TableroPosCounter.T25 + TableroPosCounter.T26 + TableroPosCounter.T27 + TableroPosCounter.T28 + TableroPosCounter.T29 + TableroPosCounter.T30 + TableroPosCounter.T31 + TableroPosCounter.T32 + TableroPosCounter.T33 + TableroPosCounter.T34 + TableroPosCounter.T35 + TableroPosCounter.T36;
    if (RestoreBalance !== 0) {
        Balance += RestoreBalance;
        sessionStorage.setItem("balance", Balance);
    }

    Ctx.clearRect(0, 0, canvas_fichas.width, canvas_fichas.height);
    FS = 0;

    Fichas.Azul.style.border = "none";
    Fichas.Roja.style.border = "none";
    Fichas.Verde.style.border = "none";
    Fichas.Negra.style.border = "none";

    TableroPosCounter.T1 = 0;
    TableroPosCounter.T2 = 0;
    TableroPosCounter.T3 = 0;
    TableroPosCounter.T4 = 0;
    TableroPosCounter.T5 = 0;
    TableroPosCounter.T6 = 0;
    TableroPosCounter.T7 = 0;
    TableroPosCounter.T8 = 0;
    TableroPosCounter.T9 = 0;
    TableroPosCounter.T10 = 0;
    TableroPosCounter.T11 = 0;
    TableroPosCounter.T12 = 0;
    TableroPosCounter.T13 = 0;
    TableroPosCounter.T14 = 0;
    TableroPosCounter.T15 = 0;
    TableroPosCounter.T16 = 0;
    TableroPosCounter.T17 = 0;
    TableroPosCounter.T18 = 0;
    TableroPosCounter.T19 = 0;
    TableroPosCounter.T20 = 0;
    TableroPosCounter.T21 = 0;
    TableroPosCounter.T22 = 0;
    TableroPosCounter.T23 = 0;
    TableroPosCounter.T24 = 0;
    TableroPosCounter.T25 = 0;
    TableroPosCounter.T26 = 0;
    TableroPosCounter.T27 = 0;
    TableroPosCounter.T28 = 0;
    TableroPosCounter.T29 = 0;
    TableroPosCounter.T30 = 0;
    TableroPosCounter.T31 = 0;
    TableroPosCounter.T32 = 0;
    TableroPosCounter.T33 = 0;
    TableroPosCounter.T34 = 0;
    TableroPosCounter.T35 = 0;
    TableroPosCounter.T36 = 0;
    AmountDivs.AT1.innerHTML = "";
    AmountDivs.AT2.innerHTML = "";
    AmountDivs.AT3.innerHTML = "";
    AmountDivs.AT4.innerHTML = "";
    AmountDivs.AT5.innerHTML = "";
    AmountDivs.AT6.innerHTML = "";
    AmountDivs.AT7.innerHTML = "";
    AmountDivs.AT8.innerHTML = "";
    AmountDivs.AT9.innerHTML = "";
    AmountDivs.AT10.innerHTML = "";
    AmountDivs.AT11.innerHTML = "";
    AmountDivs.AT12.innerHTML = "";
    AmountDivs.AT13.innerHTML = "";
    AmountDivs.AT14.innerHTML = "";
    AmountDivs.AT15.innerHTML = "";
    AmountDivs.AT16.innerHTML = "";
    AmountDivs.AT17.innerHTML = "";
    AmountDivs.AT18.innerHTML = "";
    AmountDivs.AT19.innerHTML = "";
    AmountDivs.AT20.innerHTML = "";
    AmountDivs.AT21.innerHTML = "";
    AmountDivs.AT22.innerHTML = "";
    AmountDivs.AT23.innerHTML = "";
    AmountDivs.AT24.innerHTML = "";
    AmountDivs.AT25.innerHTML = "";
    AmountDivs.AT26.innerHTML = "";
    AmountDivs.AT27.innerHTML = "";
    AmountDivs.AT28.innerHTML = "";
    AmountDivs.AT29.innerHTML = "";
    AmountDivs.AT30.innerHTML = "";
    AmountDivs.AT31.innerHTML = "";
    AmountDivs.AT32.innerHTML = "";
    AmountDivs.AT33.innerHTML = "";
    AmountDivs.AT34.innerHTML = "";
    AmountDivs.AT35.innerHTML = "";
    AmountDivs.AT36.innerHTML = "";

    ProfileCardDataLoading();

}

/**
 * Se encarga de volver a la página anterior, en este caso vuelve a "Selección de Modo de Juego"
 * @method Back()
 */

function Back() {
    location.href = 'selectgame.html';
}

/**
 * Se encarga de cargar/actualizar el nombre y el balance del usuario en la "ProfileCard"
 * @method ProfileCardDataLoading()
 */

function ProfileCardDataLoading() {
    let Username = sessionStorage.getItem("username");
    let UsernameLabel = document.getElementById("inputname");
    let BalanceLabel = document.getElementById("bal");
    BalanceLabel.innerHTML = "$" + Balance + "⁰⁰";
    UsernameLabel.innerHTML = Username;
}


/* RULETA */