/* let extractList = ["phone", "laptop", "monitors", "headphones"];

for (let i = 0; i < extractList.length; i++) {
    const element = extractList[i];
    console.log(element)
    if (extractList[i] === "laptop") {
        break;
        console.log(extractList)
    }
}
*/

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[2];
})

console.log(secretMessage.join(''));

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);