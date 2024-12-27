let homeSemafor = document.getElementById("home-semafor")
let guestSemafor = document.getElementById("guest-semafor")
let homeCount = 0
let guestCount = 0

// Home
function plusOneHome() {
    homeCount += 1
    homeSemafor.textContent = homeCount
}

function plusTwoHome() {
    homeCount += 2
    homeSemafor.textContent = homeCount
}

function plusThreeHome() {
    homeCount += 3
    homeSemafor.textContent = homeCount
}

// Guest
function plusOneGuest() {
    guestCount += 1
    guestSemafor.textContent = guestCount
}

function plusTwoGuest() {
    guestCount += 2
    guestSemafor.textContent = guestCount
}

function plusThreeGuest() {
    guestCount += 3
    guestSemafor.textContent = guestCount
}

// New game btn
function newGame() {
    homeCount = 0
    guestCount = 0
    homeSemafor.textContent = homeCount
    guestSemafor.textContent = guestCount
}