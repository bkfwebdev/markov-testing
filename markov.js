 /** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    /* We could build a table of each word in this phrase, along with the word that comes after that phrase: */
    let max = words.length;
    let theChains = {}
    /* 
    for each word at index i,
    is the word at index i the target word?
    if so is the word after the word at index i in the chain array?
    if yes do nothing if no add at it to array
    if we have reached the last word and the end of the list add null
    add array to chains object
    theChains[targetWord] = chainArray
    repeat this process for every word
    */
   for(let target = 0; target < max ; target++){
     let chainArray = [];
     for(let index = 0 ; index < max ; index++){
       if(words[index] == words[target]){
         if(index == max-1){chainArray.push(null)} 
         else if(chainArray.includes(words[index+1]) == false){chainArray.push(words[index+1])}
       }
     }
     theChains[words[target]] = chainArray;
   }
   return theChains
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    /*

    1. pick a random starting word
    2. pick one of those next-words randomly
    3. if we pick null we've reached the end of the chain so stop
    4. other wise restart at step 1

    */
    let firstWord = "";
    let nextWord = ""; 
    firstWord = words[Math.floor(Math.random() * 10)];
    nextWord
  



  }
}
