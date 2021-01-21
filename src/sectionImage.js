
//General
const backColorSpan = document.getElementById('back-color-span');

//Events

const url = document.getElementById('url'); //Input de la URL
const backColor = document.getElementById('back-color'); //Input de background-color
const backStyles = document.getElementById('back-styles'); //Select background-color

const brightness = document.getElementById('brightness'); //Filter brightness
const opacity = document.getElementById('opacity'); //Filter opacity
const contrast = document.getElementById('contrast'); //Filter constrast
const blurFilter = document.getElementById('blur'); //Filter blur
const grayscale = document.getElementById('grayscale'); //Filter grayscale
const sepia = document.getElementById('sepia'); //Filter sepia
const hue = document.getElementById('hue'); //Filter hue
const saturated = document.getElementById('saturated'); //Filter saturated
const invert = document.getElementById('invert'); //Filter inverted

const resetFilters = document.getElementById('reset-filters'); //Button reset filters




//Function de URL
url.addEventListener('keyup', ()=>{
    const valueUrl = url.value;
    imageMeme.style.backgroundImage = `url('${valueUrl}')`;
    imageMeme.style.backgroundPosition = 'center';
    imageMeme.style.backgroundRepeat = 'no-repeat';
});


//Function Background
backColor.addEventListener('input' , ()=>{
    const valueBackColorImg= backColor.value;
    imageMeme.style.backgroundColor = valueBackColorImg;
    backColorSpan.innerHTML = `${valueBackColorImg}`.toLocaleUpperCase()
});


backStyles.addEventListener('change', ()=>{
    const valueBackStiles = backStyles.value;
    imageMeme.style.backgroundBlendMode = valueBackStiles
});





// Function Filters Short
const actualizarFilters = () =>{
    imageMeme.style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blurFilter.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturated.value}%) invert(${invert.value})`
};


brightness.addEventListener('input', actualizarFilters);
opacity.addEventListener('input', actualizarFilters);
contrast.addEventListener('input', actualizarFilters);
blurFilter.addEventListener('input', actualizarFilters);
grayscale.addEventListener('input', actualizarFilters);
sepia.addEventListener('input', actualizarFilters);
hue.addEventListener('input', actualizarFilters);
saturated.addEventListener('input', actualizarFilters);
invert.addEventListener('input', actualizarFilters);




// Resolution Filter Longer
// const actualizarFilters = () =>{
//     imageMeme.style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blurFilter.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturated.value}%) invert(${invert.value})`
// };



// brightness.addEventListener('input', ()=>{
//     const valueBritness = brightness.value;
//     imageMeme.style.filter = `brightness(${valueBritness})`
//     actualizarFilters();
// });


// opacity.addEventListener('input', ()=>{
//     const valueOpacity = opacity.value;
//     imageMeme.style.filter = `opacity(${valueOpacity})`
//     actualizarFilters();
// });


// contrast.addEventListener('input', ()=>{
//     const valueContrast = contrast.value;
//     imageMeme.style.filter = `contrast(${valueContrast}%)`
//     actualizarFilters();
// });


// blurFilter.addEventListener('input', ()=>{
//     const valueBlur = blurFilter.value;
//     imageMeme.style.filter = `blur(${valueBlur}px)`
//     actualizarFilters();
// });


// grayscale.addEventListener('input', ()=>{
//     const valueGrayScale = grayscale.value;
//     imageMeme.style.filter = `grayscale(${valueGrayScale}%)`
//     actualizarFilters();
// });


// sepia.addEventListener('input', ()=>{
//     const valueSepia = sepia.value;
//     console.log(valueSepia);
//     imageMeme.style.filter = `sepia(${valueSepia}%)`
//     actualizarFilters();
// });


// hue.addEventListener('input', ()=>{
//     const valueHue = hue.value;
//     imageMeme.style.filter = `hue-rotate(${valueHue}deg)`
//     actualizarFilters();
// });

// saturated.addEventListener('input', ()=>{
//     const valueSaturated = saturated.value;
//     imageMeme.style.filter = `saturate(${valueSaturated}%)`
//     actualizarFilters();
// });

// invert.addEventListener('input', ()=>{
//     const valueInvert = invert.value;
//     imageMeme.style.filter = `invert(${valueInvert})`
//     actualizarFilters();
// });



// Function Reset Filters
resetFilters.addEventListener('click', ()=>{
    brightness.value = '1';
    opacity.value= '1';
    contrast.value= '100';
    blurFilter.value= '0';
    grayscale.value = '0';
    sepia.value = '0';
    hue.value= '0';
    saturated.value = '100';
    invert.value = '0';
    actualizarFilters();
    // imageMeme.style.filter = '';
});