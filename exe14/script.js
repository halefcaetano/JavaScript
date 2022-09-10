function start(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hour = data.getHours()
    msg.innerHTML = `It's ${hour}.`
    if (hour >= 0 && hour < 12){
        img.src = 'morning.png'
        document.body.style.background = 'Blue'
    }
    else if (hour >= 12 && hour <= 18){
        img.src = 'afternoon.png'
        document.body.style.background = 'Orange'
    }
    else {
        img.src = 'night.png'
        document.body.style.background = 'Purple'
    }
}