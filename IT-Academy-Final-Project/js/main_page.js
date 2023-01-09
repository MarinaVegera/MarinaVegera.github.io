function openContent(type) {
    const dialog = document.querySelector('.choice-radio-container-' + type);
    dialog.classList.toggle('shown');
    const item = document.querySelector('.expand-item-' + type);
    item.classList.toggle('add-expand-rotate');
}

function changeCategory(type) {
    let radioCategory = document.querySelectorAll('.radio-item-' + type);
    let data;
    for (let i = 0; i < radioCategory.length; i++) {
        if (radioCategory[i].checked) {
            data = radioCategory[i].value;
            break;
        }
    }
    document.querySelector('.value-choice-' + type).textContent = data;
}

let currentImageIndex = 0;
const IMAGE_COUNT = 5;
const IMAGE_WIDTH = 330;
function goToNext(step) {
    currentImageIndex = currentImageIndex + step;
    const offset = IMAGE_WIDTH * currentImageIndex;
    const imageContainer = document.querySelector('.inner-offering-container');
    imageContainer.style.transform = `translateX(-${offset}px)`
    disableButtons();

}
function disableButtons() {
    const [prev, next] = document.querySelectorAll('.carousel-offering-button');
    if (currentImageIndex === 0) {
        prev.setAttribute('disabled', 'true')
    } else {
        prev.removeAttribute('disabled');
    }
    if ((currentImageIndex + 1) === IMAGE_COUNT) {
        next.setAttribute('disabled', 'true')
    } else {
        next.removeAttribute('disabled');
    }
}
