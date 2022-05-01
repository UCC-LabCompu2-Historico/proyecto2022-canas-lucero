function SelectGameBack() {
    location.href = 'profile.html';
}

function PlayRuleta() {
    location.href = 'ruleta.html';
}

function PlaySlots() {
    location.href = 'slots.html';
}

function CheckOut() {

}

function UsernameLoading() {
    let Username = sessionStorage.getItem("username");
    let UsernameLabel = document.getElementById("inputname");
    UsernameLabel.innerHTML = Username;
}

