function obtenerDatosCliente() {
    let idCliente = Math.floor(Math.random() * 999999);
    let nombreCliente = document.getElementById("Nombre_User").value;
    let DirCliente = document.getElementById("Dir_User").value;
    let TelCliente = document.getElementById("Tel_User").value;
    const fechaCreacion = new Date();

    var arrayUsuario = [idCliente,nombreCliente,DirCliente,TelCliente,fechaCreacion];

    return arrayUsuario;
}

function obtenerDatosContacto() {
    let idContacto = Math.floor(Math.random() * 999999);
    let nombreCont = document.getElementById("Nombre_Cont").value;
    let DirCont = document.getElementById("Dir_Cont").value;
    let Telcont = document.getElementById("Tel_Cont").value;

    var arrayContacto = [idContacto,nombreCont,DirCont,Telcont];

    return arrayContacto;
}

function processData() {
    cliente = obtenerDatosCliente();
    contacto = obtenerDatosContacto();

    alert(cliente.join('\n'));     
    alert(contacto.join('\n'));
};

/* fin */