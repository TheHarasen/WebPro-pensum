

console.log('Hello World!');

//Links
$(document).ready(function(){
    $("ul li").each(function() {
        $(this).hide(0);
        const text = $(this).text().trim();
        if (text.startsWith("https://")) {
            const newAnchorTag = $("<a>").attr("href", text).text(text)
            $(this).empty().append(newAnchorTag);
        }
        $(this).show(300);
    })
})


//Inputfields
let fieldDivs = [];
let fields = [];
const div = document.getElementById("fields");

for(let i = 0; i < 5; i++ ){
    fieldDivs.push(document.createElement("div"));
    fields.push(document.createElement("input"));
    fieldDivs[i].appendChild(fields[i]);
    div.appendChild(fieldDivs[i]);
    $(fieldDivs[i]).hide(0);
}

$(fieldDivs[0]).show(300);
$(fieldDivs[1]).show(300);
let i = 2;

//Add
$('#More').on('click', function() {
    console.log("Ngoooore");

    if(i < fieldDivs.length){
        
        $(fieldDivs[i]).show(300);
        i += 1;
        console.log(i);
    }
});

//Remove
$('#Less').on('click', function() {
    console.log("Lessss yesss");

    if(i > 0){
        $(fieldDivs[i - 1]).hide(300);
        i -= 1;
        console.log(i);
    }
});


//Numberplate
let $numPlate = $("#numPlate");
let Value;
let $Valid = $("#Valid");

//Invalid letters  combos
const Rejects = ["BH", "BU", "CC", "CD", "DK", "DU", "EU", "KZ", "MU", "PU", "PY", "SS", "UD", "UN", "VC", "I", "Q"];

$Valid.hide(0);
$numPlate.on("input", function(){
    Value  = $numPlate.val();

    if(Value.length < 2){
        $Valid.hide(200);
    }else {
        if(Value.length > 7){
            $Valid.text("Too big");

        }else if(!validCha(Value.toUpperCase())){
            $Valid.text("Invalid characters");

        }else if(Value.length < 7){
            $Valid.text("Too small");

        }else{
            $Valid.text("Good");
        }
        $(Valid).show(200);
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


$(document).ready(function() {
    $(".sneaker").hover(
        function () {
            $(this)
            .stop(true, false)
            .fadeTo(100, 0);
        },
        function () {
            $(this)
            .stop(true, false)
            .fadeTo(500, 1);
        }
    )
});