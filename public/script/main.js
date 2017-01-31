window.addEventListener('DOMContentLoaded', function(event) {
    var signinButton = document.getElementById('initial-signin-button');

    if (signinButton) {
        signinButton.addEventListener('click', todoSignIn);
    }
});
