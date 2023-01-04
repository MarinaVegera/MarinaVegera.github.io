/*function toggleCategoryInput() {
    const box = document.querySelector('.category-radio-block');
    if (box.classList.contains('hide')) {
        box.classList.remove('hide')
    } else {
        box.classList.add('hide')
    }
}*/
function openContentCategory() {
    const dialog = document.querySelector('.choice-radio-container-category');
    dialog.classList.toggle('shown');
    const item = document.querySelector('.expand-item-category');
    item.classList.toggle('add-expand-rotate');
}
function openContentWhom() {
    const dialog = document.querySelector('.choice-radio-container-whom');
    dialog.classList.toggle('shown');
    const item = document.querySelector('.expand-item-whom');
    item.classList.toggle('add-expand-rotate');
}
function openContentPrice() {
    const dialog = document.querySelector('.choice-radio-container-price');
    dialog.classList.toggle('shown');
    const item = document.querySelector('.expand-item-price');
    item.classList.toggle('add-expand-rotate');
}
/*function changeCategory() {
    const box = document.querySelector('#box');
    const categoryInput = document.querySelector('#category-input');

    const cate = colorInput.value;

    box.style.backgroundColor = color;

    console.log(box.style.backgroundColor);
    console.log(getComputedStyle(box).color);
}*/

/*document.querySelector('.radio-item').addEventListener('click', () => */
function changeCategory() {
    let radioCategory = document.querySelectorAll('.radio-item');
    let data;
    for (let i = 0; i < radioCategory.length; i++) {
        if (radioCategory[i].checked) {
            data = radioCategory[i].value;
            break;
        }
    }
   /* document.querySelector('#category-input').value = data;*/
    document.querySelector('.value-choice').textContent = data;
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
    /*console.log(currentImageIndex);*/
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
