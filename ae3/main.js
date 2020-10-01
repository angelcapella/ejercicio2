const values=[2,1,4,6,8];


values.reduce(function(a, b) {

    return Math.min(a, b);
  
});

console.log(values);