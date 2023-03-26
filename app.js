document.getElementById('submit_btn').addEventListener('click', function(){
    const emailInput = document.getElementById('email_input');
    const emailValue = emailInput.value;
    let passwordInput = document.getElementById('password_input');
    const  passwordValue = passwordInput.value;
        if(emailValue === 'anikkumaardatta@gmail.com' && passwordValue == 1234){
            window.location.href = "bank.html";
        }
        else{
            emailInput.style.outline = '2px solid red';
            passwordInput.style.outline = '2px solid red';
            const headding = document.getElementById('headding');
            headding.innerText = "invalid password. (Please check your username and password and try again.)";
            headding.style.color = 'red';
            headding.style.fontSize = '18px'
        }
})
