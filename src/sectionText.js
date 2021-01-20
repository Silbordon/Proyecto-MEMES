//General
const topImageText = document.getElementById('top-image-text'); //Top text
const bottomImagetext = document.getElementById('bottom-image-text'); //Botton Text

const imageMeme = document.getElementById('image-meme'); //conteiner del meme



//Events
const topText = document.getElementById('top-text'); //Input superior
const bottomText = document.getElementById('bottom-text'); //Input Inferior

const checkboxToptext = document.getElementById('no-top-text'); //Checkbox superior
const checkboxBottonText = document.getElementById('no-bottom-text'); //checkbox inferior

const fontType = document.getElementById('font-type'); //Select Font
const fontSize = document.getElementById('font-size'); //Input Font SIze
const alignLeft = document.getElementById('align-left'); //Align Left
const alignCenter = document.getElementById('align-center'); //Align Center
const alignRight = document.getElementById('align-right'); //Align Right

const fontColor = document.getElementById('font-color'); //Color
const fontColorText = document.getElementById('font-color-text'); //span text color

const fontBack = document.getElementById('font-back'); //Background
const fontBackText = document.getElementById('font-back-text'); //span text background

const checkTransparent = document.getElementById('check-transparent'); //Checkbox Transparent

const outlineNone = document.getElementById('outline-none'); //button outline none
const outlineLight = document.getElementById('outline-light'); //button outline light
const outlineDark = document.getElementById('outline-dark'); //button outline dark

const spacing = document.getElementById('spacing') //Input spacing

const lineSpacing = document.getElementById('line-spacing'); // Select line spacing

    //Function Up Input
    topText.addEventListener('keyup', () => {
        const valueTop = topText.value;
        topImageText.innerHTML = valueTop;
    });


//FunTion Up Checkbok 
checkboxToptext.addEventListener('change', () => {
    if (checkboxToptext.checked) {
        topImageText.classList.add('none');
    } else {
        topImageText.classList.remove('none');
    }
});


//FunTion Botton Input 
bottomText.addEventListener('keyup', () => {
    const valueBottom = bottomText.value;
    bottomImagetext.innerHTML = valueBottom;
});


//Funcion Botton Checkbok 
checkboxBottonText.addEventListener('change', () => {
    if (checkboxBottonText.checked) {
        bottomImagetext.classList.add('none');
    } else {
        bottomImagetext.classList.remove('none');
    }
});


//Funtion Section Font
fontType.addEventListener('change', () => {
    const valueFont = fontType.value;
    topImageText.style.fontFamily = `${valueFont}`;
    bottomImagetext.style.fontFamily = `${valueFont}`;
});


fontSize.addEventListener('input', ()=>{
    const valueFontSize = fontSize.value;
    topImageText.style.fontSize = `${valueFontSize}px`;
    bottomImagetext.style.fontSize = `${valueFontSize}px`;
});

alignLeft.addEventListener('click', ()=>{
    topImageText.style.textAlign = 'left';
    bottomImagetext.style.textAlign= 'left';
});

alignCenter.addEventListener('click', ()=>{
    topImageText.style.textAlign = 'center';
    bottomImagetext.style.textAlign= 'center';
});

alignRight.addEventListener('click', ()=>{
    topImageText.style.textAlign = 'right';
    bottomImagetext.style.textAlign= 'right';
});

// Function Color y background
fontColor.addEventListener('input', ()=>{
    const valueFontColor = fontColor.value;
    topImageText.style.color = valueFontColor;
    bottomImagetext.style.color = valueFontColor;
    fontColorText.innerHTML = valueFontColor.toUpperCase();
});


fontBack.addEventListener('input', ()=>{
    const valueBackColor = fontBack.value;
    topImageText.style.backgroundColor = valueBackColor;
    bottomImagetext.style.background = valueBackColor;
    fontBackText.innerHTML = valueBackColor.toUpperCase();
});

//Function Checkbok-transparent
checkTransparent.addEventListener('change', ()=>{
    if(checkTransparent.checked){
        topImageText.style.backgroundColor = 'transparent';
        bottomImagetext.style.backgroundColor = 'transparent';  
    } else{
        topImageText.style.backgroundColor = `${fontBack.value}`;
        bottomImagetext.style.backgroundColor = `${fontBack.value}`;
    }
});

//Function Buttons Outline
outlineNone.addEventListener('click', ()=>{
    topImageText.style.webkitTextStroke = 'transparent';
    bottomImagetext.style.webkitTextStroke = 'transparent';
});

outlineLight.addEventListener('click', ()=>{
    topImageText.style.webkitTextStroke = '1px white';
    bottomImagetext.style.webkitTextStroke = '1px white';
});

outlineDark.addEventListener('click', ()=>{
    topImageText.style.webkitTextStroke = '2px black';
    bottomImagetext.style.webkitTextStroke = '2px black';
});


//Function Spacing
spacing.addEventListener('input' ,()=>{
    const valueSpacing = spacing.value
    topImageText.style.padding = `${valueSpacing}px 0`;
    bottomImagetext.style.padding = `${valueSpacing}px 0`; 
});


// Function line Spacing
lineSpacing.addEventListener('change', ()=>{
    const valueLineSpacing = lineSpacing.value;
    topImageText.style.lineHeight = valueLineSpacing;
    bottomImagetext.style.lineHeight = valueLineSpacing;
});