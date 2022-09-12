function tseamAccount(arr) {
    let account = arr.shift();
    account = account.split(" ");

    for (let i = 0; i < arr.length; i++) {
        let gameCommand = arr[i].split(" ")[0];
        let game = arr[i].split(" ")[1];

        switch (gameCommand) {
            case "Install":
                if (account.includes(game) == false) {
                    account.push(game);
                }
                break;
            case "Uninstall":
                if (account.includes(game) == true) {
                    let n = account.indexOf(game);
                    account.splice(n, 1);
                }
                break;
            case "Update":
                if (account.includes(game) == true) {
                    let n = account.indexOf(game);
                    account.splice(n, 1);
                    account.push(game);
                }
                break;
            case "Expansion":
                let expansionGame = game.split("-")[0];
                if (account.includes(expansionGame) == true) {
                    let n = account.indexOf(expansionGame);
                    account.splice(n+1, 0, `${game.split("-")[0]}:${game.split("-")[1]}`);                  
                break;
            }
        }
    }

    console.log(account.join(" "));
}

tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']); //CS CS:Go LoL Diablo
tseamAccount(['CS WoW Diablo','Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']); //CS Diablo WoW

/*Install {game} - add the game at the last position in the account, but only if it isn't installed already.
Uninstall {game} - delete the game if it exists.
Update {game} - update the game if it exists and place it in the last position.
Expansion {game}-{expansion} - check if the game exists and insert after it the expansion in the following format: "{game}:{expansion}";
*/