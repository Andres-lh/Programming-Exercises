/*Para este ejercicio recibirás una serie o un arreglo de números y con base en estos tendrás 
que usar la fórmula de la media muestral para obtener la media de los datos.*/

let array = [5, 6, 6, 7 , 8, 0, 0] 

function media(array){
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }

    return sum / array.length;

}

console.log(media(array));