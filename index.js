const sum = (a, b) => {
    
    if(!a && b){

    return "invalid InPut"; 
}
    return a + b;
}

const square =(a) => a * a;

module.exports = {sum, square};
