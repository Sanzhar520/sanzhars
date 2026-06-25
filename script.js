function changeTheme() {
    document.body.classList.toggle("dark");
}
function toggleBlock() {
    let block = document.getElementById("info");

    if (block.style.display == "none") {
        block.style.display = "block";
    } else {
        block.style.display = "none";
    }
}
let count = 0;

function clicker() {
    count++;
    document.getElementById("count").innerText = count;
}

let change = false;

function changeImage() {
    let img = document.getElementById("photo");

    if (change == false) {
        img.src = "cyr.gif";
        change = true;
    } else {
        img.src = "ss.gif";
        change = false;
    }
}

function resetCounter() {
    count = 0;
    document.getElementById("count").innerText = count;
}

function toggleBlock() {
    let block = document.getElementById("block");

    if (block.style.display === "none") {
        block.style.display = "block";
    } else {
        block.style.display = "none";
    }
}