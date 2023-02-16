let date = new Date();
let hor = date.getHours()
let min = date.getMinutes()
let sec = date.getSeconds()
let horas = `${hor}:${min}:${sec}`
// elementos no body
let nav = document.getElementById('navbar')
let ft = document.getElementById('contact')
let rel = document.getElementById('rel')
let ab = document.getElementById('About')
let pj = document.getElementById('projects')
let pjtl = document.getElementsByClassName('project-tile')
    

function relogio() {
    let date = new Date();
    let hor = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    if(hor < 10) {
        hor = '0' + hor
    }
    
    if(min < 10) {
        min = '0' + min
    }

    
    if(sec < 10) {
        sec = '0' + sec
    }
    
    if(hor >= 12) {
        horas = `${hor}:${min}:${sec} PM`
    } else {
        horas = `${hor}:${min}:${sec} AM`
    }
    document.getElementById('rel').value = horas

    
    
}

function mudarImg() {
    let bckImg = document.getElementById('welcome-section')
    if(hor >= 1) {
        bckImg.style.backgroundImage = 'url("https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")'

    }

    if(hor >= 6) {
        bckImg.style.backgroundImage = 'url("https://images.pexels.com/photos/218673/pexels-photo-218673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")'
    }
    
    if(hor >= 13) {
        bckImg.style.backgroundImage = 'url("https://images.pexels.com/photos/1585893/pexels-photo-1585893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")'
    }
    
    if(hor >= 19) {
        bckImg.style.backgroundImage = 'url("https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")'
        
        nav.style.backgroundColor = '#000000'
        rel.style.backgroundColor = '#000000'
        ft.style.backgroundColor = '#000000'
        ab.style.backgroundImage = "url('https://images.pexels.com/photos/68562/pexels-photo-68562.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
        pj.style.backgroundImage = "url('https://images.pexels.com/photos/159872/book-open-pages-literature-159872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
        for (let i = 0; i < pjtl.length; i++) {
            pjtl[i].style.backgroundImage = "url('img/ruler-cut-dark.JPG')"
        }
        
        
    }
}

setInterval(relogio,1000)
mudarImg()
