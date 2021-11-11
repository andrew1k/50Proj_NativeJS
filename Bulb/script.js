const bulb = document.querySelector('i')
const body = document.querySelector('body')

bulb.addEventListener('click', ()=>{
    bulb.classList.toggle('light')
    body.classList.toggle('light-background')
})