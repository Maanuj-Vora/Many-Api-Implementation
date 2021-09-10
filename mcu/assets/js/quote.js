function mcuQuote() {
    fetch("https://many-api.vercel.app/marvel-quote/random")
        .then(response => response.json())
        .then(data => {

            quote = data.quote;
            author = data.author;

            document.getElementById("quote").innerHTML = data.quote.replaceAll('\\n', '<br>');
            document.getElementById("author").innerHTML = data.author;
            document.getElementById("movie").innerHTML = data.movie;

            backColor = []
            textColor = []

            if (data.author.includes('Tony Stark') || data.author.includes('Iron Man')) {
                backColor.push("#4b0908");
                textColor.push("#b97d10");
            }
            if (data.author.includes('Hulk') || data.author.includes('Bruce Banner')) {
                textColor.push("#875094");
                backColor.push("#519559");
            }
            if (data.author.includes('J.A.R.V.I.S.')) {
                backColor.push("#25676a");
                textColor.push("#2b3866");
            }

            if (backColor.length != 0 && textColor.length != 0) {
                randIndex = ~~(backColor.length * Math.random());
                document.body.style.backgroundColor = backColor[randIndex];
                document.body.style.color = textColor[randIndex];
            }
            else{
                document.body.style.backgroundColor = "#2e4053"
                document.body.style.color = "#bdd4ea"
            }

        })
}