const card = document.querySelector('.card')

const h = document.querySelector('.hours')
const m = document.querySelector('.minutes')
const s = document.querySelector('.secondes')

// animation card 

card.animate([
    {transform:'translateY(20px)', opacity:0},
    {transform:'translateY(0px)', opacity:1},
],{
    duration:700
})

// time set 



/*console.log(date.getSeconds())
console.log(date.getMinutes())
console.log(date.getHours())*/

const time = setInterval(()=>{
    const date = new Date();
    h.innerHTML = date.getHours()
    m.innerHTML = date.getMinutes()
    s.innerHTML = date.getSeconds()
}
,1000)



