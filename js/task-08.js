const formEl = document.querySelector('.login-form');
const emailInputEl = formEl.querySelector('input[type="email"');
const passwordInputEl = formEl.querySelector('input[type="password"')
const buttonEl = formEl.querySelector('button[type="submit"')


formEl.addEventListener("submit", (event) => { 
    event.preventDefault();
    emailInputEl.value && passwordInputEl.value ? console.log({
        email: emailInputEl.value,
        password: passwordInputEl.value
    })
        : alert('love love love')
    
});



