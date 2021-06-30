let dropdown = document.getElementById('units');
let inputWeight = document.getElementById('weight');
let output = document.getElementById('outputbox');


inputWeight.addEventListener('input', convertPounds);
dropdown.addEventListener('input', convertKg);


function convertPounds() {
    if(dropdown.value ==='kg') {
        let weight = inputWeight.value;
        weight = (weight*2.2).toFixed(2)
        output.innerHTML = `${weight} pounds`
    }
    if (dropdown.value === 'pounds') {
        let weight = inputWeight.value;
        weight = (weight/2.2).toFixed(2)
        output.innerHTML = `${(weight)} kilograms`
    }
}

function convertKg() {
    if (dropdown.value === 'pounds') {
        let weight = inputWeight.value;
        weight = (weight/2.2).toFixed(2)
        output.innerHTML = `${(weight)} kilograms`
    }
    if(dropdown.value ==='kg') {
        let weight = inputWeight.value;
        weight = (weight*2.2).toFixed(2)
        output.innerHTML = `${weight} pounds`
    }
}

