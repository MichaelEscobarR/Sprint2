function recogerDatos(){

    let nombreUsuario = document.getElementById("nombreUsuario").value;
    localStorage.setItem("Nombre", nombreUsuario);

    let apellidoUsuario = document.getElementById("apellidoUsuario").value;
    localStorage.setItem("Apellido", apellidoUsuario);

    let correoUsuario = document.getElementById("correoUsuario").value;
    localStorage.setItem("Correo", correoUsuario);
    
    let celularUsuario = document.getElementById("celularUsuario").value;
    localStorage.setItem("Celular", celularUsuario);
}

