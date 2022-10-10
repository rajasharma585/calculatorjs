let result = document.getElementById("inputext");

let calculate = (number) =>{
// result.value = result.value+number;
result.value += number;
// console.log(number);
}

let clr = () =>{
    result.value = " ";
} 


let del = () =>{
    result.value = result.value.slice(0,-1);
} 

let Result = () =>{
    try{
        result.value = eval(result.value);
    }
    catch(err){
            alert("Action not valid");
    }

} 