let initialValue = document.getElementById("initial-value");
let lengthValues = document.getElementById("length-values");
let volumeValues = document.getElementById("volume-values");
let massValues = document.getElementById("mass-values");

function convertlength(){
    console.log(initialValue)
    var imperialLength = initialValue.value * 3.28;
    lengthValues.innerText = initialValue.value + "/" + imperialLength;
}

function convertvolume(){
    //not the correct function
    var imperialVolume = initialValue.value * 0.26;
    volumeValues.innerText = initialValue.value + "/" + imperialVolume;
}

function convertmass(){
    //not the correct function
    var imperialMass = initialValue.value * 2.2;
    massValues.innerText = initialValue.value + "/" + imperialMass;
}

function convert(){
convertlength();
convertvolume();
convertmass();
}

initialValue.addEventListener('input', convert);

