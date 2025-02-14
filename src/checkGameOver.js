function checkGameOver(gameState) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (gameState.isGameOver) {
                console.log("Game over!");
                resolve("Game over!");
            } else {
                console.log("Continue playing.");
                resolve("Continue playing.");
            }
        }, 1000); // Simulating async delay
    });
}

// Example usage
const gameState = { isGameOver: false }; // Change to true to test the game-over condition

checkGameOver(gameState).then((message) => {
    console.log("Result:", message);
});
