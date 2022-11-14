function nextImage(){
    //Get all images (slides) in carousel
    const elements = document.getElementsByClassName("slide");
    //Move image elements forward
    let auxElement = elements[0].outerHTML;
    for (let index = 0; index < (elements.length-1); index++) {
        elements[index].outerHTML = elements[index+1].outerHTML;
    }
    elements[(elements.length-1)].outerHTML = auxElement;
    
    
    //Get all descriptions
    const descriptions = document.getElementById("project-description").getElementsByTagName("p");
    //Move descriptions forward
    /*Recorrer la colección HTML
        Si el valor de display es visible entonces
            valor de display = none
            valor de display del siguiente = visible
            salir del bucle
        fin Si
      fin Bucle
    */
    for (let index = 0; index <= (descriptions.length-1); index++) {
        if (window.getComputedStyle(descriptions[index]).getPropertyValue('display') == "block") {
            descriptions[index].style.display = "none";
            if (index == descriptions.length-1) {
                descriptions[0].style.display = "block";
            }else {
                descriptions[index+1].style.display = "block";
            }
            break
        }
    }
}

function prevImage(){
    //Get all images (slides) in carousel
    const elements = document.getElementsByClassName("slide");
    //Move elements backward
    let auxElement = elements[(elements.length-1)].outerHTML;
    for (let index = (elements.length-1); index > 0; index--) {
        elements[index].outerHTML = elements[index-1].outerHTML;
    }
    elements[0].outerHTML = auxElement;

    //Get all descriptions
    const descriptions = document.getElementById("project-description").getElementsByTagName("p");
    //Move descriptions backward
    for (let index = (descriptions.length-1); index >= 0; index--) {
        if (window.getComputedStyle(descriptions[index]).getPropertyValue('display') == "block") {
            descriptions[index].style.display = "none";
            if (index == 0) {
                descriptions[descriptions.length-1].style.display = "block";
            }else {
                descriptions[index-1].style.display = "block";
            }
            break
        }
    }
}
