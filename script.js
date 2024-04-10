// Funzione caricamento template componenti
function loadTemplate(templateName, targetElement) {
    fetch(`components/${templateName}.hbs`)
        .then((response) => response.text())
        .then((template) => {
            const compiledTemplate = Handlebars.compile(template);
            document.querySelector(targetElement).innerHTML = compiledTemplate();
            console.log("LoadTempleate");
        })
        .catch((error) =>
            console.error("Errore durante il caricamento del template:", error)
        );
}

loadTemplate("header", "#header");



//Animazione header 
window.addEventListener("scroll", function(){
    const header = document.querySelector("#header-box");
    const logo = document.querySelector(".logo");
    const hiddenImage = document.querySelector(".hidden-image");
    
    if(window.scrollY > 0){
        console.log("scrolla")
        header.style.top = "-217px";
        logo.style.height = "0px";
        hiddenImage.style.opacity = "1";
    }else{
        console.log("non scrolla")
        header.style.top = "0px";
        logo.style.height = "217px"; 
        hiddenImage.style.opacity = "0";
    }
});