



const menu= document.querySelector(".menu")
let menu_open= document.querySelector(".modal-navbar-background")
const close_menu= document.querySelector(".close_navbar")

menu.addEventListener("click",()=>{
    menu_open.style.display="flex"
})


close_menu.addEventListener("click",()=>{
    menu_open.style.display="none"
})



let imagen_grande= document.querySelector(".imagen_grande")
const miniaturas= document.querySelectorAll(".miniatura-indi")


miniaturas.forEach(minia =>{
    minia.addEventListener("click",function(){
        imagen_grande.src = this.src
    })
})


let imagen_grande1= document.querySelector(".galeria_imagen-contenedor")
const miniaturas1= document.querySelectorAll(".miniatura")


miniaturas1.forEach(minia1 =>{
    minia1.addEventListener("click",function(){
        imagen_grande1.src = this.src
    })
})


