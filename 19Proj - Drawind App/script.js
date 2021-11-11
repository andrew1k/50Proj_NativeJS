const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
const span = document.querySelector('span')
const clear = document.getElementById('clear')
// let color = document.getElementById('color').value
let isPressed = false
let x
let y
let size = 10
let color

// colorInput.addEventListener('input', ()=>{
//     // color =  colorInput.value
// })

setInterval(()=>{
    color = document.getElementById('color').value
},500)


increase.addEventListener('click', ()=>{
    size += 2
    span.innerText = +span.innerText + 2
})
decrease.addEventListener('click', ()=>{
    size -= 2
    span.innerText = +span.innerText - 2
    if (span.innerText < 1){
        alert(`Please don't decrease anymore`)
        span.innerText = 2
        size = 2}
})
clear.addEventListener('click', ()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})
canvas.addEventListener('mousedown', (e)=> {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})
canvas.addEventListener('mouseup', ()=> {
    isPressed = false
    x = undefined
    y = undefined
})
canvas.addEventListener('mousemove', (e)=> {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        drawCircle(x2,y2)
        drawLine(x,y,x2,y2)
        x = x2
        y = y2
    }
})
function drawCircle (x,y) {
    ctx.beginPath()
    ctx.arc(x,y,size,0,Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

console.log(span.innerText)