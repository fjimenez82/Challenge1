/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function sumaTodosPrimos(array) {
  // La funcion llamada 'sumaTodosPrimos' recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros que sean primos.
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Ej:
  // sumaTodosPrimos([1, 5, 2, 9, 3, 4, 11]) devuelve 5 + 2 + 3 + 11 = 21
  // Nota: Podes usar la funcion 'esPrimo' resuelta en la homework JSII.

  // Tu código aca:
  let suma = 0;
  let bandera = []
  let ban = 0

  for(i=0; i<array.length; i++){
    ban=0;    
  
    if (array[i]===1){
       bandera[i]=false;
    }else if(array[i] === 2){
       bandera[i]=true;
    }else if (array[i]<1){
      bandera[i]=false;
    }else{
       for(let x = 2; x < array[i]; x++){
          if(array[i] % x === 0){
             bandera[i]=false;
             ban=1
          }
       }
       if(ban==0){
       bandera[i]=true;
       }
      // suma += array[x];
       //console.log(suma,"total");       
    }
 }  
 suma=0;
 for(x=0; x<bandera.length; x++){
  if(bandera[x]==true){
    suma += array[x];
  }
 }
 console.log(suma,bandera,"total"); 
   return suma; 
}

// No modifiques nada debajo de esta linea //

module.exports = sumaTodosPrimos