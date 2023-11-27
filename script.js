//FUNCION QUE APLICA EL ESTILO A LA OPCION SELECCIONADA EN EL MENU Y QUITA LA PREVIAMENTE SELECCIONADA //

function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones [0].className = "";
    opciones [1].className = "";
    opciones [2].className = "";
    opciones [3].className = "";
    link.className = "seleccionado"

    //HACEMOS DESAPARECER EL MENU UNA VEZ QUE SE HA SELECCIONADO UNA OPCION EN EL MODO RESPONSIVE//
    var x = document.getElementById("nav");
    x.className =  "";
}


// MENU RESPONSIVE //

function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

// //
