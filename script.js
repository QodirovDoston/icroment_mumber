let couunt1 = document.querySelector('#count')
let saveEl = document.querySelector('#save')
let incrementBtn = document.querySelector('.increment-btn')
let saveBtn = document.querySelector('.save-btn')
const restat = document.querySelector(".restat-btn")

let count = 0
saveBtn.addEventListener('click', () => {
  count = count - 1
  couunt1.textContent = count
})

incrementBtn.addEventListener('click', () => {
  count = count + 1
  couunt1.textContent = count
})

incrementBtn.addEventListener('click', () => {
  count = count + 1
  couunt1.textContent = count
})

restat.addEventListener('click', () => {
  count = 0
  couunt1.textContent = count
})