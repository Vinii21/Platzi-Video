var estudiantes = ["Maria", "Luis", "Mayx", "Tommy"];

function saludar(estudiante) {
    console.log('Hola,' + estudiante);
} /* Lo que en () en la function es una variable declarada ahí mismo */
/* Esta sería omitiendo el for of y while */
for(var i = 0; i < estudiantes.length; i++) {
    saludar(estudiantes[i]);
}
/* Esta sería omitiendo el for y while */
for (var estudiante of estudiantes) {
    saludar(estudiante);
} /* El for of es otra manera de hacerlo*/

////////////////////////////////////////////////////////////////////
/* Esta sería por supuesto omitiendo el for y for of */
while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludar(estudiante);
}

