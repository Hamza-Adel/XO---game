
  var cells = document.querySelectorAll(".cell");
  var currentPlayer = "X";

  cells.forEach(function (cell) {
    cell.addEventListener("click", function () {
      if (!cell.innerHTML) {
        cell.textContent = currentPlayer;
        if (checkWinner()) {
          displayMessage("Player " + currentPlayer + " wins!");
          resetGame();
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    });
  });

  function checkWinner() {
    var winningCombos = [
      [0, 1, 2],
[3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (var i = 0; i < winningCombos.length; i++) {
      var combo = winningCombos[i];
      var a = combo[0],
        b = combo[1],
        c = combo[2];
      if (
        cells[a].textContent &&
        cells[a].textContent === cells[b].textContent &&
        cells[a].textContent === cells[c].textContent
      ) {
        return true;
      }
    }

    return false;
  }

  function resetGame() {
    cells.forEach(function (cell) {
      cell.textContent = "";
    });
    setTimeout(function () {
      document.getElementById("message").textContent = "";
    }, 3000);
  }

  function displayMessage(message) {
    var messageElement = document.getElementById("message");
    messageElement.textContent = message;
  }
;
