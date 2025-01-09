# Word Unscramble Game

## Description
This is a simple **Word Unscramble Game** built using **HTML**, **CSS**, and **JavaScript**. The game presents a scrambled word, and users need to guess the original word. The app features a modern design with animated elements, and provides hints and the option to reveal the word when stuck. The game also tracks the score and number of attempts. The app is responsive, making it suitable for both mobile and desktop devices.

---

## Snapshot
![Unscramble Game Screenshot](assets/gameexample.gif)

---

## Features

- **Scrambled Word**: A random word is displayed in a scrambled format, and users have to guess the original word.
- **Hints**: Users can reveal a correct letter at a random position for help.
- **Reveal Word**: If users get stuck, they can reveal the word at any time.
- **Score Tracking**: The game keeps track of the score, increasing with each correct guess.
- **Attempt Tracking**: The number of attempts is counted and displayed to the player.
- **Responsive Design**: The app is fully responsive and adapts to different screen sizes and devices.
- **Animated Effects**: The game includes smooth animations for background, text, and button interactions to enhance the user experience.

---

## Technologies Used

- **HTML**: For structuring the layout and content of the game.
- **CSS**: For styling the game, including responsive design, animations, and custom button styles.
- **JavaScript**: For the game logic, such as generating random words, checking guesses, revealing hints, and handling user input.
- **Fetch API**: For fetching random words from an external API to keep the game fresh with new words.
- **Flexbox**: Used to ensure responsive layouts, positioning buttons, and organizing elements within the game.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DianaSill/unscramble-game.git

2. **Navigate to the Project Folder**:
After cloning, navigate to the project directory:
    ```bash
    cd unscramble-game

3. **Open index.html file in your browser**:
No additional setup is required. Simply open the index.html file in your preferred web browser to run the app.

---

## How It Works

1. **Starting the Game**:
   - Upon loading the game, a scrambled word will be displayed. The game is to guess the correct word.

2. **Making a Guess**:
   - Type your guess in the input field and hit "Enter" or click the "Guess" button to check your answer.
   - If the guess is correct, your score will increase, and the game will display a success message. If incorrect, you can try again, and the number of attempts will increase.

3. **Using Hints**:
   - Click the "Hint" button to reveal one correct letter at a random position in the word.
   - Each time you use a hint, the word will be updated to show the letter(s) that you have revealed.

4. **Revealing the Word**:
   - If you're stuck, click the "Reveal Word" button to see the original word.

---

## Future Improvements

- **Difficulty Levels**: 
  - Add different difficulty levels where the length of the word or the complexity of the word increases with each level.

- **Leaderboard**: 
  - Implement a leaderboard to store the highest scores across different players. This could involve saving scores locally or using a back-end database.

- **Timed Mode**: 
  - Introduce a timed mode where users have to guess as many words as possible within a certain time limit.

- **Word Categories**: 
  - Add word categories (e.g., animals, fruits, countries) and allow players to select which category they'd like to play with.

- **Mobile App**: 
  - Convert the game into a mobile app using frameworks like React Native or Flutter, or use Progressive Web App (PWA) techniques to allow offline play.

---

## Credits

- **API Used**: The random words are fetched using the [Random Word API](https://random-word-api.herokuapp.com/all).
