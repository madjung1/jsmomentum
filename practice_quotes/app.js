const quoteP = document.querySelector("#quote")
const authorP = document.querySelector("#author")
const quotes = [
    {
        quote: "hellow",
        author: "diseny"
    },
    {
        quote: "nice",
        author: "2222"

    },
    {
        quote: "byebye",
        author: "33333"

    },
];
function quotesText() {
    maxNum=quotes.length;
    ranNum=Math.floor(Math.random()*maxNum);
    console.log(ranNum);
    quoteP.innerText = quotes[ranNum].quote;
    authorP.innerText = quotes[ranNum].author;

};
quotesText();
