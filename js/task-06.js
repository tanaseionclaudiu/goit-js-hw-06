const input = document.querySelector("#validation-input");
const validFieldLength = Number(input.dataset.length);

input.addEventListener("blur", () => {
    if (input.value.length === validFieldLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else { 
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
});