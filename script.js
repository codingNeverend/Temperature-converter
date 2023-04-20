console.log('script chargé');

let celsiusTemperature = document.querySelector('#celsiusT');
let farenheitTemperature = document.querySelector('#farenheitT');

celsiusTemperature.addEventListener('keyup', () => {
    let numCelsiusTemperature = parseFloat(celsiusTemperature.value);
    console.log(numCelsiusTemperature);
    if((!isNaN(numCelsiusTemperature) && numCelsiusTemperature!=='')) {
        farenheitTemperature.value = (numCelsiusTemperature*1.8)+32;
        if (numCelsiusTemperature > 30) {
         document.body.style.background = "linear-gradient(to right, rgb(233, 224, 174), rgb(230, 107, 96))";
        }
        else
        {
            document.body.style.background = "linear-gradient(to right, rgb(174, 174, 233), rgb(96, 163, 230))";
        }
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
        if (numFarenheitTemperature > 86) {
            document.body.style.background = "linear-gradient(to right, rgb(233, 224, 174), rgb(230, 107, 96))";
           }
           else
           {
               document.body.style.background = "linear-gradient(to right, rgb(174, 174, 233), rgb(96, 163, 230))";
           }
    }
    else {
        console.log('pas un nombre');
        celsiusTemperature.value = '';
    }

});