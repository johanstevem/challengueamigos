// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//creamos el array donde estaran los amigos guardados
let amigos=[];


//agarramos lo que el usuario ingrese en la interfaz
//creamos la variable para que se limpie despues de ingresar algo automaticamente
const seccion=document.querySelector(".input-section")
const listaamigos=document.getElementById("listaAmigos")
const boton=document.querySelector(".button-add")
const ingreso=document.getElementById("amigo")
const resultado=document.getElementById("resultado")

// funcion para mostrar la lista de amigos en pantalla
function mostrarAmigos(){
   listaamigos.innerHTML=""; //limpiamos la lista antes de volver a dibujar
   amigos.forEach(function(nombre) {
      const li = document.createElement('li');
      li.textContent = nombre;
      listaamigos.appendChild(li);
   });
}

function agregarAmigo(){
   if (ingreso.value.trim()==""){
       alert("ingrese algo")
   }else{
       amigos.push(ingreso.value.trim())
       console.log(amigos)
       ingreso.value=""; 
       mostrarAmigos(); 
   }
}

function sortearAmigo(){
   if (amigos.length===0){
      alert("no hay amigos en la lista para sortear")
      return;
   }
   const indiceAleatorio=Math.floor(Math.random()*amigos.length);

   resultado.innerHTML=""; 
   const li = document.createElement('li');
   li.textContent = "Amigo sorteado: " + amigos[indiceAleatorio];
   resultado.appendChild(li);
}

function actualizarAmigo(){
   if (amigos.length===0){
      alert("no hay amigos en la lista para actualizar")
      return;
   }
   const nombreViejo=prompt("Ingrese el nombre que desea actualizar:");
   const index=amigos.indexOf(nombreViejo);
   if (index===-1){
      alert("Ese nombre no está en la lista")
      return;
   }
   const nombreNuevo=prompt("Ingrese el nuevo nombre:");
   if (nombreNuevo && nombreNuevo.trim()!==""){
      amigos[index]=nombreNuevo.trim(); //reemplazamos en el array
      mostrarAmigos(); //mostramos la lista actualizada
   }
}

window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;
window.actualizarAmigo = actualizarAmigo;
