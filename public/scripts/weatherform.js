async function onclickFunction(e){
    e.preventDefault()
    let button = document.getElementById('phoneButton')
    button.innerText = "Submitted!"
    button.style.cursor = "default"
    button.disabled = true

    var emailObject = {
        phoneNum: document.getElementById("phoneNum").value,
    }
    console.log(emailObject)
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
const form = document.querySelector("form").addEventListener("submit", onclickFunction)
