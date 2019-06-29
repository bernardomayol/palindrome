// Reverses a string.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
	let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

/* prototype in other language is a class*/
function Phrase(content){
	/* properties */
	this.content = content;

	/* methods */
	this.processor = function(string){
		return string.toLowerCase();
	}

	this.processedContent  = function processedContent(){
		return this.processor(this.content);
	}
	this.palindrome = function palindrome() {
  		return this.processedContent() === this.processedContent().reverse();
	}
}

/* prototype in other language is a class

function TranslatedPhrase(content, translation){
	/* properties 
	this.content = content;
	this.translation = translation;
	/* methods 
	this.processedContent = function processedContent(){
		return this.processor(this.translation);
	} 
}

TranslatedPhrase.prototype = new Phrase();*/