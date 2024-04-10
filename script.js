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