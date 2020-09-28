let dataArray=[5,6,8,22,66,1];

function average(dataArray){
    let total=dataArray.reduce((a,b)=>a+b );
    return total/dataArray.length;
    
}
console.log(average(dataArray));