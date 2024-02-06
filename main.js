const bekezdes = document.getElementById("bekezdes")
const names = [
    "Estrella",
    "Brigitta",
    "Ferrel",
    "Alisun",
    "Gertie",
    "Shurlock",
    "Anselm",
    "Kellina",
    "Peirce",
    "Caty",
    "Tess",
    "Philippine",
    "Tanney",
    "Steven",
    "Aida",
]
//1. feladat:
const maganhangzos_nevek = names.filter(name => {
    return ["a", "e", "i", "o", "ö", "u", "ü", "á", "é", "í", "ó", "ő", "ú", "ű"].includes(name[0].toLowerCase())
}) 
maganhangzos_nevek.sort((a, b) => a.localeCompare(b))
bekezdes.textContent += maganhangzos_nevek.join("; ")
console.log(maganhangzos_nevek)

//2. feladat:
const quote_kiiras = document.getElementById("quotes")
const quotes = [
    {
        author: "Albert Einstein",
        quote: "A person who never made a mistake never tried anything new.",
    },
    {
        author: "Douglas Adams",
        quote: "In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.",
    },
    {
        author: "Terry Pratchett",
        quote: "Imagination, not intelligence, made us human.",
    },
    {
        author: "Terry Pratchett",
        quote: "It is said that your life flashes before your eyes before you die. That is true, it's called Life.",
    },
]

const stringQuotes = quotes.map(x => '"' + x.quote + '"' + " – " + x.author)
stringQuotes.forEach(quote => {
    const blockquote = document.createElement("blockquote")
    blockquote.textContent = quote
    quote_kiiras.appendChild(blockquote)
})

//3. Feladat:
const szoveg = document.getElementById("dobokockaszoveg")
const gomb = document.getElementById("gomb")
const dicethrows = [];
gomb.addEventListener("click", () => {
    const randomNum01 = Math.floor(Math.random() * 6 + 1);
    const randomNum02 = Math.floor(Math.random() * 6 + 1);
    dicethrows.push(randomNum01+randomNum02)
    dicethrows.sort((a, b) => b - a)
    szoveg.textContent =  dicethrows.join(", ")  
})

