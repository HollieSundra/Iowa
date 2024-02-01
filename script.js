document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    if (form) {

        var confirmEmail = document.getElementById('confirmEmail');
        confirmEmail.addEventListener('input', function () {
            checkEmailMatch();
        });

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            if (checkForm()) {
                alert('Message sent successfully!');
                clearForm();
            }

            return false;
        });
    }
});

function checkEmail() {
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirmEmail').value;

    if (email !== confirmEmail) {
        return false;
    }

    return true;
}

function checkForm() {
    var isEmailValid = checkEmail();

    if (!isEmailValid) {
        alert('Emails must match!');
        return false;
    }

    return true;
}

function checkEmailMatch() {
    var isEmailValid = checkEmail();
    var confirmEmail = document.getElementById('confirmEmail');

    if (!isEmailValid) {
        confirmEmail.style.backgroundColor = 'rgb(232, 94, 94)';
    } else {
        confirmEmail.style.backgroundColor = '';
    }
}

function clearForm() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('confirmEmail').value = '';
    document.getElementById('message').value = '';

    
    document.getElementById('confirmEmail').style.borderColor = '';
}

