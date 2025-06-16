//Numberplate
let input = document.getElementById("input");
let Value;
let Status = document.createElement("Status");
let StatusField = document.getElementById("StatusField");

const Rejects = ["BH", "BU", "CC", "CD", "DK", "DU", "EU", "KZ", "MU", "PU", "PY", "SS", "UD", "UN", "VC", "I", "Q"];

input.addEventListener("input", function() {
    Value = input.value.toUpperCase();

    //Length check, character check
    if(Value.length < 2){
        StatusField.removeChild(Status);
    }else {
        if(Value.length > 7){
            Status.innerHTML = "Too big";

        }else if(!validCha(Value.toUpperCase())){
            Status.innerHTML = "Invalid characters";

        }else if(Value.length < 7){
            Status.innerHTML = "Too small";

        }else{
            Status.innerHTML = "Good";
        }
        StatusField.appendChild(Status);
    }
})


function validCha(Value){
    //Checks numbers
    if (Value.length > 2){
        for(let i = 2; i < Value.length; i++){
            if(!/[0-9]/.test(Value[i])){
                return false;
            };
        }
    }

    //Checks letters
    return (
        /[A-Z]/.test(Value[0]) && 
        /[A-Z]/.test(Value[1]) &&
        !(
            Rejects.includes(Value[0] + Value[1]) ||
            Rejects.includes(Value[0]) ||
            Rejects.includes(Value[1])
        ) &&
        Value[1] != "O"
    );
}