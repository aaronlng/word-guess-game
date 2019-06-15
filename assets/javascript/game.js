//creating wordGuessGame object that will house all of the logic and variables
var wordGuessGame = {

    //object of words that can be chosen along with picture and song clip
    wordsToPick: {
        sum41: {
            picture: "sum41.jpg",
            song: "Fat Lip", 
        },
        blink182: {
            picture: "blink182.jpg",
            song: "All the Small Things", 
        },
        alltimelow: {
            picture: "alltimelow.jpg",
            song: "Dear Maria, Count Me In",
        },
        newfoundglory: {
            picture: "newfoundglory.jpg",
            song: "My Friends Over You",
        },
        paramore: {
            picture: "paramore.jpg",
            song:"Misery Business",
        },
        goodcharlotte: {
            picture: "goodcharlotte.jpg",
            song: "The Anthem",
        },
        yellowcard: {
            picture: "yellowcard.jpeg",
            song: "Ocean Avenue",
        },
        falloutboy: {
            picture: "falloutboy.jpg",
            song:"Sugar, We're Going Down",
        },
        bowlingforsoup: {
            picture:"bowlingforsoup.jpg",
            song: "1985",
        },
        jimmyeatworld: {
            picture:"jimmyeatworld.jpeg",
            song: "The Middle",
        }
    },

    //Variables that set the initial state of the game
    wordInPlay: null,
    lettersOfTheWord: [],
    matchedLetters: [],
    guessedLetters: [],
    guessesLeft: 0,
    totalGuesses: 0,
    letterGuessed: null,
    wins: 0,
}