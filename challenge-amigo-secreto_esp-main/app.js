// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//creamos el array donde estaran los amigos guardados
let amigos=[];


//agarramos lo que el usuario ingrese en la interfaz
//creamos la variable para que se limpie despues de ingresar algo automaticamente
const seccion=document.querySelector(".input-section")
const listaamigos=document.getElementById("listaAmigos")
const boton=document.querySelector(".button-add")
const ingreso=document.getElementById("amigo")
boton.addEventListener("click", function(){
if (ingreso.value.trim()==""){
    alert("ingrese algo")
}else{
    amigos.push(ingreso.value.trim())
    console.log(amigos)
   ingreso.value="";

   listaamigos.innerHTML=""; //aqui se usa para limpiar por si acaso
   
   amigos.forEach(function(nombre) {
    const li = document.createElement('li');
    li.textContent = nombre;
    listaamigos.appendChild(li);
});
}
})


