let values=[2,4,6,9,55,21,11];

function findMinimum(values) {
    let total=values.reduce((a,b)=>a>b );
    return total/values.length;
}
console.log(findMinimum(values));