function nextImage(){
    //Get all images (slides) in carousel
    const elements = document.getElementsByClassName("slide");
    //Move elements forward
    let auxElement = elements[0].outerHTML;
    for (let index = 0; index < (elements.length-1); index++) {
        elements[index].outerHTML = elements[index+1].outerHTML;
    }
    elements[(elements.length-1)].outerHTML = auxElement;
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
}
