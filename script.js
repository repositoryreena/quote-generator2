const btnEl = document.getElementById("btn")
const quoteEl = document.getElementById("quoteEl")
const author = document.getElementById("author")
const apiKey = "nQQGEPTFTaQn865mm8xYMg==gwG63zWk2t8aRdX9"
const apiURL = "https://api.api-ninjas.com/v1/quotes"
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}

async function getQuote(){
try {
    quoteEl.innerText = "Updating..."
    btnEl.disabled=true
    btnEl.innerText = "Loading..."
    const response = await fetch(apiURL, options)
    const data = await response.json()
    quoteEl.innerText = '"'+data[0].quote+'"'
    author.innerText="-"+data[0].author
    console.log(data)
    btnEl.disabled=false
    btnEl.innerText = "GET A QUOTE"
}catch(error){
quoteEl.innerText = "An error happened, try again later"
}
}

btnEl.addEventListener("click", getQuote)