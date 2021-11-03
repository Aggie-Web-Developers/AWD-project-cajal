// JS File for Login View

function handleSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    console.log(username + " " + password);
    window.location.href = '/admin';
}

document.getElementById("login").addEventListener("submit", handleSubmit);