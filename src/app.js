// JS Header y Main

const sectionHeader = document.getElementById('section-header');
const sectionMain = document.getElementById('section-main')



// Image y cancel
const btnImage = document.getElementById('btn-image');
const sectionImage = document.getElementById('section-image');
const btncancelImage = document.getElementById('check-img');

// Text y cancel
const btnText = document.getElementById('btn-text')
const sectionText = document.getElementById('section-text');
const btncancelText = document.getElementById('cancel-text');

// Button Themes
const btnModeLight = document.getElementById('btn-modeLight');
const btnModeDark = document.getElementById('btn-modeDark');



// Function button Image y cancel
btnImage.addEventListener('click', ()=>{
    if(window.innerWidth<700){
        sectionImage.style.display = 'block';
        sectionHeader.classList.add('none')
        sectionMain.classList.add('none');
        btncancelImage.style.display = 'block';
    }
    if(window.innerWidth>=700 && window.innerWidth<1300){
        sectionImage.style.display = 'block'; 
        sectionText.style.display ='none';  
    }
    if(window.innerWidth>=1300){
        sectionImage.style.display = 'block'; 
        sectionText.style.display ='none';  
    }
})



btncancelImage.addEventListener('click', ()=>{
    alert('funciono')
    if(window.innerWidth<1300){
        sectionImage.style.display = 'none';
        sectionHeader.classList.remove('none');
        sectionMain.classList.remove('none');
    }
});




// Function button Text y cancel
btnText.addEventListener('click', ()=>{
    if(window.innerWidth<700){
    sectionText.classList.remove('none');
    sectionText.style.display = 'block';
    sectionHeader.classList.add('none');
    sectionMain.classList.add('none');
    }
    if(window.innerWidth>=700 && window.innerWidth<1300){
        sectionText.classList.remove('none'); 
        sectionText.style.display = 'block';
        sectionImage.classList.add('none');
    }
    if(window.innerWidth>=1300){
        sectionText.classList.remove('none');
        sectionImage.classList.add('none');
        sectionText.style.display = 'block';
          
    }
})

btncancelText.addEventListener('click', ()=>{
    sectionText.style.display = 'none';
    sectionText.classList.add('none');
    sectionHeader.classList.remove('none');
    sectionMain.classList.remove('none');
})



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


