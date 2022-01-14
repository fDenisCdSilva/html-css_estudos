let bin = document.getElementById('bin')
let msg = document.getElementById('msg')

let vai = () => {
  let nbin = Number(bin.value)
  let re = /\w{9}/
  let va = /[2-9]/
  if (re.test(nbin) == true){
    window.alert('Valores inseridos utrapassam 8 algarismos')
  }
  else if(va.test(nbin) == true){
    window.alert('Valor não binario digitado')
  }
  else{
    msg.innerHTML = parseInt(nbin,2)
    bin.value = ""
  }
  
  
}


