interface Quote{
    id : number;
    quote : string;
    author : string;

}

interface QuoteList{
    quotes : Quote[];
}

async function beolvas(){
    let response = await fetch("../quotes.json");
    let vals : QuoteList = await response.json();
    console.log(vals.quotes)
    
    vals.quotes.sort(function (a, b) {
        if (a.author < b.author) {
          return -1;
        }
        if (a.author > b.author) {
          return 1;
        }
        return 0;
      });
      console.log(vals.quotes)

}
document.addEventListener('DOMContentLoaded',()=> {
    beolvas()
})