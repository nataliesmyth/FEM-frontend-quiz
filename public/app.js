const sectionEl = document.querySelectorAll('.selection-el');
console.log(sectionEl);

function handleSelectionElClick() {
    console.log('click!')
}

sectionEl.forEach(el => {
    el.addEventListener('click', handleSelectionElClick);
});