const topText = document.getElementById('top-text'); //Input superior
const bottomText = document.getElementById ('bottom-text'); //Input Inferior

const topImageText = document.getElementById('top-image-text'); //Top text
const bottomImagetext = document.getElementById('bottom-image-text'); //Botton Text

const checkboxToptext = document.getElementById('no-top-text'); //Checkbox superior
const checkboxBottonText = document.getElementById('no-bottom-text'); //checkbox inferior

const imageMeme = document.getElementById('image-meme'); //conteiner del meme

//Funcion Input Superior
topText.addEventListener('keyup', ()=>{
const valueTop = topText.value;
topImageText.innerHTML = valueTop;
});

//Funcion Checkbok Superior
checkboxToptext.addEventListener('change', ()=>{
    if(checkboxToptext.checked){
        topImageText.classList.add('none');
     

    }else{
        topImageText.classList.remove('none');
        
    };
});

//Funcion Input Inferior
bottomText.addEventListener('keyup', ()=>{
    const valueBottom = bottomText.value;
    bottomImagetext.innerHTML = valueBottom;
});

//Funcion Checkbok Inferior
checkboxBottonText.addEventListener('change', ()=>{
    if(checkboxBottonText.checked){
        bottomImagetext.classList.add('none');
        

    }else{
        bottomImagetext.classList.remove('none');
       
    };
});

