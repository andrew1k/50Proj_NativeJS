const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle')

const days = ['Sun','Mon','Tue','Wen','Thu','Fri','Sat']
const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']

toggleEl.addEventListener('click', (e)=>{
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light'
    }
})

function setTime() {
    const time = new Date();
    const day = time.getDay()
    const date = time.getDate()
    const month = time.getMonth()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const sec = time.getSeconds()
    const ampm = hours >= 12 ? 'pm' : 'am'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock,0,11,0,360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes,0,59,0,360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(sec,0,59,0,360)}deg)`

    timeEl.innerHTML = `${hoursForClock === 0 ? '12' : hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num,in_min,in_max,out_min,out_max)=>{
    return (num-in_min)*(out_max-out_min)/(in_max-in_min)+out_min
}

setTime()

setInterval(setTime, 1000)