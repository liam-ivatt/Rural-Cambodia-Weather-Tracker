async function onclickFunction(e){
    e.preventDefault()

    // Button attributes and styles
    let button = document.getElementById('phoneButton')
    button.innerText = "Submitted!"
    button.style.cursor = "default"
    button.disabled = true

    // Define object to store phone number
    var emailObject = {
        phoneNum: document.getElementById("phoneNum").value,
    }

    // Response Handler
    var response = await fetch("/submit",
    {
        method:"POST",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:(JSON.stringify(emailObject))
    })
}

// Listening for button click to submit
const form = document.querySelector("form").addEventListener("submit", onclickFunction)
