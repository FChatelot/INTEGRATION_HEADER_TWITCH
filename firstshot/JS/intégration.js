/**
 * 
 * Notre ModalPlus

// Selection de nos classes*/
const modal = document.querySelector(".modal");

const btn = document.querySelector(".bouton");

btn.addEventListener('click', ()=>{
    modal.classList.toggle('is-visible');
});


/*******Crown button */
const btn2 = document.querySelector(".bouton2");
const popup = document.querySelector(".popup");
const closePopBtn = document.querySelector('.close');

const openPop = function (){
    popup.classList.toggle('is-visible');
}

const closePop = function (){
    popup.classList.remove ('is-visible')
}
btn2.addEventListener('click', openPop);
closePopBtn.addEventListener('click', closePop);




/**Bouton Se connecter */

const btn3 = document.querySelector(".leBoutonConnect");
const primoOverlay= document.querySelector(".modalusWrapus");
const leModal= document.querySelector(".modalusConnectus")
const closeConnect = document.querySelector(".closeConnect");

const openModalConnect = function (){
    primoOverlay.classList.add("hidden");
}

const closeOverlayConnect = function(e){
    if (!leModal.contains(e.target)){
        console.log(primoOverlay.contains(e.target));
    primoOverlay.classList.remove("hidden");
    }
}

 const closeModalConnect = function(){
    primoOverlay.classList.remove("hidden");
 }


btn3.addEventListener('click', openModalConnect);
primoOverlay.addEventListener('click', closeOverlayConnect)
closeConnect.addEventListener('click', closeModalConnect)


// ---------------------Toggle Tab Prime

const wrapTab = document.querySelector(".wrapPrime");
const tabButtons = document.querySelectorAll (".tab-button");
const contents = document.querySelectorAll(".wrappedContent");

wrapTab.onclick = e =>{
    const contentId = e.target.dataset.id;
    if(contentId){
        tabButtons.forEach(primeBtn =>{
            primeBtn.classList.remove("active");
        });
        e.target.classList.add("active");

        contents.forEach(content=>{
            content.classList.remove("active")
        });
        const primeElement = document.getElementById(contentId);
        primeElement.classList.add("active");
    }
}


//Recherches complémentaires


// https://screenspan.net/blog/multiple-modals/



/**https://www.prositeweb.ca/comment-traduire-son-site-web-avec-api-de-traduction-google-ou-traduction-google/ */




/***https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/ */


// const modal = document.querySelectorAll(".modal");

// const btn = document.querySelectorAll(".bouton");

// for (let i =0; i < btn.length; i++){
//     btn[i].addEventListener('click', ()=>{
//         modal.classList.toggle('is-visible');
//     });
// }

//fonction pour faire apparaitre notre dropdown Modal
/*btn.onclick = ()=>{
    console.log(modal.style.display);
    if (modal.style.display ==="block"){
        modal.style.display ="none";
        console.log(modal.style.display)
    }else{
        modal.style.display ="block";
        console.log(modal.style.display)
    }
}
*/
