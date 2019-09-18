
function sortarray(){
    var i;
    var x = [1,2,3,4,5,6,7,8,9,'q','f','b','x'];
    var even = Array();
    var odd  = Array();
    var char = Array();
    for(i = 0; i < x.length; i++){
        if (isNaN(x[i])){
        char.push(x[i]);
        }
        else if(i%2 === 0){
            even.push(x[i]);
        }
    else{
        odd.push(x[i]);
    }
}
    return {'even':even, 'odd':odd, 'array':char};
}
console.log(sortarray());












