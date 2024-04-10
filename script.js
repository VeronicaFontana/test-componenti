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
    const logo = document.querySelector("logo");
    
    if (window.scrollY > 0) {
        header.style.top = "-140px";
        logo.style.height = "0";
    } else {
        header.style.top = "0";
        logo.style.height = "140px"; 
    }
});