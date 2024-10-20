
const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {

    event.preventDefault();
    
    if (form.elements.email.value.length === 0 && form.elements.password.value.length === 0) {
         alert('Completați adresa de e-mail și parola!');       
    }
    else {
        const submittedObject = {};
        for (let i = 0; i < form.elements.length - 1; i++) {
            submittedObject[form.elements[i].name] = form.elements[i].value;
        }
        
        console.log(submittedObject);

        form.reset();

    }

    return false;
});

