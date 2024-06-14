const monthName = document.getElementById
("month-name")
const dayName = document.getElementById("day-name")
const dayNumEl = document.getElementById('day_number')
const yearEl = document.getElementById('year')

const date = new Date()
const months = ['January','February','March','April','May','June','July','August','September','October','November','December']

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

monthName.textContent = months[date.getMonth()]
dayName.textContent = dayNames[date.getDay()]
dayNumEl.textContent = date.getDate()
yearEl.textContent=date.getFullYear()