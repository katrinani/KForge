
const button = document.querySelector('#name') as HTMLButtonElement
const input = document.querySelector('#name') as HTMLInputElement;

button.addEventListener('click', (event  ) => {
    event.preventDefault();
    input.removeAttribute('readonly')
});