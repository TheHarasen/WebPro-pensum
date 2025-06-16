let fieldDivs = [];
let fields = [];
const div = document.getElementById("fields");

let length = 2;

for(let i = 0; i < 5; i++){
    fieldDivs.push(document.createElement("div"));
    fields.push(document.createElement("input"));
    fieldDivs[i].appendChild(fields[i]);
    if (i <= length){
        div.appendChild(fieldDivs[i]);
    }
}

document.getElementById("More").addEventListener("click", function() {
        console.log("More");

    if(length < fieldDivs.length){

        div.appendChild(fieldDivs[length]);
        length += 1;
        console.log(i);
    }
});


document.getElementById("Less").addEventListener("click", function() {
    console.log("less");

    if(length > 0){
        length -= 1;
        div.removeChild(fieldDivs[length]);
        console.log(length);
    }
});