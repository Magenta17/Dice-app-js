
function rollDice() {
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const numOfDice = document.getElementById("numOfDice").value;
    const values = [];
    const images = [];
    
    if (numOfDice % 1 === 0 && numOfDice > 0) {
    for (let i = 0; i < numOfDice; i++) {
        const value =Math.floor( Math.random() * 6)+1;
        values.push(value);
        images.push(`<img src="assets/dice-${value}.png" width="150" height="150">`);
    }

    diceResult.textContent = `dice(s): ${values.join(", ")}`;
    diceImages.innerHTML = images.join('');
}
else {
    diceResult.textContent = "Please enter a valid number of dice.";
    diceImages.innerHTML = "";
 
}
}