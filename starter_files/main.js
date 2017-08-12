// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  let total = 0;
  for (let i=0; i < data.length; i++) {
  total += data[i].price;
  }
  let average = total/data.length;
  console.log(average);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let between = [];
  for (let i=0; i < data.length; i++){
    if (14 <= data[i].price && 18 >= data[i].price){
      between.push(data[i].title);
    }
  }
  console.log(between);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  var GBPcode = [];
  for (let i=0; i < data.length; i++){
    if (data[i].currency_code === "GBP"){
      GBPcode.push(data[i].title);
    }
  }
  console.log(GBPcode);
}



// 4: Display a list of all items who are made of wood.
function question4 () {
  var wooden = [];
  for (let i=0; i < data.length; i++){
    for (let j=0; j < data[i].materials.length; j++){
    if (data[i].materials[j] === 'wood'){
      wooden.push(data[i].title);
    }
    }
  }
  console.log(wooden);
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  var eightOrMore = [];
  var listOfItems = [];
  for (let i=0; i < data.length; i++){
    for (let j=0; j < data[i].materials.length; j++){
      if (data[i].materials[7] && data[i].materials[j].length) {
        eightOrMore.push(data[i].title);  listOfItems.push(data[i].materials[j]);
      }
    }
  }
  console.log(eightOrMore);
  console.log(listOfItems);
}


//6: How many items were made by their sellers?//

function question6 () {
var madeBySeller = [];
for (let i=0; i < data.length; i++){
  for (let j=0; j < data[i].who_made[j].length; j++)
  if (data[i].who_made[j] === "i_did") {
    madeBySeller.push(data[i].who_made);
  }
}
console.log(madeBySeller.length);
}
