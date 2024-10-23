console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

function addToCollection(collection, newRecord) {
  collection.push(newRecord);
  return newRecord;
}

const myCollection = [];
const newRecord1 = ["Punch", "Autoheart", "2013"];
const addedItem1 = addToCollection(myCollection, newRecord1);
console.log("Updated array:", myCollection); 
console.log("New item:", addedItem1); 

const newRecord2 = ["Waistlane, Baby!", "Hozier", "2019"];
const addedItem2 = addToCollection(myCollection, newRecord2);
console.log("Updated array:", myCollection); 
console.log("New item:", addedItem2); 

const newRecord3 = ["Ruin", "The Amazing Devil", "2021"];
const addedItem3 = addToCollection(myCollection, newRecord3);
console.log("Updated array:", myCollection); 
console.log("New item:", addedItem3); 

const newRecord4 = ["The Rise and Fall of a Midwest Princess", "Chappell Roan", "2023"];
const addedItem4 = addToCollection(myCollection, newRecord4);
console.log("Updated array:", myCollection); 
console.log("New item:", addedItem4); 

const newRecord5 = ["The Maybe Man", "AJR", "2023"];
const addedItem5 = addToCollection(myCollection, newRecord5);
console.log("Updated array:", myCollection); 
console.log("New item:", addedItem5);

const newRecord6 = ["The Fifth", "Birds of Bellwoods", "2015"];
const addedItem6 = addToCollection(myCollection, newRecord6);
console.log("Updated array:", myCollection); 
console.log("New item:", addedItem6); 

function showCollection(collection){

}

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
