let values=[8,9,6];

function findGreaterThan(values,x){
    let total=values.every(y => y>x);
    return total;
    
}
console.log(findGreaterThan(values, 7));