// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called


//array of Quotes                                                                                     when was it published
var quotes = [{quote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage"
              ,source: "Lao Tzu",citation: "", year: 0},

              {quote: "Success is not final; failure is not fatal: It is the courage to continue that counts."
              ,source: "Winston S. Churchill",citation: "where was it published", year: 0},

              {quote: "Deal with the faults of others as gently as your own."
              ,source: "Chinese Proverb",citation: "where was it published", year: 0},

              {quote: "blank never loses."
              ,source: "Sora and Shiro(aka:blank)",citation: "No Game No Life", year: 2014},

              {quote: "We all make choices in life, but in the end our choices make us."
              ,source: "Andrew Ryan",citation: "Bioshock", year: 0},

              {quote: "Nothing is true, everything is permitted"
              ,source: "Ezio Auditore",citation: "Assassin’s Creed 2", year: 0},

              {quote: "Stay awhile, and listen"
              ,source: "Deckard Cain",citation: "Diablo II", year: 0},

              {quote: "The ending isn’t any more important than any of the moments leading to it"
              ,source: "Dr Rosalene",citation: "To The Moon", year: 0}]; 










document.getElementById('loadQuote').addEventListener("click", printQuote, false);
