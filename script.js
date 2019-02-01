var player1point = "0";
var player2point = "1";
var turn = (0);
var board = [
   ['','',''],
   ['','',''],
   ['','','']  
];
function player1EndGame() {
   document.getElementById("fin").innerHTML = "<h2>Player1 Wins</h2>";
   for(var i = 0; i < gamepad.length; i++) {
       gamepad[i].disabled = true;
   }
}
function checkPlayer1Win() {
   for (var i = 0 ; i < 3; i++){
      if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != ""){
         var a = player1EndGame();       
      } 
      if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != ""){
         var a = player1EndGame();       
      }      
   }  
   if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ""){
      var a = player1EndGame();
   }
   if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[1][1] != ""){
      var a = player1EndGame();
   }
}   
   //for (var j = 0 ; j < board.length; j++) {  
      //board[x][y] = board[y][x];    
      //var a = [x];
      //var b = [y];
      //[y,x] = temp;
      //board[b][a] = player1point;
      //console.log(board[j]);
      //if (board[j].every(element =>element === player1point)){
        // document.getElementById("fin").innerHTML = "<h2>Player1 Wins</h2>";
         //var a = endGame();
      //}  
  //}   
//}

var gamepad = document.getElementsByClassName("game-pad");
function onBtnClick([x,y],this_id){
   var a = this_id;
   document.getElementById(a).disabled = true;    
   

   if (turn%2 == 0){
      document.getElementById(a).innerHTML = "O";
      
      board[x][y] = player1point; 
      var winner = checkPlayer1Win()
   } 
   else 
   {
      document.getElementById(a).innerHTML = "X";
      board[x][y] = player2point;
       
   }
   turn ++;
   if (turn > 8 ){
      document.getElementById("fin").innerHTML = "<h2>Tie</h2>";
   }
   //var winner = checkWin();
   
      //return player1point
   //}

   /*if (turn%2 == 0){
      player1point.innerHTML = "O";
      board[x][y] = player1point;  
      for (var i = 0 ; i < board.length; i++) {
         if (board[i].every(element =>element === player1point)){
            document.getElementById("fin").innerHTML = "<h2>Player1 Wins</h2>";
            var a = endGame();
         }  
      }
      for (var j = 0 ; j < board.length; j++) {      
         var a = [x];
         var b = [y];
         board[b][a] = player1point;
         console.log(board[j]);
         if (board[j].every(element =>element === player1point)){
            document.getElementById("fin").innerHTML = "<h2>Player1 Wins</h2>";
            var a = endGame();
         }  
      }   
   }
   
  
   //for (var i = 0 ; i < board.length; i++) {
      //if (board[i].every(check)){
     // board[x][y] = player1point;
      //console.log(board[i]);
      //}    
   //}
   //for (var j = 0 ; j < board.length; j++) {   
      //board[x][y] = player1point;   
      //var temp = [x,y];
      //[x,y] = [y,x];
      //[y,x] = temp;
      //console.log([x,y])
      //if (board[j].every(check)){
          
            //console.log(board[j]);
     // }
         
         
      
      
   
      // var checking = i.every( check );
      //var checking = [3,4,5].every( check );
      //if (check = true){
         
      //}
      
      //for (j = 0; j < 2; j++) {
      //}
   //}
    //alert(win1)
            // return (board[i].every((item) => item === "sample"));
         
            //var element = board[i].every(element =>element === player1point);

         //console.log(element);      
         //console.log(board);
            
   
      //for (var j = 0 ; j < board.length; j++) {   
         //board[x][y] = player1point;   
         //var temp = [x,y];
         //[x,y] = [y,x];
         //[y,x] = temp;
         //console.log([x,y])
         //if (board[j].every(check)){            
            //document.getElementById("fin").innerHTML = "<h2>Player1 Wins</h2>";
            //break
        // }
            
            
         
         
      //}
       
      
           

   
      // if (win = true){
         //  alert(pl1pt)
      // }
       
      //if (player1point.includes("0")&&player1point.includes("1")&&player1point.includes("2")||player1point.includes("3")&&player1point.includes("4")&&player1point.includes("5")||player1point.includes("6")&&player1point.includes("7")&&player1point.includes("8")||player1point.includes("0")&&player1point.includes("3")&&player1point.includes("6")||player1point.includes("1")&&player1point.includes("4")&&player1point.includes("7")||player1point.includes("2")&&player1point.includes("5")&&player1point.includes("8")||player1point.includes("0")&&player1point.includes("4")&&player1point.includes("8")||player1point.includes("2")&&player1point.includes("4")&&player1point.includes("6")){
         //alert("player 1 win");
         //document.getElementById("fin").innerHTML = "<h2>Player1 Wins</h2>";
         //for(var i = 0; i < gamepad.length; i++) {
            //gamepad[i].disabled = true;
         //}
         //document.getElementByClass("game-pad").disabled = true;
      //}

      //if (pl1pt.includes(win1)||pl1pt.includes(win2)||pl1pt.includes(win3)||pl1pt.includes(win4)||pl1pt.includes(win5)||pl1pt.includes(win6)||pl1pt.includes(win7)||pl1pt.includes(win8)){
        
      //if (win1 == pl1pt ){  
      //alert(win1);
      //}                    
      //}
   else {
      document.getElementById(a).innerHTML = "X";
      board[x][y] = player2point;
      for (var i = 0 ; i < board.length; i++) {
         if (board[i].every(element =>element === player2point)){
            document.getElementById("fin").innerHTML = "<h2>Player2 Wins</h2>";
            var a = endGame();
         }    
      }
      /*for (var j = 0 ; j < board.length; j++) {   
         board[x][y] = player2point;   
         var temp = [x,y];
         [x,y] = [y,x];
         [y,x] = temp;
         //console.log([x,y])
         if (board[j].every(check)){
            document.getElementById("fin").innerHTML = "<h2>Player2 Wins</h2>"; 
              // console.log(board[j]);
         }
      }   
      //player2point += [a];
      //if (player2point.includes("0")&&player2point.includes("1")&&player2point.includes("2")||player2point.includes("3")&&player2point.includes("4")&&player2point.includes("5")||player2point.includes("6")&&player2point.includes("7")&&player2point.includes("8")||player2point.includes("0")&&player2point.includes("3")&&player2point.includes("6")||player2point.includes("1")&&player2point.includes("4")&&player2point.includes("7")||player2point.includes("2")&&player2point.includes("5")&&player2point.includes("8")||player2point.includes("0")&&player2point.includes("4")&&player2point.includes("8")||player2point.includes("2")&&player2point.includes("4")&&player2point.includes("6")){
         //document.getElementById("fin").innerHTML = "<h2>Player2 Wins</h2>";
         //for(var i = 0; i < gamepad.length; i++) {
             //gamepad[i].disabled = true;
        // }
      //}*/

   //}
    //document.getElementById(a).disabled = true;
       // check = 0 ; check < pl1pt.length; check++; 

       //if( pl1pt.substr(check) == win1.substr(check) ){check++;}
       // alert(check);
    //}  
   
}
function onRestBtnClick(){
    location.reload();
}
