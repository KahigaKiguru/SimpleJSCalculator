
let result = document.getElementById("inputText");

let calculate = (number) => {
    result.value +=  number;
    results();
}

let results = () => {
    
        result.value = eval(result.value);
    

}

function deleteEntry() {
    result.value = result.value.slice(0,-1);
}

function clearInput() {
    result.value = "";
}