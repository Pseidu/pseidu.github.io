function nextImage(){
    //Get all images (slides) in carousel
    const elements = document.getElementsByClassName("slide");
    //Move elements forward
    let auxElement = elements[0].src;
    for (let index = 0; index < (elements.length-1); index++) {
        elements[index].src = elements[index+1].src;
    }
    elements[(elements.length-1)].src = auxElement;
}

function prevImage(){
    //Get all images (slides) in carousel
    const elements = document.getElementsByClassName("slide");
    //Move elements backward
    let auxElement = elements[(elements.length-1)].src;
    for (let index = (elements.length-1); index > 0; index--) {
        elements[index].src = elements[index-1].src;
    }
    elements[0].src = auxElement;
}
