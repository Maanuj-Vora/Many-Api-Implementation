function atlaQuote() {
    fetch("https://many-api.vercel.app/atla-quote/random")
        .then(response => response.json())
        .then(data => {

            quote = data.quote;
            author = data.author;

            document.getElementById("quote").innerHTML = data.quote;
            document.getElementById("author").innerHTML = data.author;

        })
}