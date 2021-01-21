
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




// Function Filters
brightness.addEventListener('input', ()=>{
    const valueBritness = brightness.value;
    imageMeme.style.filter = `brightness(${valueBritness})`
    
});

opacity.addEventListener('input', ()=>{
    const valueOpacity = opacity.value;
    imageMeme.style.filter = `opacity(${valueOpacity})`
});

contrast.addEventListener('input', ()=>{
    const valueContrast = contrast.value;
    imageMeme.style.filter = `contrast(${valueContrast}%)`
});


blurFilter.addEventListener('input', ()=>{
    const valueBlur = blurFilter.value;
    imageMeme.style.filter = `blur(${valueBlur}px)`
});


grayscale.addEventListener('input', ()=>{
    const valueGrayScale = grayscale.value;
    imageMeme.style.filter = `grayscale(${valueGrayScale}%)`
});

sepia.addEventListener('input', ()=>{
    const valueSepia = sepia.value;
    imageMeme.style.filter = `sepia(${valueSepia}%)`
});

hue.addEventListener('input', ()=>{
    const valueHue = hue.value;
    imageMeme.style.filter = `hue-rotation(${valueHue}deg)`
});

saturated.addEventListener('input', ()=>{
    const valueSaturated = saturated.value;
    imageMeme.style.filter = `saturation(${valueSaturated}%)`
});

invert.addEventListener('input', ()=>{
    const valueInvert = invert.value;
    imageMeme.style.filter = `invert(${valueInvert})`
});