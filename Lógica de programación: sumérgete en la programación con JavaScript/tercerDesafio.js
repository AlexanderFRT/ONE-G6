// 1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador = 1;

while (contador < 11) {
  console.log('Ejecutando la iteración ' + contador);
  contador = contador + 1;
}

// 2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador = 10;

while (contador > -1) {
  console.log('Ejecutando la iteración ' + contador);
  contador = contador -1;
}

// 3. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numeroUsuario = prompt ('Inserte un número:')
let contador = 0;

while (contador <= numeroUsuario) {
  console.log('Cuenta progresiva ' + contador);
  contador = contador +1;
}

// 4. Crea un programa de cuenta regresiva. Pide un número y cuenta desde el número de usuario hasta 0 utilizando un bucle 'while' en la consola del navegador.
let numeroUsuario = prompt ('Inserte un número:')
let contador = parseInt(numeroUsuario);

while (contador >= 0) {
  console.log('Cuenta regresiva ' + contador);
  contador = contador -1;
}

//5. Crea un programa de cuenta regresiva. 
//   Pide un número y cuenta desde el número de usuario hasta 0 utilizando un bucle 'while' en la consola del navegador y regresa una respuesta al usuario en caso de que no sea correcto.
let numeroUsuario = prompt('Inserte un número:');
let contador = parseInt(numeroUsuario);

// Chequea si el valor insertado es válido
while (isNaN(contador) || contador < 0) {
  alert('Entrada no válida. Por favor, introduzca solo números positivos');
  numeroUsuario = prompt('Inserte un número:');
  contador = parseInt(numeroUsuario);
}

// Contador
while (contador >= 0) {
  console.log('Cuenta regresiva ' + contador);
  contador = contador - 1;
}
