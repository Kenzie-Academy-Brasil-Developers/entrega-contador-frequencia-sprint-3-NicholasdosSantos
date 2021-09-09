const button = document.getElementById("countButton");

const handlerClick = () => {
   let typedText = document.getElementById("textInput").value;
   typedText = typedText.toLowerCase(); 
   typedText = typedText.normalize('NFD').replace(/([\u0300-\u036f]|[^a-z\s])/g, '');
   let typedTextWords = document.getElementById("textInput").value;
   typedTextWords = typedTextWords.toLowerCase();
   typedTextWords = typedTextWords.normalize('NFD').replace(/([\u0300-\u036f]|[^a-z\s])/g, '');
   typedTextWords = typedTextWords.split(/\s/);
   
   const letterCounts = {};

   for (let i = 0; i < typedText.length; i++) {
      currentLetter = typedText[i];
      if (letterCounts[currentLetter] === undefined){
         letterCounts[currentLetter] = 1; 
        }else { 
         letterCounts[currentLetter]++;
        }
    }

   for (let letter in letterCounts) { 
      const span = document.createElement("span"); 
      const textContent = `"${letter}": ${letterCounts[letter]} | `;
      span.innerText = textContent; 
      const letters = document.getElementById("lettersDiv");
      letters.appendChild(span);
    }
  
   const wordCounts = {};

   for (let i = 0; i < typedTextWords.length; i++) {
      let words = typedText.split(/\s/);
      currentWord = words[i];
      if (wordCounts[currentWord] === undefined) {
         wordCounts[currentWord] = 1; 
        }else { 
         wordCounts[currentWord]++;
        }
    }

   for (let word in wordCounts) { 
      const span = document.createElement("span"); 
      const textContent = `"${word}": ${wordCounts[word]} | `;
      span.innerText = textContent; 
      const words = document.getElementById("wordsDiv");
      words.appendChild(span); 
    }
}
button.addEventListener("click", handlerClick);