let form = document.querySelector("form")
let input =document.querySelector("input ")
let select =document.querySelector("size ")
let image  =document.querySelector("img ")

const getQR = async(e)=>{
    e.preventDefault()
    const response= await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size.value}&data=${input.value}`)
//    const data = await response.json()
   console.log (response.url)
   image.setAttribute("src" ,response.url)



}
form.addEventListener("submit", getQR)