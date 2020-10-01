let values = [22,24,27,11,14,2,3,66,33,13,90,62,30];
function findGreaterThan(x){
    let estado;
    for (let i = 0; i < values.length; i++) {
        if (x == values[i]) {
            estado = true;
            break;

        }else{
            estado = false;
        }
    }
    if (estado == true) {
        alert("Cierto");
    }
    else{
        alert("Falso");
    }
}
let numero = Number(prompt("Introduce un número: "));
findGreaterThan(numero);