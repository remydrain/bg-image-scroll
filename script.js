const backgroundImage = document.getElementById('bg-image');

window.addEventListener('scroll', () => {
    updateImage();
});

function updateImage() {
    backgroundImage.style.opacity = 1 - window.scrollY / 900;
    backgroundImage.style.backgroundSize = 100 + window.scrollY + "%";
}