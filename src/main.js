const card = document.querySelector('.card')
const time_text = document.querySelector('.time')

const h = document.querySelector('.hours')
const m = document.querySelector('.minutes')
const s = document.querySelector('.secondes')

// card animation 

card.animate([
    {transform:'translateY(20px)', opacity:0},
    {transform:'translateY(0px)', opacity:1},
],{
    duration:700
})

time_text.animate([
    {transform:'translateY(20px)', opacity:0},
    {transform:'translateY(0px)', opacity:1},
],{
    duration:1000
})

// time set 

const time = setInterval(()=>{
    const date = new Date();
    h.innerHTML = date.getHours() + "h"
    m.innerHTML = date.getMinutes() + "m"
    s.innerHTML = date.getSeconds() + "s"
}
,1000)



