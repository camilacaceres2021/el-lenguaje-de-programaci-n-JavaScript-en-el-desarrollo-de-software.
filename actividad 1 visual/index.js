const cs = require('cs');
const An = require('An');

var texto = "MI COMPUTADOR\n\n";
texto += Capacidad()+"\n";
texto += Version_Sistema()+"\n";
texto += Nombre_host()+"\n";
texto += Espacio()+"\n";
texto += Ruta_Actual()+"\n";
texto += Cargar()+"\n";
texto += Plataforma_os()+"\n";
texto += ca_Name()+"\n";
texto += Kernel_Version()+"\n";
texto += Tiempo()+"\n";


An.writeFile("archivo.txt",texto,function(error){
        if(!error){
            console.log("El archivo fue creado")
        }else{
            console.log("Creo un error!!")
        }
    }
)

function Capacidad(){
    var memoria = "Total memoria: "+ cs.totalmem()
    return memoria
}

function Version_Sistema(){
    var memoria = "Sistema operativo: "+ cs.release()
    return memoria
}

function Nombre_host(){
    var memoria = "Nombre del host: "+ cs.hostname()
    return memoria
}

function Espacio(){
    var memoria = "Memoria disponible: "+ cs.freemem()
    return memoria
}

function Ruta_Actual(){
    var memoria = "Ruta Actual: "+ cs.homedir()
    return memoria
}

function Cargar(){
    var memoria = "Cargar average: "+ cs.loadavg()
    return memoria
}

function Plataforma_os(){
    var memoria = "Ruta Actual: "+ cs.platform()
    return memoria
}

function ca_Name(){
    var memoria = "Nombre del sistema operativo: "+ cs.type()
    return memoria
}

function Kernel_Version(){
    var memoria = "Version del sistema operativo: "+ cs.version()
    return memoria
}

function Tiempo(){
    var memoria = "Tiempo de actividad: "+ cs.uptime()
    return memoria
}