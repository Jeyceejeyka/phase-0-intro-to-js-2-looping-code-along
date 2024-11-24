// Code your solutions in this file
const names = ["Elvis", "Kevin", "Jey","Boba"];
function writeCards(names) {
    const messages = []; // array to hold the new array content
  
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
  
    return messages; // new  array of messages
  }
  console.log(writeCards(names))

function countDown(number) {
    let i = number
    while(i >= 0) {
        console.log(i)
        i--;
    }
}
console.log(countDown(10));


