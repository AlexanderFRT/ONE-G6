//1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaDelaSemana = prompt('What day of the week is it?');
let goodWeek = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
let goodWeekend = ["Sabado", "Domingo"];

if (goodWeek.includes(diaDelaSemana)) {
    alert('¡Buena semana!');
} else if (goodWeekend.includes(diaDelaSemana)) {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Ese no es un día válido, por favor inténtalo nuevamente!');
}

//2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numeroUsuario = prompt ('Por favor, ingrese un número positivo o negativo:')
console.log(numeroUsuario)

if (numeroUsuario >= 0){
    alert ('Tu número es positivo')
}else{
    alert ('Tu número es negativo')
}

//3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
function tirarDado() {
    return Math.floor(Math.random() * 200) + 1;
}
function juegoDeNumeroAleatorio() {
    let resultadoDelDado = tirarDado();
    if (resultadoDelDado >= 100) {
        alert(`¡Felicidades, sacaste ${resultadoDelDado}. Has ganado!`);
    } else {
        alert(`Sacaste ${resultadoDelDado}. Intenta nuevamente para ganar.`);
    }
}
juegoDeNumeroAleatorio();

//4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldoDeUsuario = '$8.459.674 billetes de monopolio'
    alert ('Tu saldo es de: ' +saldoDeUsuario)

//5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombreDeUsuario = prompt ('Escriba su nombre completo')
console.log (nombreDeUsuario)
alert ('¡Bienvenido a la plataforma ' +nombreDeUsuario+ '!')
