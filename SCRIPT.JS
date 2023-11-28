var cells =document.querySelectorAll(".cell");

var currentPlayer = "x";

cells.forEach(function(cell) {
    cell.addEventListener("click", function(){
        if (!cell.innerHTML) {
            cell.innerHTML = currentPlayer;
            
            if(checkWinner()){
                displayMessage("Player " + currentPlayer + "wins!");
                resetGame();
            }else if(checkWinner()) {
                displayMessage("Player " + currentPlayer + " wins!");
            }else{
                resetGame();
            }

        }

    })











})