const formulario = document.getElementById("formularioo");
const inputs = document.querySelectorAll('#formularioo input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const ValidarFormulario = () =>{

;}

inputs.forEach((input) => {
	input.addEventListener('keyup', ValidarFormulario  )
	input.addEventListener('blur', ValidarFormulario  )
});



formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
});







/* function recogerDatos(){

    let nombreUsuario = document.getElementById("nombreUsuario").value;
    localStorage.setItem("Nombre", nombreUsuario);

    let apellidoUsuario = document.getElementById("apellidoUsuario").value;
    localStorage.setItem("Apellido", apellidoUsuario);

    let correoUsuario = document.getElementById("correoUsuario").value;
    localStorage.setItem("Correo", correoUsuario);
    let celularUsuario = document.getElementById("celularUsuario").value;
    localStorage.setItem("Celular", celularUsuario);
} */

