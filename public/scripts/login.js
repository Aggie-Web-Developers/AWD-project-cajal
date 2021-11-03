// JS File for Index View

function handleSubmit(event) {
    event.preventDefault();
    const url = event.target[0].value;
    const shortened = event.target[1].value;
    console.log(url + " " + shortened);
    window.location.href = '/admin';
    // fetch("/url", {
    //     method: "POST", 
    //     body: JSON.stringify({url, shortened}), 
    //     headers: {"Content-Type": "application/json"}
    // }).then(function (response) {
    //     response.json();
    // }).then(function (data) {
    //     console.log(data);
    // });
}

document.getElementById("login").addEventListener("submit", handleSubmit);