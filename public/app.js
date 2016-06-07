window.onload = function(){
  main();
}

var myQuotes = [{text: "Visual Basic is the way forward, I don't know why we are doing JavaScript.", author: "Jay Chetty"},{text: "The only CSS you need to know is background-color: tomato", author: "Rick"},{text: "I used the jQuery diet plugin and lost 10kg in a week.", author: "Keith"},{text: "Scaffolding is nothing but a fiery hell.", author: "Valerie"}];

var main = function(){
    displayQuotes()
    var button = document.getElementById('delete-button');
    var form = document.getElementById('quote-form')
  button.onclick = deleteQuote;
  form.onsubmit = handleSubmit;
  }

  var handleSubmit = function(event){
    event.preventDefault();
    handleClick()
  }

  var handleClick = function(){
    var quoteInfo = document.getElementById('quote-text-input');
    var authorInfo = document.getElementById('author-text-input');
    var quote = quoteInfo.value;
    var author = authorInfo.value;
    appendFilm(quote, author)
  }

  var appendFilm = function(quote, author){
    var quoteArticle = document.createElement('article');
    quoteArticle.classList.add('quote');

    var blockQuote = document.createElement('blockquote');
    blockQuote.innerText = quote;

    var cite = document.createElement('cite');
    cite.innerText = author;
    blockQuote.appendChild(cite);

    quoteArticle.appendChild(blockQuote);

    var quotes = document.getElementById('quotes')
    quotes.appendChild(quoteArticle)

    var inputBox = document.getElementById('author-text-input');

    inputBox.onkeyup = function(){
        blockQuote.innerHTML = inputBox.value;
    }
  }


      var displayQuotes = function() {
      for ( var quote of myQuotes ) {
      var quoteArticle = document.createElement('article');
      quoteArticle.classList.add('quote');

      var blockQuote = document.createElement('blockquote');
      blockQuote.innerText = quote.text;

      var cite = document.createElement('cite');
      cite.innerText = quote.author;
      blockQuote.appendChild(cite);

      quoteArticle.appendChild(blockQuote);

      var quotes = document.getElementById('quotes')
      quotes.appendChild(quoteArticle)
      }
        }
      var deleteQuote = function() {
        var quotes = document.getElementById('quotes');
        var lastChild = quotes.lastChild;
        lastChild.parentNode.removeChild(lastChild);
      }



   
  









  