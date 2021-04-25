window.addEventListener('load', function() {
    // GUARDAMOS LOS DATOS 
    function agregar(dato) {
        var binary = dato;

        function infoAuxi(dato) {
            this.dato = dato;
        }
        nuevainfoAuxi = new infoAuxi(binary);
        guardar();
    } //FIN FUNCION agregar
    var BD = [];

    function guardar() {
        BD.push(nuevainfoAuxi);
        controlar(s);
        console.log(BD);
    }
    var sig = 0;
    var s = 'sig';
    var ant = 'ant';
    var ConR = 0;

    function controlar(a) {
        if (a === 'sig') {
            sig++;
        }

    }

    function mover(valor) {

        var mover = 700 * valor;
        document.querySelector('.contenedor ul').style.marginLeft = mover + 'px';
        // siguienteP++;

    }

    var siguienteP = 0;

    function anterior() {
        if (sig <= 0) {
            document.querySelector('#ant').disabled = true;
            BD.splice(0, 1);
            return false;

        } else {

            sig--;
            if (sig <= 0) {

                BD.splice(0, 1);
                var mover = 700 * -1;
                document.querySelector('.contenedor ul').style.marginLeft = mover + 'px';
                // siguienteP = 0;
                document.querySelector('#identificador-Pregunta span').innerHTML = 1;
            } else {

                BD.splice(sig, 1);
                var mover = 700 * ((sig * -1) - 1);
                document.querySelector('.contenedor ul').style.marginLeft = mover + 'px';
                // siguienteP--;
                document.querySelector('#identificador-Pregunta span').innerHTML = sig + 1;
            }

        }
    }
    document.querySelector('#ant').addEventListener('click', function() {
        anterior();
        // siguienteP--;
    });

    document.querySelector('#divNombre').style.display = "none";
    document.querySelector('#preguntas').style.display = "none";
    // document.querySelector('.imgB').style.background = "#ddd";
    document.querySelector('#ant').disabled = true;
    // document.querySelector('#ant').addEventListener('click', function() {
    //     console.log('ant');
    // });
    var formulario = document.querySelector('#conectar');
    formulario.addEventListener('submit', () => {
        var nombre = document.querySelector('#nombre').value;
        if (!isNaN(nombre)) {
            alert('Introdusca un Nombre de Pila!!!!!');
        } else {

            document.querySelector('.contenedor ul').style.marginLeft = -700 + 'px';
            document.querySelector('#divNombre').style.display = "block";
            document.querySelector('#preguntas').style.display = "block";
            // document.querySelector('.imgB').style.background = "#4CAF50";
            // document.querySelector('.boton').style.background = "#4CAF50";
            console.log(nombre);
            var divNombre = document.querySelector('#divNombre');
            divNombre.innerHTML = nombre;
            var siguiente = document.querySelector('#sig');
            var bandera = 0;
            siguiente.addEventListener('click', function() {
                console.log(siguienteP);
                // controlar(s);
                if (sig == 0) { //Comienzo del if
                    console.log(siguienteP);
                    // siguienteP++;
                    var pregunta1 = document.getElementsByName('pregunta1');

                    var respuest1 = "";
                    console.log(sig);
                    // Recorremos todos los valores del radio button para encontrar el
                    // seleccionado

                    var banderaRBTN = false;
                    for (var i = 0; i < pregunta1.length; i++) {
                        if (pregunta1[i].checked && i == 0) {

                            banderaRBTN = true;
                            var respuest1 = "Numericos";
                            break;
                        }
                        if (pregunta1[i].checked && i == 1) {

                            banderaRBTN = true;
                            var respuest1 = "Booleands";
                            break;
                        }
                        if (pregunta1[i].checked && i == 2) {

                            banderaRBTN = true;
                            var respuest1 = "Alfanumericos";
                            break;
                        }
                        if (pregunta1[i].checked && i == 3) {

                            banderaRBTN = true;
                            var respuest1 = "Cadenas de texto";
                            break;
                        }
                    }
                    if (!banderaRBTN) {
                        alert('ERROR: Debe elegir una opcion');

                        return false;
                    }
                    // controlar(s);
                    console.log(respuest1);
                    agregar(respuest1);
                    // siguienteP++;
                    // sig = 1;
                    // controlar(s);
                    // 
                    mover(-2);
                } //final del if

                if (sig == 1) { //Comienzo de la segunda pregunta
                    console.log(siguienteP);
                    document.querySelector('.imgB').style.background = "#4CAF50";
                    document.querySelector('.boton').style.background = "#4CAF50";
                    document.querySelector('#ant').disabled = false;
                    document.querySelector('#ant').addEventListener('click', function() {
                        // sig = 0;
                        bandera = 0;
                        // document.querySelector('#identificador-Pregunta span').innerHTML = 2;
                        document.getElementById('pregunta1').disabled = true;
                        document.getElementById('pregunta1a').disabled = true;
                        document.getElementById('pregunta1b').disabled = true;
                        document.getElementById('pregunta1c').disabled = true;
                        // mover(-1);

                        console.log(sig);

                        console.log(' ant')

                    });
                    document.querySelector('#contestadas span').innerHTML = 1;
                    document.querySelector('#identificador-Pregunta span').innerHTML = 2;
                    document.querySelector('#myBar').style.width = 12 + '%';
                    document.querySelector('#myBar span').innerHTML = 12 + '%';
                    console.log('ola11');
                    if (BD[0].dato === "Cadenas de texto") {
                        document.querySelector('.numero1').style.background = "green";
                        ConR++;
                        console.log('ola');
                    } else {
                        document.querySelector('.numero1').style.background = "red";
                    }

                    if (bandera == 0) {
                        bandera++;

                        return false
                    }
                    var pregunta2 = document.getElementsByName('pregunta2');
                    var respuest2 = "";

                    // Recorremos todos los valores del radio button para encontrar el
                    // seleccionado

                    var banderaRBTN = false;
                    for (var i = 0; i < pregunta2.length; i++) {
                        if (pregunta2[i].checked && i == 0) {

                            banderaRBTN = true;
                            var respuest2 = "Numericos";
                            break;
                        }
                        if (pregunta2[i].checked && i == 1) {

                            banderaRBTN = true;
                            var respuest2 = "Booleands";
                            break;
                        }
                        if (pregunta2[i].checked && i == 2) {

                            banderaRBTN = true;
                            var respuest2 = "Decimales";
                            break;
                        }
                        if (pregunta2[i].checked && i == 3) {

                            banderaRBTN = true;
                            var respuest2 = "Cadenas de texto";
                            break;
                        }
                    }
                    if (!banderaRBTN) {
                        alert('ERROR: Debe elegir una opcion');

                        return false;
                    }
                    console.log(respuest2);
                    agregar(respuest2);
                    // sig = 2;
                    mover(-3);
                    // controlar(s);
                } // fin segunda pregunta

                if (sig == 2) { //Comienzo de la tercera pregunta
                    console.log(siguienteP);
                    document.querySelector('.imgB').style.background = "#4CAF50";
                    document.querySelector('.boton').style.background = "#4CAF50";
                    document.querySelector('#ant').disabled = false;
                    document.querySelector('#ant').addEventListener('click', function() {
                        // sig = 1;
                        bandera = 1;
                        // document.querySelector('#identificador-Pregunta span').innerHTML = 3;
                        document.getElementById('pregunta2').disabled = true;
                        document.getElementById('pregunta2a').disabled = true;
                        document.getElementById('pregunta2b').disabled = true;
                        document.getElementById('pregunta2c').disabled = true;
                        // mover(-2);
                        document.querySelector('#sig').disabled = false;
                        console.log(sig);

                        console.log(' ant')

                    });
                    document.querySelector('#contestadas span').innerHTML = 2;
                    document.querySelector('#identificador-Pregunta span').innerHTML = 3;
                    document.querySelector('#myBar').style.width = 22 + '%';
                    document.querySelector('#myBar span').innerHTML = 22 + '%';
                    console.log('ola11');
                    if (BD[1].dato === "Decimales") {
                        document.querySelector('.numero2').style.background = "green";
                        ConR++;
                        console.log('ola');
                    } else {
                        document.querySelector('.numero2').style.background = "red";
                    }
                    if (bandera == 1) {
                        bandera++;

                        return false
                    }
                    var pregunta3 = document.getElementsByName('pregunta3');
                    var respuest3 = "";

                    // Recorremos todos los valores del radio button para encontrar el
                    // seleccionado

                    var banderaRBTN = false;
                    for (var i = 0; i < pregunta3.length; i++) {
                        if (pregunta3[i].checked && i == 0) {

                            banderaRBTN = true;
                            var respuest3 = "Numericos";
                            break;
                        }
                        if (pregunta3[i].checked && i == 1) {

                            banderaRBTN = true;
                            var respuest3 = "Get,Post,Delete,Put";
                            break;
                        }
                        if (pregunta3[i].checked && i == 2) {

                            banderaRBTN = true;
                            var respuest3 = "Get,Post";
                            break;
                        }
                        if (pregunta3[i].checked && i == 3) {

                            banderaRBTN = true;
                            var respuest3 = "Ninguna de las Anteriores";
                            break;
                        }
                    }
                    if (!banderaRBTN) {
                        alert('ERROR: Debe elegir una opcion');

                        return false;
                    }
                    console.log(respuest3);
                    agregar(respuest3);
                    mover(-4);
                    // controlar(s);


                } // fin tercera pregunta

                if (sig == 3) { //Comienzo de la cuarta pregunta

                    document.querySelector('.imgB').style.background = "#4CAF50";
                    document.querySelector('.boton').style.background = "#4CAF50";
                    document.querySelector('.boton').disabled = false;
                    document.querySelector('#contestadas span').innerHTML = 3;
                    document.querySelector('#identificador-Pregunta span').innerHTML = 4;
                    document.querySelector('#myBar').style.width = 33 + '%';
                    document.querySelector('#myBar span').innerHTML = 33 + '%';
                    console.log('ola11');
                    document.querySelector('#ant').addEventListener('click', function() {
                        // sig = 1;
                        bandera = 2;
                        // document.querySelector('#identificador-Pregunta span').innerHTML = 4;
                        document.getElementById('pregunta3').disabled = true;
                        document.getElementById('pregunta3a').disabled = true;
                        document.getElementById('pregunta3b').disabled = true;
                        document.getElementById('pregunta3c').disabled = true;
                        // mover(-2);
                        document.querySelector('#sig').disabled = false;
                        console.log(sig);

                        console.log(' ant')

                    });
                    if (BD[2].dato === "Get,Post,Delete,Put") {
                        document.querySelector('.numero3').style.background = "green";
                        ConR++;
                        console.log('ola');
                    } else {
                        document.querySelector('.numero3').style.background = "red";
                    }
                    if (bandera == 2) {
                        bandera++;

                        return false
                    }
                    var pregunta4 = document.getElementsByName('pregunta4');
                    var respuest4 = "";

                    // Recorremos todos los valores del radio button para encontrar el
                    // seleccionado

                    var banderaRBTN = false;
                    for (var i = 0; i < pregunta4.length; i++) {
                        if (pregunta4[i].checked && i == 0) {

                            banderaRBTN = true;
                            var respuest4 = "String";
                            break;
                        }
                        if (pregunta4[i].checked && i == 1) {

                            banderaRBTN = true;
                            var respuest4 = "Double";
                            break;
                        }
                        if (pregunta4[i].checked && i == 2) {

                            banderaRBTN = true;
                            var respuest4 = "Int,Float,Booleans";
                            break;
                        }
                        if (pregunta4[i].checked && i == 3) {

                            banderaRBTN = true;
                            var respuest4 = "Todas las Anteriores";
                            break;
                        }
                    }
                    if (!banderaRBTN) {
                        alert('ERROR: Debe elegir una opcion');

                        return false;
                    }
                    console.log(respuest4);
                    agregar(respuest4);

                    mover(-5);


                } // fin cuarta pregunta

                if (sig == 4) { //Comienzo de la quinta pregunta

                    document.querySelector('.imgB').style.background = "#4CAF50";
                    document.querySelector('.boton').style.background = "#4CAF50";
                    document.querySelector('.boton').disabled = false;
                    document.querySelector('#contestadas span').innerHTML = 4;
                    document.querySelector('#identificador-Pregunta span').innerHTML = 5;
                    document.querySelector('#myBar').style.width = 44 + '%';
                    document.querySelector('#myBar span').innerHTML = 44 + '%';
                    document.querySelector('#ant').addEventListener('click', function() {
                        // sig = 1;
                        bandera = 3;
                        // document.querySelector('#identificador-Pregunta span').innerHTML = 5;
                        document.getElementById('pregunta4').disabled = true;
                        document.getElementById('pregunta4a').disabled = true;
                        document.getElementById('pregunta4b').disabled = true;
                        document.getElementById('pregunta4c').disabled = true;
                        // mover(-2);
                        document.querySelector('#sig').disabled = false;
                        console.log(sig);

                        console.log(' ant')

                    });
                    console.log('ola11');
                    if (BD[3].dato === "Todas las Anteriores") {
                        document.querySelector('.numero4').style.background = "green";
                        ConR++;
                        console.log('ola');
                    } else {
                        document.querySelector('.numero4').style.background = "red";
                    }
                    if (bandera == 3) {
                        bandera++;

                        return false
                    }
                    var pregunta5 = document.getElementsByName('pregunta5');
                    var respuest5 = "";

                    // Recorremos todos los valores del radio button para encontrar el
                    // seleccionado

                    var banderaRBTN = false;
                    for (var i = 0; i < pregunta5.length; i++) {
                        if (pregunta5[i].checked && i == 0) {

                            banderaRBTN = true;
                            var respuest5 = "Para nada";
                            break;
                        }
                        if (pregunta5[i].checked && i == 1) {

                            banderaRBTN = true;
                            var respuest5 = "Identificador";
                            break;
                        }
                        if (pregunta5[i].checked && i == 2) {

                            banderaRBTN = true;
                            var respuest5 = "Es una clase";
                            break;
                        }
                        if (pregunta5[i].checked && i == 3) {

                            banderaRBTN = true;
                            var respuest5 = "Todas las Anteriores";
                            break;
                        }
                    }
                    if (!banderaRBTN) {
                        alert('ERROR: Debe elegir una opcion');

                        return false;
                    }
                    console.log(respuest5);
                    agregar(respuest5);

                    mover(-6);


                } // fin quinta pregunta

                if (sig == 5) { //Comienzo de la sexta pregunta

                    document.querySelector('.imgB').style.background = "#4CAF50";
                    document.querySelector('.boton').style.background = "#4CAF50";
                    document.querySelector('.boton').disabled = false;
                    document.querySelector('#contestadas span').innerHTML = 5;
                    document.querySelector('#identificador-Pregunta span').innerHTML = 6;
                    document.querySelector('#myBar').style.width = 55 + '%';
                    document.querySelector('#myBar span').innerHTML = 55 + '%';
                    document.querySelector('#ant').addEventListener('click', function() {
                        // sig = 1;
                        bandera = 4;
                        // document.querySelector('#identificador-Pregunta span').innerHTML = 6;
                        document.getElementById('pregunta5').disabled = true;
                        document.getElementById('pregunta5a').disabled = true;
                        document.getElementById('pregunta5b').disabled = true;
                        document.getElementById('pregunta5c').disabled = true;
                        // mover(-2);
                        document.querySelector('#sig').disabled = false;
                        console.log(sig);

                        console.log(' ant')

                    });
                    console.log('ola11');
                    if (BD[4].dato === "Identificador") {
                        document.querySelector('.numero5').style.background = "green";
                        ConR++;
                        console.log('ola');
                    } else {
                        document.querySelector('.numero5').style.background = "red";
                    }
                    if (bandera == 4) {
                        bandera++;

                        return false
                    }
                    var pregunta6 = document.getElementsByName('pregunta6');
                    var respuest6 = "";

                    // Recorremos todos los valores del radio button para encontrar el
                    // seleccionado

                    var banderaRBTN = false;
                    for (var i = 0; i < pregunta6.length; i++) {
                        if (pregunta6[i].checked && i == 0) {

                            banderaRBTN = true;
                            var respuest6 = "Describe la presentacion del documento";
                            break;
                        }
                        if (pregunta6[i].checked && i == 1) {

                            banderaRBTN = true;
                            var respuest6 = "Son estilo";
                            break;
                        }
                        if (pregunta6[i].checked && i == 2) {

                            banderaRBTN = true;
                            var respuest6 = "Es una clase";
                            break;
                        }
                        if (pregunta6[i].checked && i == 3) {

                            banderaRBTN = true;
                            var respuest6 = "Todas las Anteriores";
                            break;
                        }
                    }
                    if (!banderaRBTN) {
                        alert('ERROR: Debe elegir una opcion');

                        return false;
                    }
                    console.log(respuest6);
                    agregar(respuest6);

                    mover(-7);


                } // fin sexta pregunta

                if (sig == 6) { //Comienzo de la septima pregunta

                    document.querySelector('.imgB').style.background = "#4CAF50";
                    document.querySelector('.boton').style.background = "#4CAF50";
                    document.querySelector('.boton').disabled = false;
                    document.querySelector('#contestadas span').innerHTML = 6;
                    document.querySelector('#identificador-Pregunta span').innerHTML = 7;
                    document.querySelector('#myBar').style.width = 66 + '%';
                    document.querySelector('#myBar span').innerHTML = 66 + '%';
                    document.querySelector('#ant').addEventListener('click', function() {
                        // sig = 1;
                        bandera = 5;
                        // document.querySelector('#identificador-Pregunta span').innerHTML = 7;
                        document.getElementById('pregunta6').disabled = true;
                        document.getElementById('pregunta6a').disabled = true;
                        document.getElementById('pregunta6b').disabled = true;
                        document.getElementById('pregunta6c').disabled = true;
                        // mover(-2);
                        document.querySelector('#sig').disabled = false;
                        console.log(sig);

                        console.log(' ant')

                    });
                    console.log('ola11');
                    if (BD[5].dato === "Describe la presentacion del documento") {
                        document.querySelector('.numero6').style.background = "green";
                        ConR++;
                        console.log('ola');
                    } else {
                        document.querySelector('.numero6').style.background = "red";
                    }
                    if (bandera == 5) {
                        bandera++;

                        return false
                    }
                    var pregunta7 = document.getElementsByName('pregunta7');
                    var respuest7 = "";

                    // Recorremos todos los valores del radio button para encontrar el
                    // seleccionado

                    var banderaRBTN = false;
                    for (var i = 0; i < pregunta7.length; i++) {
                        if (pregunta7[i].checked && i == 0) {

                            banderaRBTN = true;
                            var respuest7 = "Es una función";
                            break;
                        }
                        if (pregunta7[i].checked && i == 1) {

                            banderaRBTN = true;
                            var respuest7 = "Son estilo";
                            break;
                        }
                        if (pregunta7[i].checked && i == 2) {

                            banderaRBTN = true;
                            var respuest7 = "Es una clase";
                            break;
                        }
                        if (pregunta7[i].checked && i == 3) {

                            banderaRBTN = true;
                            var respuest7 = "Ninguna de las Anteriores";
                            break;
                        }
                    }
                    if (!banderaRBTN) {
                        alert('ERROR: Debe elegir una opcion');

                        return false;
                    }
                    console.log(respuest7);
                    agregar(respuest7);

                    mover(-8);


                } // fin septima pregunta

                if (sig == 7) { //Comienzo de la octava pregunta

                    document.querySelector('.imgB').style.background = "#4CAF50";
                    document.querySelector('.boton').style.background = "#4CAF50";
                    document.querySelector('.boton').disabled = false;
                    document.querySelector('#contestadas span').innerHTML = 7;
                    document.querySelector('#identificador-Pregunta span').innerHTML = 8;
                    document.querySelector('#myBar').style.width = 77 + '%';
                    document.querySelector('#myBar span').innerHTML = 77 + '%';
                    document.querySelector('#ant').addEventListener('click', function() {
                        // sig = 1;
                        bandera = 6;
                        document.getElementById('pregunta7').disabled = true;
                        document.getElementById('pregunta7a').disabled = true;
                        document.getElementById('pregunta7b').disabled = true;
                        document.getElementById('pregunta7c').disabled = true;
                        // document.querySelector('#identificador-Pregunta span').innerHTML = 8;
                        // mover(-2);
                        document.querySelector('#sig').disabled = false;
                        console.log(sig);

                        console.log(' ant')

                    });
                    console.log('ola11');
                    if (BD[6].dato === "Ninguna de las Anteriores") {
                        document.querySelector('.numero7').style.background = "green";
                        ConR++;
                        console.log('ola');
                    } else {
                        document.querySelector('.numero7').style.background = "red";
                    }
                    if (bandera == 6) {
                        bandera++;

                        return false
                    }
                    var pregunta8 = document.getElementsByName('pregunta8');
                    var respuest8 = "";

                    // Recorremos todos los valores del radio button para encontrar el
                    // seleccionado

                    var banderaRBTN = false;
                    for (var i = 0; i < pregunta8.length; i++) {
                        if (pregunta8[i].checked && i == 0) {

                            banderaRBTN = true;
                            var respuest8 = "Estamos trabajando con html";
                            break;
                        }
                        if (pregunta8[i].checked && i == 1) {

                            banderaRBTN = true;
                            var respuest8 = "Es un requisito";
                            break;
                        }
                        if (pregunta8[i].checked && i == 2) {

                            banderaRBTN = true;
                            var respuest8 = "Estamos trabajando con html 5";
                            break;
                        }
                        if (pregunta8[i].checked && i == 3) {

                            banderaRBTN = true;
                            var respuest8 = " Ninguna de las Anteriores";
                            break;
                        }
                    }
                    if (!banderaRBTN) {
                        alert('ERROR: Debe elegir una opcion');

                        return false;
                    }
                    console.log(respuest8);
                    agregar(respuest8);

                    mover(-9);


                } // fin octava pregunta
                if (sig == 8) { //Comienzo de la novena pregunta

                    document.querySelector('.imgB').style.background = "#4CAF50";
                    document.querySelector('.boton').style.background = "#4CAF50";
                    document.querySelector('.boton').disabled = false;
                    document.querySelector('#contestadas span').innerHTML = 8;
                    document.querySelector('#identificador-Pregunta span').innerHTML = 9;
                    document.querySelector('#myBar').style.width = 88 + '%';
                    document.querySelector('#myBar span').innerHTML = 88 + '%';
                    document.querySelector('#ant').addEventListener('click', function() {
                        // sig = 1;
                        bandera = 7;
                        // document.querySelector('#identificador-Pregunta span').innerHTML = 9;
                        document.getElementById('pregunta8').disabled = true;
                        document.getElementById('pregunta8a').disabled = true;
                        document.getElementById('pregunta8b').disabled = true;
                        document.getElementById('pregunta8c').disabled = true;
                        document.querySelector('#sig').disabled = false;
                        // mover(-2);

                        console.log(sig);

                        console.log(' ant')

                    });
                    console.log('ola11');
                    if (BD[7].dato === "Estamos trabajando con html 5") {
                        document.querySelector('.numero8').style.background = "green";
                        ConR++;
                        console.log('ola');
                    } else {
                        document.querySelector('.numero8').style.background = "red";
                    }
                    if (bandera == 7) {
                        bandera++;

                        return false
                    }
                    var pregunta9 = document.getElementsByName('pregunta9');
                    var respuest9 = "";

                    // Recorremos todos los valores del radio button para encontrar el
                    // seleccionado

                    var banderaRBTN = false;
                    for (var i = 0; i < pregunta9.length; i++) {
                        if (pregunta9[i].checked && i == 0) {

                            banderaRBTN = true;
                            var respuest9 = "Para cargar estilos";
                            break;
                        }
                        if (pregunta9[i].checked && i == 1) {

                            banderaRBTN = true;
                            var respuest9 = "Es una etiqueta";
                            break;
                        }
                        if (pregunta9[i].checked && i == 2) {

                            banderaRBTN = true;
                            var respuest9 = "Para cargar archivos .js";
                            break;
                        }
                        if (pregunta9[i].checked && i == 3) {

                            banderaRBTN = true;
                            var respuest9 = " Ninguna de las Anteriores";
                            break;
                        }
                    }
                    if (!banderaRBTN) {
                        alert('ERROR: Debe elegir una opcion');

                        return false;
                    }
                    console.log(respuest9);
                    agregar(respuest9);

                    mover(-10);


                } // fin novena pregunta
                if (sig == 9) { //Comienzo de la resolucion pregunta

                    document.querySelector('.imgB').style.background = "#4CAF50";
                    document.querySelector('.boton').style.background = "#4CAF50";
                    document.querySelector('#sig').disabled = true;
                    document.querySelector('#sig').addEventListener('click', function() {
                        console.log('click');
                    });
                    document.querySelector('#contestadas span').innerHTML = 9;
                    document.querySelector('#identificador-Pregunta span').innerHTML = 9;
                    document.querySelector('#myBar').style.width = 100 + '%';
                    document.querySelector('#myBar span').innerHTML = 100 + '%';
                    document.querySelector('#ant').addEventListener('click', function() {
                        // sig = 1;
                        bandera = 8;
                        // document.querySelector('#identificador-Pregunta span').innerHTML = 9;
                        document.getElementById('pregunta9').disabled = true;
                        document.getElementById('pregunta9a').disabled = true;
                        document.getElementById('pregunta9b').disabled = true;
                        document.getElementById('pregunta9c').disabled = true;
                        // mover(-2);

                        console.log(sig);

                        console.log(' ant')

                    });
                    console.log('ola11');
                    if (BD[8].dato === "Para cargar estilos") {
                        document.querySelector('.numero9').style.background = "green";
                        ConR++;
                        console.log('ola');
                        ConR = (ConR / 2) + 0.5;
                        if (ConR == 1) {
                            document.querySelector('#RC').innerHTML = 1;
                        } else if (ConR <= 0) {

                            document.querySelector('#RC').innerHTML = 0;
                        } else if (ConR >= 8.1 || ConR <= 9) {
                            document.querySelector('#RC').innerHTML = 9;
                        } else {
                            document.querySelector('#RC').innerHTML = ConR;
                        }

                        if (ConR >= 5) {
                            document.querySelector('#RP').innerHTML = "APROBADO";
                        } else {
                            document.querySelector('#RP').innerHTML = "REPROBADO";
                        }
                    } else {
                        document.querySelector('.numero9').style.background = "red";
                        ConR = (ConR / 2);
                        if (ConR == 1) {
                            document.querySelector('#RC').innerHTML = 1;
                        }
                        if (ConR <= 0) {

                            document.querySelector('#RC').innerHTML = 0;
                        }
                        if (ConR >= 8.1 || ConR <= 9) {
                            document.querySelector('#RC').innerHTML = 9;
                        }
                        if (ConR > 1 || ConR <= 8) {
                            document.querySelector('#RC').innerHTML = ConR;
                        }

                        if (ConR >= 5) {
                            document.querySelector('#RP').innerHTML = "APROBADO";
                        } else {
                            document.querySelector('#RP').innerHTML = "REPROBADO";
                        }
                    }


                    document.querySelector('#R1').innerHTML = BD[0].dato;
                    document.querySelector('#R2').innerHTML = BD[1].dato;
                    document.querySelector('#R3').innerHTML = BD[2].dato;
                    document.querySelector('#R4').innerHTML = BD[3].dato;
                    document.querySelector('#R5').innerHTML = BD[4].dato;
                    document.querySelector('#R6').innerHTML = BD[5].dato;
                    document.querySelector('#R7').innerHTML = BD[6].dato;
                    document.querySelector('#R8').innerHTML = BD[7].dato;
                    document.querySelector('#R9').innerHTML = BD[8].dato;



                } // fin Mostrar resultados

            }); //final del siguiente por primera vez






        }
    });


});