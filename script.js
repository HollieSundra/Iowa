document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    if (form) {

        document.getElementById('confirmEmail').addEventListener('input', function () {
            validateEmailMatch();
        });


        form.addEventListener('submit', function (event) {
            event.preventDefault();

            if (validateEmail()) {

                alert('Message sent successfully!');

                clearForm();
            }

            return false;
        });
    }
});

function validateEmail() {
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirmEmail').value;

    if (email !== confirmEmail) {
        alert('Emails must match!');
        return false;
    }


    return true;
}

function clearForm() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('confirmEmail').value = '';
    document.getElementById('message').value = '';
}
