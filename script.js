document.addEventListener("DOMContentLoaded",function(event){

    function constructorUsuario(nombreCliente,DirCliente,TelCliente) {
        this.idCliente = Math.floor(Math.random() * 999999);
        this.nombreCliente = nombreCliente;
        this.DirCliente = DirCliente;
        this.TelCliente = TelCliente;
        this.fechaCreacion = new Date();
    }


    function obtenerDatosCliente() {
        let nombreCliente = document.getElementById("Nombre_User").value;
        let DirCliente = document.getElementById("Dir_User").value;
        let TelCliente = document.getElementById("Tel_User").value;

        /* var arrayUsuario = [idCliente,nombreCliente,DirCliente,TelCliente,fechaCreacion]; */
        var NewUsuario = new constructorUsuario(nombreCliente,DirCliente,TelCliente)

        return NewUsuario;
    }

    /* function obtenerDatosContacto() {
        let idContacto = Math.floor(Math.random() * 999999);
        let nombreCont = document.getElementById("Nombre_Cont").value;
        let DirCont = document.getElementById("Dir_Cont").value;
        let Telcont = document.getElementById("Tel_Cont").value;

        var arrayContacto = [idContacto,nombreCont,DirCont,Telcont];

        return arrayContacto;
    } */

    function MostrarCliente() {
        cliente = obtenerDatosCliente();
        /* contacto = obtenerDatosContacto(); */

        console.table(cliente)
        /* alert(contacto.join('\n')); */
    };

    var btn = document.getElementById("btn");
    if (btn){
        btn.addEventListener("click", MostrarCliente());
    }

});





