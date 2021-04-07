//2. Write a JavaScript function to get the values of First and Last name of the following form.

function getFormvalue(event) {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;

    console.log(`First name is ${firstName} and the last name is ${lastName}`);
}