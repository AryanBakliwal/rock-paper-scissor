const cScore = document.querySelector('.comp-score')
const uScore = document.querySelector('.user-score')

const cIcon = document.querySelector('#comp-icon')
const uIcon = document.querySelector('#user-icon')

const rBtn = document.querySelector('#rock')
const pBtn = document.querySelector('#paper')
const sBtn = document.querySelector('#scissor')
const clr = document.querySelector('.clear')

let compS = 0
let userS = 0

const options = [
  'fa-solid fa-hand-back-fist',
  'fa-solid fa-hand',
  'fa-solid fa-hand-peace',
]
let random = 0

//console.log(random)

//clear button
clr.addEventListener('click', () => {
  compS = 0
  userS = 0
  uIcon.className = ''
  cIcon.className = ''
  cScore.innerHTML = 0
  uScore.innerHTML = 0
})

//score update function
function scUpd() {
  cScore.innerHTML = compS
  uScore.innerHTML = userS
}

//rock button
rBtn.addEventListener('click', () => {
  uIcon.className = ''
  cIcon.className = ''
  uIcon.className = options[0]
  random = Math.floor(Math.random() * options.length)
  cIcon.className = options[random]

  if (random === 1) {
    compS++
    scUpd()
  } else if (random === 2) {
    userS++
    scUpd()
  }
})

//paper button
pBtn.addEventListener('click', () => {
  uIcon.className = ''
  cIcon.className = ''
  uIcon.className = options[1]
  random = Math.floor(Math.random() * options.length)
  cIcon.className = options[random]

  if (random === 2) {
    compS++
    scUpd()
  } else if (random === 0) {
    userS++
    scUpd()
  }
})

//scissor button
sBtn.addEventListener('click', () => {
  uIcon.className = ''
  cIcon.className = ''
  uIcon.className = options[2]
  random = Math.floor(Math.random() * options.length)
  cIcon.className = options[random]

  if (random === 0) {
    compS++
    scUpd()
  } else if (random === 1) {
    userS++
    scUpd()
  }
})
