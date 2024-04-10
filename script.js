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
    const menu = document.querySelector("#menu-container");
    
    if(window.scrollY > 0){
        console.log("scrolla")
        header.style.top = "-217px";
        hiddenImage.style.opacity = "1";
        menu.style.height = "calc(100vh - 57px)";
    }else{
        console.log("non scrolla")
        header.style.top = "0px";
        hiddenImage.style.opacity = "0";
        menu.style.height = "calc(100vh - 274px)";
    }
});