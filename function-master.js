//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // code
    //empty array to hold object values
    let objValues = [];
    //for in loop to push object's key values to empty array objValues
    for (var key in object){
        objValues.push(object[key]);
    }
        //return array of values
        return objValues;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //empty array
    let words = [];
    //for in loop to push every key to array
    for (var key in object) {
        words.push(key);
    }
    //joins array with spaces into a sentence
    let sentence = words.join(' ');
    //returns joined sentence
    return sentence;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //empty array to hold string values
    let strings = [];
    //for in loop to check if obj key value is === to string and pushes key value to array
    for (var key in object) {
        if (typeof object[key] === 'string'){
            //pushes object key to array
            strings.push(object[key]);
        }
    }
    //joins array together with spaces
    let stringSentence = strings.join(' ');
    //return sentence
    return stringSentence;
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // checks if array is array
    if(Array.isArray(collection)){
        return 'array';
        //checks if not instanceof date, not null, not undefined, and is typeof 'object'
    } else if (!(collection instanceof Date) && collection !== null && collection !== undefined && typeof collection === 'object'){
        //returns 'object'
        return 'object';
    }

    
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //splice first letter of string
    //capitalize first letter
    //join letter and string back together
   return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //split string into array
    let stringArray = string.split(' ');

    //for loop to iterate over stringArray
    for (let i = 0; i < stringArray.length; i++){
        //capitalize word at every index calling function capitalizeWord
        stringArray[i] = capitalizeWord(stringArray[i]);

    }
    //return stringArray joined
    return stringArray.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //checks if object have name prop and returns Welcome <name>!
    if (object && object.hasOwnProperty('name')){
        return 'Welcome ' + capitalizeAllWords(object['name']) + '!';
    } 
    return 'Welcome!'
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //checks if obj has name and species property
    if (object && object.hasOwnProperty('name') && object.hasOwnProperty('species')){
        //returns Name + ' is a ' + Species
        return capitalizeWord(object['name']) + ' is a ' + capitalizeWord(object['species']);
    }
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //check if object has arraynoises and length is > 0
    if (object.hasOwnProperty('noises') && object['noises'].length > 0){
        let arrayToSentence = object['noises'].join(' ');
        return arrayToSentence;
    } else if(!object.hasOwnProperty('noises') || object['noises'].length === 0){
        return 'there are no noises';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //split string into array
    let stringArray = string.split(' ');
    //iterate thru array to search if index value is == to word
    for (let i = 0; i < stringArray.length; i++){
        if(stringArray[i] == word){
            return true;
        } 
        
    }
  return false;
}



//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object['friends'].push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //if object has key friends
    if(object.hasOwnProperty('friends')){
        //iterate thru array to search if index value is == to word
        for (let i = 0; i < object['friends'].length; i++){
        //if object's friend index is = to name returns true
        if(object['friends'][i] == name){
           return true;
       } 
       
   }
}
 return false;
}


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) { 
    //array to hold names not friends 
    let notAFriend = [];
    let friends = [];
    //for of loop to iterate thru every obj in the array
    for (let obj of array){
        //if condition check if object's name is = to name 
        if(obj.name === name){
            //if true assigns object's friends array to friends empty array
            friends = obj.friends;
            //breaks loop once name = objects name
            break;
        }
    }
    //for of loop objects in array
    for (let obj of array){
        //checks if name !== to objects name while friends array doesnt include object'name
        if (obj.name !== name && !friends.includes(obj.name)){
            //pushes object name to notAFriend array 
            notAFriend.push(obj.name);
        }
    }
    //returns whole notAFriendArray once done
    return notAFriend;
}
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    let tempObject = object;
    //iterates thru array
    for (let i = 0; i < array.length; i++){
      //create key from array[i]
      let keyName = array[i];
      //if condition to check if object has a key listed from array at index
      if(tempObject.hasOwnProperty(keyName)){
        //delete object key 
        delete tempObject[keyName];

      }  
      return tempObject;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}