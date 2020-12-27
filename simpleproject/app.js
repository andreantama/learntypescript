function add(a, b, pharse, showresult) {
    var result = (a + b);
    if (showresult == true) {
        console.log(pharse + result);
    }
    else {
        return result;
    }
}
var a = 50;
var b = 100;
var pharse = "Result is ";
var showresult = false;
add(a, b, pharse, showresult);
