interface Quote{
    id : number;
    quote : string;
    author : string;

}

interface QuoteList{
    quotes : Quote[];
}

const allQuoteBtn = document.getElementById('osszesIdezetGomb')
allQuoteBtn?.addEventListener('click' , function ListAllQuote(){
    
})

async function beolvas(){
    let response = await fetch("../quotes.json");
    let vals : QuoteList = await response.json();
    console.log(vals.quotes)

    const allQuoteBtn = document.getElementById('osszesIdezetGomb')
    allQuoteBtn?.addEventListener('click' , function ListAllQuote(){
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
})
    const theListBtn = document.getElementById('theBtn')
    theListBtn?.addEventListener('click' , function listThelist(){
        let list = document.getElementById('theList');
        for(let i = 0; vals.quotes.length; i++){
            var li = document.createElement('li');
           // let textforlist = vals.quotes[i].author + " " + vals.quotes[i].quote + " " vals.quotes[i].id;
           // li.innerText = vals.quotes[i];
            list?.appendChild(li);
        }

    })

    const hosszListBtn = document.getElementById('hosszBtn')
    hosszListBtn?.addEventListener('click' , function listLength(){
       

        let lengthList: number[] = [];
        

        for(let i = 0; i <  vals.quotes.length; i++){
            //console.log(vals.quotes[i])
            let lengthofcurrent = vals.quotes[i].quote.length;
            lengthList.push(lengthofcurrent);
        }
        
        console.log(lengthList.join());
    })

const beirtNevBtn = document.getElementById('quoteNumBtn')

beirtNevBtn?.addEventListener('click' , function quoteNumOf(){

const beirnevNev = document.getElementById('beirtnev') as HTMLInputElement;
let quoteNumAll = 0;
    for(let i = 0; i <  vals.quotes.length; i++){

        if(vals.quotes[i].author == beirnevNev.value){
            console.log();
            quoteNumAll++;
            console.log(quoteNumAll);
        }

    }

})


}




document.addEventListener('DOMContentLoaded',()=> {
    beolvas()
})
