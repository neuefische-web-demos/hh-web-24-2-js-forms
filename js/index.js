console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formElements = event.target.elements;
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log('checkbox', formElements.tos.value);
    console.log('checkbox check', formElements.tos.checked); // true only if checkbox is checked
    if(formElements.tos.checked === false) {
        console.log("pay attention");
        formElements.tos.focus();
    }
    event.target.reset(); // resets the form
    formElements.firstName.focus(); // puts focus on First name
    console.log(formElement.lastName.value);
})

const output = document.querySelector('[data-js="remaining-characters"]');

const pm = document.querySelector('[data-js="personal-message"]');
pm.addEventListener("input", (event) => {
    // console.log(150 - event.target.value.length);
    output.innerText = 150 - event.target.value.length;
})

