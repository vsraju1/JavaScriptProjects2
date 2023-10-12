const beforeResult = document.querySelector(".order-container")
const afterResult = document.querySelector(".order-result-container")
const orderId = document.querySelector("#orderid");
const searchButton = document.querySelector("button");



searchButton.addEventListener('click', () => {
    console.log(orderId.value)
    if (orderId.value === "1234567"){
        
        beforeResult.style.display = "none";
        afterResult.style.display = "toggle";
    }
})
