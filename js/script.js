var lastNumber;
/*
GENERAL UNDESIRED ISSUES:
when the scaleAbleRandomNumber is called. it might return the same number. meaning the same quote will appear twice[NOT SOLVED DUE TO...umm... reasons.]
NOTES:  changed <body> to <body id="body"> so i can till use getElementById :P
*/

//array of Quotes
var quotes = [
	{
		quote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage",
		source: "Lao Tzu", 
	        awesomeScale:"Awesome Scale:5/10"
	},

              
	{
		quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
		source: "Winston S. Churchill", 
		awesomeScale:"Awesome Scale:8/10" 
	},

              
	{
		quote: "Deal with the faults of others as gently as your own.",
		source: "Chinese Proverb", 
		awesomeScale:"Awesome Scale:9/10" 
	},

              
	{
		quote: "blank never loses.",
		source: "Sora and Shiro(aka:blank)",
		citation: "No Game No Life", 
		year: 2014, 
		awesomeScale:"Awesome Scale:11/10"
	},

              
	{
		quote: "We all make choices in life, but in the end our choices make us.",
		source: "Andrew Ryan",
		citation: "Bioshock", 
		awesomeScale:"Awesome Scale:6/10"
	},

        {
		quote: "Nothing is true, everything is permitted" ,
		source: "Ezio Auditore",
		citation: "Assassin’s Creed 2", 
		awesomeScale:"Awesome Scale:9/10"
	},

              
	{
		quote: "Stay awhile, and listen",
		source: "Deckard Cain",
		citation: "Diablo II", 
		awesomeScale:"Awesome Scale:7/10" 
	},

              
	{
		quote: "The ending isn’t any more important than any of the moments leading to it",
		source: "Dr Rosalene",
		citation: "To The Moon", 
		awesomeScale:"Awesome Scale:10/10"
	}
];




              //return a random number form 0 to scaleMax value also checks to see if the last number used by the printQuote ist he same. if is. then reroll :D 
function scaleAbleRandomNumber (scaleMax){
   var randomNumber = Math.floor((Math.random() + 1)  * (scaleMax - 0) - (1 * scaleMax))
	if (lastNumber === randomNumber){
		randomNumber(scaleMax);
	};
   return randomNumber
};

/*[SOLVED]
PROBLEMS:will never give the max number of the arrey. could be solved by usingh
(random_number + 0.1) * maxNumber - (0.1 * maxNumber)
*/








              //select a random qoute object from the array named"quoates"(how original...)
function getRandomQuote (){
	var lastRandom = scaleAbleRandomNumber(quotes.length);
   var quoteObject = quotes[lastRandom];
   return quoteObject;
};






//random color for every refresh.
function changeColorBackround(){
    var body = document.getElementById("body");
    var cssAccess = body.style.backgroundColor = 'rgb(' + scaleAbleRandomNumber(255) + "," + scaleAbleRandomNumber(255) + "," + scaleAbleRandomNumber(255)+ ")";
    return cssAccess;
};

/*PROBLEMS
  for some reason. a warning appers that says body is null.[UNSOLVED cause it works and im lazy :P]
*/




              //should mak the raw HTML into a variable. IMPORTENT: pay attention to propertys that MIGHT or MIGHT NOT be relevent
function printQuote(){
   clearInterval(intervalID); 
    var chosenQuote = getRandomQuote();

    var quoteBox = document.getElementById('quote-box')

    var rawHTMLquote =  '<p class="quote"> ' +  chosenQuote.quote +  ' </p>';

    var rawHTMLsource = '<p class="source"> ' + chosenQuote.source;

    var rawHTML = rawHTMLquote + rawHTMLsource;

    if (chosenQuote.hasOwnProperty("citation"))
    {
	var rawHTMLcitation = '  <span class="citation">' + chosenQuote.citation +  '</span>';
      rawHTML = rawHTML + rawHTMLcitation;
    };

    if(chosenQuote.hasOwnProperty("year"))
    {
	var rawHTMLyear = '<span class="year"> '+ chosenQuote.year +' </span>';
       rawHTML = rawHTML +  rawHTMLyear;
    };

    if (chosenQuote.hasOwnProperty("awesomeScale"))
    {
	var rawHTMLawesomeScale = '  <span class="citation">' + chosenQuote.awesomeScale +  '</span>';
       rawHTML = rawHTML + rawHTMLawesomeScale;
    };


     changeColorBackround();
     return quoteBox.innerHTML = rawHTML  + "</p>";
};
/*INCOUNTERED PROBLENMS:
  when declaring rawHTML at the top of the function. the program tought i was tryng to add two numebrs together.[SOLVED]
  when doing a rawHTML+=[string variable]; the program tought i was trying to add numbers.[SOLVED]
*/




// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//interval timelyChange the quote
var intervalID = setInterval(function(){printQuote();}, 5000);

