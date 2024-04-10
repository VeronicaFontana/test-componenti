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
    const content = document.querySelector("#content");
    
    if (window.scrollY > 0) {
        header.style.top = "-217px";
        logo.style.height = "0";
        content.style.margin = "70px 0px 0px 0px";
    } else {
        header.style.top = "0";
        logo.style.height = "217px"; 
    }
});