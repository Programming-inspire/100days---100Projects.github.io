const quotes = [
    {
        name: "A. P. J. Abdul Kalam",
        quote: "Creativity is seeing the same thing but thinking differently.",
        image:"abdul_kalam"
    },
    {
        name: "Swami Vivekananda",
        quote:"Words May Lie, But Actions will Always tell the truth.",
        image:"Swami_Vivekananda"
    },
    {
        name:"Mahatma Gandhi",
        quote: "Happiness is when what you think, what you say, and what you do are in harmony.",
        image:"Mahatma_Gandhi"
    },
    {
        name:"Jawaharlal Nehru",
        quote: "Time is not measured by the passing of years but by what one does, what one feels, and what one achieves.",
        image:"Jawaharlal_Nehru"
    },
    {
        name:"Subhas Chandra Bose",
        quote:"It is blood alone that can pay the price of freedom. Give me blood and i will give you freedom.",
        image:"Subhas_Chandra_Bose"
    },
    {
        name:"Nelson Mandela",
        quote:"Education is the most powerful weapon which you can use to change the world.",
        image:"Nelson_Mandela"
    }
];

const author = document.querySelector('#Author');
const quoteBtn = document.querySelector('#Btn');
const quote = document.querySelector('#Txt');
const quoteImage = document.querySelector('#quoteImage');

quoteBtn.addEventListener("click", displayQuote);

function displayQuote(){

let number = Math.floor(Math.random() * quotes.length);

author.innerHTML = "- " + quotes[number].name;
quote.innerHTML = quotes[number].quote;
quoteImage.setAttribute("class", quotes[number].image);



}