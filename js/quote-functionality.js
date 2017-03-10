/*global $*/
$(document).ready(function() {
  var quoteText = "";
  makeQuote();
  
  $(".new-quote-button").on("click", function() {
    makeQuote();
  });
  
  $(".tweet-quote-button").on("click", function() {
    var tweetUrl = "https://twitter.com/intent/tweet?text=" + quoteText;
    window.open(tweetUrl, "twitter");
    return false;
  });
  
  function makeQuote() {
    var quoteOutput = $.ajax({
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous",
      type: "GET",
      data: {},
      dataType: "json",
      success: function(data) {
        quoteText = data.quote;
        document.getElementById("quote").innerHTML = quoteText;
      },
      error: function(err) {
        var quotes = {
          1: ["If a man does his best, what else is there?"],
          2: ["Give me chastity and continence, but not yet."],
          3: ["You can avoid reality, but you cannot avoid the consequences of avoiding reality."],
          4: ["I have always depended on the kindness of strangers."]
        };
        var randomQuoteNumber = Math.ceil(Math.random() * Object.keys(quotes).length);

        $("quote").text(quotes[randomQuoteNumber][0]);
      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "Sr4ugfUfUHmshOQ2IbeGXw8i1Gujp15JgPZjsnIcl0TaxHmdX3");
      }
    });
  }
});
  