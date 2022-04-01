function relogio() {
    let date = new Date();
    let hor = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let horas = `${hor}:${min}:${sec}`

    if(hor < 10) {
        hor = '0' + hor
    }
    
    if(min < 10) {
        min = '0' + min
    }

    
    if(sec < 10) {
        sec = '0' + sec
    }

    document.getElementById('rel').value = horas
    
}

setInterval(relogio,1000)