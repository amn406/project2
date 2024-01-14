let gameSeq = []
let userSeq = []

let btns = ["yellow", "red", "purple", "green"]


let started = false
let level = 0

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function() {
  if (started == false) {
    started = true
    levelUp()
  }
});


function btnFlash(btn) {
  btn.classList.add("flash")
  setTimeout(function() {
    btn.classList.remove("flash")
  }, 400)
}

function gameFlash(btn) {
  btn.classList.add("flash")
  setTimeout(function () {
    btn.classList.remove("flash")
  }, 400)
}

function userFlash(btn) {
  btn.classList.add("userFlash")
  setTimeout(function () {
    btn.classList.remove("userFlash")
  }, 400)
}

function levelUp() {
  userSeq = []
  level++
  h2.innerText = `Level ${level}`
  let randomIndex = Math.floor(Math.random()*3)
  let randomColor = btns[randomIndex]
  let randomBtn = document.querySelector(`.${randomColor}`)
  gameSeq.push(randomColor)
  console.log(gameSeq)
  gameFlash(randomBtn)
}

function checkAns(index) {
  if(userSeq[index] === gameSeq[index]) {
    if(userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000)
    }
  } else {
    h2.innerHTML = `Game Over! Your Score was <b>${level}</b> Press any key to continue`
    reset()
  }
}

function btnPress() {
  let btn = this
  userFlash(btn)

  userColor = btn.getAttribute("id")
  userSeq.push(userColor)
  checkAns(userSeq.length - 1)
}

let allBtns = document.querySelectorAll(".btn")
for (btn of allBtns) {
  btn.addEventListener("click", btnPress)
}

function reset() {
  started = false
  gameSeq = []
  userSeq = []
  level = 0
}