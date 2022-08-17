document.getElementById('btn-submit').addEventListener('click', function () {

    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    if (email == 'sr@gmail.com' && password == '12345') {
        window.location.href = 'stock.html';
        // alert('Log In Successful');
    }
    else {
        alert('Invalid user or password');
    }

    console.log(email, password);
})