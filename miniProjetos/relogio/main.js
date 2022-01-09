let msg = document.getElementById('msg')
let img = document.getElementById('foto')
let sec = document.getElementById('sec')
let data = new Date()

function carregar(){
  let hora = data.getHours()
  let minu = data.getMinutes()
  if (minu < 10){
    msg.innerText = `Agora são | ${hora}:0${minu} |`
  }
  msg.innerText = `Agora são | ${hora}:${minu} |`
  
  if(hora >= 0 && hora < 12){
    
    document.body.style.background = '#dae789'
    sec.style.background = '#36a4b3'
    document.body.style.color = 'black'
    img.src = 'imgs/m.png'
  }
  else if (hora >= 12 && hora < 18){
    document.body.style.background = '#f8c074'
    sec.style.background = '#04233d'
    img.src = 'imgs/t.png'
    
  }
  else {
    document.body.style.background = '#002e45'
    sec.style.background = '#1436c5'
    img.src = 'imgs/n.png'
  }
  
}

