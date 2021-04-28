document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#time");
    const button = document.querySelector("#change");
    const h1 = document.querySelector("h1")
    const today = new Date();
    
    button.addEventListener("click", () => {
        var time = new Date(today.getFullYear(), today.getMonth(), today.getDate(), input.value.slice(0,2), input.value.slice(3,5));

        setInterval(() => {
            var today = new Date();
            h1.innerHTML = (time - today)/1000
        },50)
    })
})