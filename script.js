console.log('script chargé');

let celsiusTemperature = document.querySelector('#celsiusT');
let farenheitTemperature = document.querySelector('#farenheitT');

celsiusTemperature.addEventListener('keyup', () => {
    let numCelsiusTemperature = parseFloat(celsiusTemperature.value);
    console.log(numCelsiusTemperature);
    if((!isNaN(numCelsiusTemperature) && numCelsiusTemperature!=='')) {
        farenheitTemperature.value = (numCelsiusTemperature*1.8)+32;
    }
    else {
        farenheitTemperature.value = '';
    }
});

farenheitTemperature.addEventListener('keyup', () => {
    let numFarenheitTemperature = parseFloat(farenheitTemperature.value);
    console.log(numFarenheitTemperature);
    if((!isNaN(numFarenheitTemperature) && numFarenheitTemperature!=='')) {
        console.log('c\'est un nombre');
        celsiusTemperature.value = Math.round(((numFarenheitTemperature-32)/1.8)*100)/100;
    }
    else {
        console.log('pas un nombre');
        celsiusTemperature.value = '';
    }

});