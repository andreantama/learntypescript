function add(a: number, b: number, pharse: string, showresult: boolean){
    const result = (a + b);
    if(showresult == true){
        console.log(pharse + result);
    } else {
        return result;
    }
}

const a = 50;
const b = 100;
const pharse = "Result is ";
const showresult = false;

add(a, b, pharse, showresult);

