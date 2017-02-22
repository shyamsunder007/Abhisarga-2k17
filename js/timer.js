let countDownDate = new Date("Mar 3, 2017 15:37:25").getTime()

let x = setInterval(()=> {

    var now = new Date().getTime()

    var distance = countDownDate - now
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)
    
    document.getElementById(`dem`).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
    
}, 1000)
