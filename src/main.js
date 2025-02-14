import {initGame} from "./initGame.js"
import {movePlayer} from "./movePlayer.js"
import {calculateScore} from "./calculateScore.js"
import {checkOverGame} from "./checkOverGame.js"


async function playGame() {
    await initGame();
    await movePlayer("right");
    await movePlayer("left");
    await movePlayer("right");
    let score = await calculateScore();
    await checkOverGame(score);
}

playGame();
