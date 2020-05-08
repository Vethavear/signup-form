const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');
const button = document.querySelector('i');

function clearHide(){
    labels.forEach(label =>{
        label.classList.remove('hide');
    })
}


inputs.forEach(input =>{
    input.addEventListener('focus', e =>{
clearHide();
        const name = input.name;
        document.querySelector(`label[for="${name}"]`).classList.add('hide');
    })
})

button.addEventListener('click', onClick=>{

button.classList.add('smashDatWall');
})
