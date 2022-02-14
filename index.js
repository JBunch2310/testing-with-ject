const sum = (a, b) => {
    
    if(!a || b){
    console.log("Went inside if statement")
    return "invalid InPut"; 
}
    console.log("this is a", a, "this is b", b)
    return a + b;
}

console.log("The sum is:", sum(null, 6))

module.exports = sum;
