function nombres(x) {
    x.surname = 'Doe';
}

let array = [{'name':'pepe'},{'name':'juan'}];
array.forEach(nombres);
console.log(array[0]);
console.log(array[1]);