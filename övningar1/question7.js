// 3. Skriv klart funktionen removeVowels som tar
// bort vokaler, alltså bokstäverna: aouåeiyäö.

function removeVowels(str) 
{ 
    let vowels = [ 'a', 'e', 'i', 'o', 'u',  
               'A', 'E', 'I', 'O', 'U' ]; 
    let result = ""; 
      
    for(let i = 0; i < str.length; i++)  
    { 
          
        if (!vowels.includes(str[i])) 
        { 
            result += str[i]; 
        } 
    } 
    return result; 
} 
  

console.log(removeVowels("hej")); // Ska logga "hj"
console.log(removeVowels("hallå")); // Ska logga hll
