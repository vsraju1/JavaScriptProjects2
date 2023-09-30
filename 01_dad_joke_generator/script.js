// having set of jokes in an array
const jokes = ["joke1", "joke2", "joke3", "joke4", "joke5", "joke6", "joke7", "joke8", "joke9", "joke10"]

// get the button element(tell me a joke)
const btn = document.getElementById("btn");

// get the paragraph element(to display the jokes)
const joke = document.getElementById("joke");

btn.addEventListener("click", () => {
    // generating a random number to pick a joke from jokes array
    const randomNum = Math.floor(Math.random() * jokes.length);
    joke.innerHTML = jokes[randomNum]
})
