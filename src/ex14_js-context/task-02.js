function Hangman(word){
    var guessedString,
    errorsLeft,
    wrongSymbols;

    initWord(word);  

    function initWord(newWord) {
        guessedString = '_'.repeat(newWord.length);
        errorsLeft = 6;
        wrongSymbols = [];
    };

    this.guess = function(guessedChar) {
        if (!errorsLeft) {
            console.log('Game Over!');
            return this;
        }

        let isGuessed = false;
            guessedString = guessedString.split('');

        if (word.indexOf(guessedChar) > -1) {
            word.split('').forEach(function(char, i) {
                if (guessedChar === char) {
                    isGuessed = true;
                    guessedString[i] = word[i];
                }
            });
        }
        
        guessedString = guessedString.join('');

        if (isGuessed) {
            console.log(guessedString);
        } else {
            errorsLeft--;
            wrongSymbols.push(guessedChar);
            console.log(
                `Wrong letter, errors left ${errorsLeft} | ${wrongSymbols}`
            )
        }

        return this;
    }

    this.getGuessedString = function() {
        return guessedString;
    };

    this.getErrorsLeft = function() {
        return errorsLeft;
    };

    this.getWrongSymbols = function() {
        return wrongSymbols;
    };

    this.getStatus = function() {
        return `${guessedString} | errors left ${errorsLeft}`;
    }

    this.startAgain = function(newWord) {
        initWord(newWord);
    }
}

module.exports = new Hangman;
