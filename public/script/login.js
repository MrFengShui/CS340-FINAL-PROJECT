/**
 * Function: todoSignIn
 * Parameter:
 * Description: To do login.
 */
function todoSignIn() {
    var username = document.getElementById('initial-input-username').value;
    var password = document.getElementById('initial-input-password').value;
    var role = document.getElementById('initial-select-role').value;
    /*Rredirect to '/validate/signin' and then send post request to server*/
    var postURL = '/validate/signin';
    var postRequest = new XMLHttpRequest();
    postRequest.open('POST', postURL);
    postRequest.setRequestHeader('Content-Type', 'application/json');

    if (username != '' && password != '' && role != '') {
        postRequest.send(JSON.stringify({
            username: username,
            password: password,
            role: role
        }));
        /*Get response from server and then login if it is validated*/
        postRequest.addEventListener('load', function(event) {
            console.log(event.target.response);
            person = JSON.parse(event.target.response);

            if (person.role == 'visitor') {
                window.location.href = '/consumer-page%id=' + person.result['CONSUMER_ID'] + '%%name=' + person.result['CONSUMER_FIRST_NAME'] + ' ' + person.result['CONSUMER_LAST_NAME'] + '%%type=' + defineVisitorType(person.result['CONSUMER_TYPE']) + '%';
            } else {
                window.location.href = '/staff-page%id=' + person.result.id + '%%name=' + person.result.name + '%%type=' + defineAdminType(person.result.type) + '%';
            }
        });
    } else {
        alert('You must enter username and password or choose role.');
    }
}
