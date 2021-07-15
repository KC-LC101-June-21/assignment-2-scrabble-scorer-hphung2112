// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function initialPrompt() {
word = input.question("Let's play some scrabble!" + "\n" + "\n" + "Enter a word to score: ");
return word;
}

function oldScrabbleScorer() {
  word = word.toUpperCase();
	let letterPoints = "";
  let totalOldScrabbleScorerPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
      totalOldScrabbleScorerPoints += Number(pointValue);
		 }
	  }
	}
  return totalOldScrabbleScorerPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function simpleScoreSystem() {
  word = word.toUpperCase();
  let simpleScorePoints = 0;

  for (let i = 0; i < word.length; i++) {
    simpleScorePoints += 1;
  }
  return simpleScorePoints;
}

function vowelBonusScoreSystem() {
  word = word.toUpperCase();
  let vowelBonusScorePoints = 0;

  for (let i = 0; i < word.length; i++) {

    if (word.includes('A', 'E', 'I', 'O', 'U')) {
      vowelBonusScorePoints += 3;
    } else {
      vowelBonusScorePoints += 1;
    }
  }
  return vowelBonusScorePoints;
}

// function iWantNothing (){
//   return 0};
// let myFunction = function(){
//   return 0;
// }


// let object = {
//   'ID': myFunction,
// };

// console.log(object.ID);

// https://www.w3schools.com/js/js_objects.asp
// key: value<---function
let simpleScore = {
  'name':'Simple Score',
  'description':'Each letter is worth 1 point',
  'scoreFunction':simpleScoreSystem,
};

let vowelBonusScore = {
  'name':'Bonus Vowels',
  'description':'Vowels are 3 pts, consonants are 1 pt.',
  'scoreFunction':vowelBonusScoreSystem,
};

let scrabbleScore = {
  'name':'Scrabble',
  'description':'The traditional scoring algorithm',
  'scoreFunction':oldScrabbleScorer,
};

const scoringAlgorithms = [simpleScore, vowelBonusScore, scrabbleScore];

function scorerPromptOne() {
  console.log(`Which scording algorithm would you like to use? \n \n`);
  for (let i = 0; i < scoringAlgorithms.length; i++) {
    console.log(`${[i]} - ${scoringAlgorithms[i].name} : ${scoringAlgorithms[i].description}\n`);
  }
}

function scorerPrompt() {
  let userScoringOptionsInput = "";
  while (userScoringOptionsInput < scoringAlgorithms.length && userScoringOptionsInput >=0 && !NaN.userScoringOptionsInput){
  userScoringOptionsInput = Number(input.question(`Enter 0, 1, 2: `));
  console.log(`Score for '${word}': ${scoringAlgorithms[userScoringOptionsInput].scoreFunction()}`);
  break;
}
return userScoringOptionsInput;
}

function transform(oldPointStructure) {

let newPointStructure = {};

  for(const pointValue in oldPointStructure) {
    let letters = oldPointStructure[pointValue]
    newPointStructure[pointValue] = letters;

    // for (i = 0; i < oldPointStructure['1'].length; i++) {
    //   oldPointStructure[oldPointStructure['1'][i]] = 1;
    // }
    // for (i = 0; i < oldPointStructure['2'].length; i++) {
    //   oldPointStructure[oldPointStructure['2'][i]] = 2;
    // }
    // for (i = 0; i < oldPointStructure['3'].length; i++) {
    //   oldPointStructure[oldPointStructure['3'][i]] = 3;
    // }
    // for (i = 0; i < oldPointStructure['4'].length; i++) {
    //   oldPointStructure[oldPointStructure['4'][i]] = 4;
    // }
    // for (i = 0; i < oldPointStructure['5'].length; i++) {
    //   oldPointStructure[oldPointStructure['5'][i]] = 5;
    // }
    // for (i = 0; i < oldPointStructure['8'].length; i++) {
    //   oldPointStructure[oldPointStructure['8'][i]] = 8;
    // }
    // for (i = 0; i < oldPointStructure['10'].length; i++) {
    //   oldPointStructure[oldPointStructure['10'][i]] = 10;
    // }
  }
  return newPointStructure;
}

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();
   scorerPromptOne();
   scorerPrompt();
}

console.log(runProgram());

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

