document.addEventListener('DOMContentLoaded', function () {
    const scrambledWordElement = document.getElementById("scrambled-word");
    const guessInput = document.getElementById("guess-input");
    const feedbackElement = document.getElementById("feedback");
    const scoreElement = document.getElementById("score");
    const attemptsElement = document.getElementById("attempts");
    const hintButton = document.getElementById("hint-button");
    const newWordButton = document.getElementById("new-word-button");
    const revealWordButton = document.getElementById("reveal-word-button");
    const guessButton = document.getElementById("guess-button"); // New button

    let currentWord = "";
    let scrambledWord = "";
    let score = 0;
    let attempts = 0;
    let hintIndices = [];

    // Fetch a random word from the 'all' endpoint of the API
    async function fetchRandomWord() {
        try {
            const response = await fetch('https://random-word-api.herokuapp.com/all');
            const data = await response.json();

            // Select a random word from the array
            const randomWord = data[Math.floor(Math.random() * data.length)];
            return randomWord;
        } catch (error) {
            console.error("Error fetching the word:", error);
            feedbackElement.textContent = "There was an error fetching the word. Please try again!";
            return "error";
        }
    }

    // Shuffle the letters of a word
    function shuffleWord(word) {
        const shuffled = word.split("").sort(() => Math.random() - 0.5).join("");
        return shuffled === word ? shuffleWord(word) : shuffled;
    }

    // Generate a new word
    async function generateNewWord() {
        feedbackElement.textContent = "";
        guessInput.value = "";
        hintIndices = [];

        currentWord = await fetchRandomWord();

        if (!currentWord || currentWord === "error") {
            currentWord = "error";
        }

        scrambledWord = shuffleWord(currentWord);
        scrambledWordElement.textContent = scrambledWord;

        hintButton.disabled = false;
        revealWordButton.style.display = "none";
    }

    // Check the user's guess
    function checkGuess() {
        const guess = guessInput.value.trim().toLowerCase();
        attempts++;
        attemptsElement.textContent = attempts;

        if (guess === currentWord) {
            score++;
            scoreElement.textContent = score;
            feedbackElement.textContent = "🎉 Correct! Well done!";
            feedbackElement.style.color = "#2dde57";
            revealWordButton.style.display = "none";
        } else {
            feedbackElement.textContent = "❌ Incorrect! Try again!";
            feedbackElement.style.color = "#c12a1a";
            revealWordButton.style.display = "inline-block";
        }
    }

    // Reveal a hint (a correct letter in the correct place)
    function revealHint() {
        if (hintIndices.length >= currentWord.length - 1) {
            feedbackElement.textContent = "Hint: No more letters to reveal!";
            feedbackElement.style.color = "#ffc107";
            hintButton.disabled = true;
            revealWordButton.style.display = "inline-block";
            return;
        }

        let index;
        do {
            index = Math.floor(Math.random() * currentWord.length);
        } while (hintIndices.includes(index));

        hintIndices.push(index);

        const revealedWord = scrambledWord.split("").map((char, i) => {
            if (hintIndices.includes(i)) {
                return `<span class="hint-letter">${currentWord[i]}</span>`;
            }
            return char;
        }).join("");

        scrambledWordElement.innerHTML = revealedWord;
    }

    // Reveal the word when clicked
    revealWordButton.addEventListener("click", () => {
        feedbackElement.textContent = `The word was: ${currentWord}`;
        feedbackElement.style.color = "#f39c12";
        scrambledWordElement.textContent = currentWord;
        revealWordButton.style.display = "none";
    });

    // Event Listeners
    newWordButton.addEventListener("click", generateNewWord);
    hintButton.addEventListener("click", revealHint);
    guessButton.addEventListener("click", checkGuess); // Attach the checkGuess function to the Guess button

    guessInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkGuess();
        }
    });

    // Initialize Game
    generateNewWord();
});
