


let changeBackground = (imageUrl) => {
    document.body.style.backgroundImage = `url("${imageUrl}")`;
}

let toggleGallery = () => {
    let galleryModal = document.getElementById('galleryModal');
    galleryModal.style.display = 'block'; 
}

let closeModal = () => {
    let galleryModal = document.getElementById('galleryModal');
    galleryModal.style.display = 'none';
}