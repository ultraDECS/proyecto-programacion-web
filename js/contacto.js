class Contacto {
    nombre;
    apellido;
    email;
    telefono;
    mensaje;

    //  Mutadores
    setNombre(nombre) {
        this.nombre = nombre;
    }

    setApellido(apellido) {
        this.apellido = apellido;
    }

    setEmail(email) {
        this.email = email;
    }

    setTelefono(telefono) {
        this.telefono = telefono;
    }

    setMensaje(mensaje) {
        this.mensaje = mensaje;
    }

    //  Accesadores
    getNombre() {
        return this.nombre;
    }

    getApellido() {
        return this.apellido;
    }

    getEmail() {
        return this.email;
    }

    getTelefono() {
        return this.telefono;
    }

    getMensaje() {
        return this.mensaje;
    }

}

function validarFormularioContacto() {
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    var email = document.getElementById("txtEmail").value;
    var telefono = document.getElementById("txtTelefono").value;
    var mensaje = document.getElementById("txaMensaje").value;
    var caracteres = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var mensajeTemp = "";

    if(nombre.length < 2) {
        mensajeTemp = mensajeTemp + "Debe ingresar un nombre válido.\n";
    }
    if(apellido.length < 2) {
        mensajeTemp = mensajeTemp + "Debe ingresar un apellido válido.\n";
    }
    if(!caracteres.test(email)) {
        mensajeTemp = mensajeTemp + "Debe ingresar un email válido.\n";
    }
    if(telefono.length != 9) {
        mensajeTemp = mensajeTemp + "Debe ingresar un teléfono válido.\n";
    }
    if(mensaje.length < 10) {
        mensajeTemp = mensajeTemp + "Debe ingresar un mensaje válido.";
    }

    return mensajeTemp;
}

var arreglo = new Array();
var x = 0;

function agregarContacto() {
    var mensaje = validarFormularioContacto();
    if(mensaje == "") {
        var nombre = document.getElementById("txtNombre").value;
        var apellido = document.getElementById("txtApellido").value;
        var email = document.getElementById("txtEmail").value;
        var telefono = document.getElementById("txtTelefono").value;
        var mensaje = document.getElementById("txaMensaje").value;

        contacto = new Contacto();

        contacto.setNombre(nombre);
        contacto.setApellido(apellido);
        contacto.setEmail(email);
        contacto.setTelefono(telefono);
        contacto.setMensaje(mensaje);

        arreglo[x] = JSON.stringify(contacto);
        x++;
        localStorage.setItem('contactos', arreglo);
        alert("Mensaje Enviado");
    }
    else {
        alert(mensaje);
    }
}