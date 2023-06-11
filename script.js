function generateNumber(){
    const min =Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)
   const result = Math.floor(Math.random()* (max-min+ 1)+min)
   const anuncio = document.querySelector('.anuncio')
   const numero = document.querySelector('.numero')
   anuncio.innerHTML= '<p> O número sorteado é:</p>'
   numero.innerHTML = `<p>${result}</p>`
  
}