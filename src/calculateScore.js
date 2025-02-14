export function calculateScore() {
    return new Promise((resolve) => {
      console.log("Calculating score...");
      setTimeout(() => {
        const score = Math.floor(Math.random() * 100);
        console.log(`Score calculated: ${score}`);
        resolve(score);
      }, 800);
    });
  }
  