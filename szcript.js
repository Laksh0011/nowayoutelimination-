function eliminate(playerName) {
    let playerList = document.getElementById("players-list");
    let eliminatedList = document.getElementById("eliminated-list");

    let playerItems = playerList.getElementsByTagName("li");

    for (let i = 0; i < playerItems.length; i++) {
        if (playerItems[i].textContent.includes(playerName)) {
            let eliminatedItem = document.createElement("li");
            eliminatedItem.textContent = playerName + " ❌";
            eliminatedList.appendChild(eliminatedItem);

            playerItems[i].remove(); // Removes player from the list
            break;
        }
    }

    // Check if only one player remains
    if (playerList.getElementsByTagName("li").length === 1) {
        let winner = playerList.getElementsByTagName("li")[0];
        winner.innerHTML = `${winner.textContent} 🏆 Winner!`;
    }
}