

function showTabActivityInfo(tabNumber = 1) {
    const previousContent = document.querySelector('.tab-activity-information.shown');
    if (previousContent) {
        previousContent.classList.remove('shown');
    }
    const tabContent = document.querySelector(`.tab-activity-information-${tabNumber}`);
    tabContent.classList.add('shown')
}
