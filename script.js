var player1point = "0";
var player2point = "1";
var gamepad = document.getElementsByClassName("game-pad");
var turn = 0;
var board = [
  ['','',''],
  ['','',''],
  ['','','']  
];
function playerEndGame() {
  if (turn%2 == 0) {
    document.getElementById("fin").innerHTML = "<h2>Player1 Wins</h2>";
  } else {
    document.getElementById("fin").innerHTML = "<h2>Player2 Wins</h2>";
  }
  for(var i = 0; i < gamepad.length; i++) {
    gamepad[i].disabled = true;
  }
}
function checkPlayerWin() {
  for (var i = 0 ; i < 3; i++) {
    if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != "") {
        playerEndGame();       
    } 
    if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != "") {
        playerEndGame();       
    }      
  }  
  if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != "") {
    playerEndGame();
  }
  if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[1][1] != "") {
    playerEndGame();
  }
} 
function onRestBtnClick() {
  location.reload();
}  
function onBtnClick([x,y], this_id) {
   var grid = this_id;
   document.getElementById(grid).disabled = true;    
  if (turn%2 == 0){
    document.getElementById(grid).innerHTML = "O";   
    board[x][y] = player1point; 
    checkPlayerWin()
  } else {
    document.getElementById(grid).innerHTML = "X";
    board[x][y] = player2point;
    checkPlayerWin();      
  }
  turn ++;
  if (turn > 8 ){
    document.getElementById("fin").innerHTML = "<h2>Tie</h2>";
  } 
}
