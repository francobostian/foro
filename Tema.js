
function Tema(titulo, id, creador, fecha, mensajes) {
    let titulo = titulo;
    let id = id;
    let creador = creador;
    let fecha = fecha;
    let mensajes = mensajes;

    this.getTitulo = function() {
        return this.titulo;
    }
    this.getId = function() {
        return this.id;
    }
    this.getCreador = function() {
        return this.creador;
    }
    this.getFecha = function() {
        return this.fecha;
    }
}