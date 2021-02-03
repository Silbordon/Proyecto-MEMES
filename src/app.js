// JS Header y Main

const sectionHeader = document.getElementById('section-header');
const sectionMain = document.getElementById('section-main')


// Image y cancel
const btnImage = document.getElementById('btn-image');
const sectionImage = document.getElementById('section-image');
const btncancel = document.getElementById('cancel');
const asideContainerGeneral = document.getElementById('aside-container-general');


// Text 
const btnText = document.getElementById('btn-text')
const sectionText = document.getElementById('section-text');


// Button Themes
const btnModeLight = document.getElementById('btn-modeLight');
const btnModeDark = document.getElementById('btn-modeDark');


//Container Meme
const containerMeme = document.getElementById('container-meme');
const btnDownloadMeme = document.getElementById('btn-download-meme');



//Responsive con Js al modificar el tamaño de la pantalla
window.addEventListener('resize', ()=>{

    if(window.innerWidth>700){
        asideContainerGeneral.style.display = 'block';   
    } else{
        asideContainerGeneral.classList.add('none');
    }
});


// Function button Image Text y cancel
btnImage.addEventListener('click', ()=>{
    asideContainerGeneral.style.display = 'block';
    sectionImage.style.display = 'block';
    sectionText.style.display ='none';  
});

btncancel.addEventListener('click', ()=>{
    asideContainerGeneral.style.display = 'none';  
});


btnText.addEventListener('click', ()=>{
    asideContainerGeneral.style.display = 'block';
    sectionImage.style.display = 'none';
    sectionText.style.display ='block'; 
});


// Function Theme Light and Dark
btnModeLight.addEventListener('click', ()=>{
    document.body.classList.add('dark');
    btnModeLight.classList.add('none');
    btnModeDark.classList.remove('none');
})


btnModeDark.addEventListener('click', ()=>{
    document.body.classList.remove('dark');
    btnModeLight.classList.remove('none');
    btnModeDark.classList.add('none');
})



// Function button download
btnDownloadMeme.addEventListener('click', ()=>{
domtoimage.toBlob(containerMeme)
    .then(function (blob) {
        saveAs(blob, 'my-meme.png');
    });
})



// End 


































    // if(window.innerWidth >700){
    //     asideContainerGeneral.style.display = 'block';
    // const memeContainerSize = (memeContainer.getBoundingClientRect().width) / 16;
    // memeContainer.style.height = `${memeContainerSize}rem`;

    // const windowSize = window.innerWidth / 10
    // console.log(windowSize);
    // const textSize = Math.round(windowSize * 0.3);
    // const paddSize = Math.round(windowSize * 0.2);
    
    // topTextBox.style.fontSize = `${textSize}px`;
    // bottomTextBox.style.fontSize = `${textSize}px`;
    // topTextBox.style.padding = `${paddSize}px 40px`
    // bottomTextBox.style.padding = `${paddSize}px 40px`;

    // fontSize.value = textSize;
    // fontSpacing.value = paddSize;
    // } else{

    //     asideContainerGeneral.style.display = 'none';
    // };