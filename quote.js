  var randomQuote;
  var author;

$(document).ready(function(){
  getQuote();
});

function getQuote(){
    var url= "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data){
      randomQuote = data.quoteText;
      author = data.quoteAuthor;
    $("#quote").html('"'+randomQuote+'"'); 
    $("#author").html("-"+author);
  }); 
};

$("#tweet").on("click", function(){
      window.open("https://twitter.com/intent/tweet?text=" + randomQuote);
  });

$("#newQuote").on("click", function(){
    getQuote();
  });
