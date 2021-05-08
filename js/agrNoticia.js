class Noticia {
    autor;
    titulo;
    texto;

    //  Mutadores
    setAutor(autor) {
        this.autor = autor;
    }

    setTitulo(titulo) {
        this.titulo = titulo;
    }

    setTexto(texto) {
        this.texto = texto;
    }

    //  Accesadores
    getAutor() {
        return this.autor;
    }

    getTitulo() {
        return this.titulo;
    }

    getTexto() {
        return this.texto;
    }
}

var arreglo = new Array();
var x = 0;

function validarFormularioNoticia() {
    var autor = document.getElementById("txtAutor").value;
    var titulo = document.getElementById("txtTitulo").value;
    var texto = document.getElementById("txaTexto").value;
    var mensajeTemp = "";

    if(autor.length < 2) {
        mensajeTemp = mensajeTemp + "Debe ingresar un autor válido.\n";
    }
    if(titulo.length < 2) {
        mensajeTemp = mensajeTemp + "Debe ingresar un título válido.\n";
    }
    if(texto.length < 10) {
        mensajeTemp = mensajeTemp + "La noticia es demasiado corta.";
    }

    return mensajeTemp;
}

function agregarNoticia() {
    var mensaje = validarFormularioNoticia();
    if(mensaje == "") {
        var autor = document.getElementById("txtAutor").value;
        var titulo = document.getElementById("txtTitulo").value;
        var texto = document.getElementById("txaTexto").value;

        noticia = new Noticia();

        noticia.setAutor(autor);
        noticia.setTitulo(titulo);
        noticia.setTexto(texto);

        arreglo[x] = JSON.stringify(noticia);
        x++;
        localStorage.setItem('noticias', arreglo);
        alert("Noticia Agregada.")
    }
    else {
        alert(mensaje);
    }
}