const divClock = document.querySelector('.clock-container')

const updateClock = ()=>{
const present = new Date()

const getHours = present.getHours()
const getMinuts = present.getMinutes()
const getSeconds = present.getSeconds()

const clockHtml = `
    <span>${String(getHours).length === 1 ? `0${getHours}` : getHours}</span> :
    <span>${String(getMinuts).length === 1 ? `0${getMinuts}` : getMinuts }</span> :
    <span>${String(getSeconds).length === 1 ? `0${getSeconds}` : getSeconds }</span>
`
divClock.innerHTML = clockHtml
}

setInterval( updateClock, 1000 )