async function signupFormHandler(event) {
    event.preventDefault();

    // get data from form
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    console.log(username, email, password);
    
    // make POST request at /api/users/ to add new users to db
    // verify username, email, password exist
    if (username && email && password) {
        // first arg is url, second is request object
        const response = await fetch('/api/users', {
            // method is post because a user is being added to the db
            method: 'post',
            // JSON.stringify({}) will make contents into a json object
            body: JSON.stringify({
                username,
                email,
                password
            }),
            // content-type tells api the request is sending a json object
            headers: { 'Content-Type': 'application/json' }
        });

        // check response status
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
};

async function loginFormHandler(event) {
    event.preventDefault();

    // retrieve user input
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // use fetch() to POST login request
    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log('success');
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);