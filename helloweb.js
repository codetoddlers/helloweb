function exponent(){
    var baseValue = document.getElementById("base").value;
    var powerValue = document.getElementById("power").value;
    var resultValue = calculateExponent(baseValue,powerValue);
    alert("Hello! the exponential form of " + baseValue + " ^ " + powerValue + " = " +resultValue );
    document.getElementById("result").innerHTML= resultValue;
}
function calculateExponent(base, power){
    var result = 1;
    var raiseTill = 1;
    while(raiseTill <= power){
    result = result * base;
    raiseTill++;
    }
    return result;
}