const formEl = document.querySelector('.login-form');
const emailInputEl = formEl.querySelector('input[type="email"');
const passwordInputEl = formEl.querySelector('input[type="password"')
const buttonEl = formEl.querySelector('button[type="submit"')


formEl.addEventListener("submit", (event) => { 
    emailInputEl.value && passwordInputEl.value ? console.log({
        email: emailInputEl.value,
        password: passwordInputEl.value
    })
        : alert('fu you nigga!');
    
    event.preventDefault();
});



