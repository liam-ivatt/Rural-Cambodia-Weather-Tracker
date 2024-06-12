async function onclickFunction(e){
    e.preventDefault()

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
