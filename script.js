var pl1pt = "";
//var win = "0"&&"1"&&"2"+"3"&&"4"&&"5";
//"34,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6
var win1 = ["0","1","2"];
var win2 = "3"&&"4"&&"5";
var win3 = "6"&&"7"&&"8";
var win4 = "0"&&"3"&&"6";
var win5 = "1"&&"4"&&"7";
var win6 = "2"&&"5"&&"8";
var win7 = "0"&&"4"&&"8";
var win8 = "2"&&"4"&&"6";
var turn = (0);
var win = false;
var i = "";
//var check = 0;
var pl2pt = "";
var gamepad = document.getElementsByClassName("game-pad");

function onBtnClick(this_id){

    var a = (this_id);
    document.getElementById(a).disabled = true;
    //alert(win1)
      
   if (turn%2 == 0){
       document.getElementById(a).innerHTML = "O";
       pl1pt += a;
       
       //switch(pl1pt){
          // case "0"+"1":
           //win = true;
          // alert(pl1pt);
           //break;
           //default :
           //win = false;
           
           

       //}
      // if (win = true){
         //  alert(pl1pt)
      // }
       
      if (pl1pt.includes("0")&&pl1pt.includes("1")&&pl1pt.includes("2")||pl1pt.includes("3")&&pl1pt.includes("4")&&pl1pt.includes("5")||pl1pt.includes("6")&&pl1pt.includes("7")&&pl1pt.includes("8")||pl1pt.includes("0")&&pl1pt.includes("3")&&pl1pt.includes("6")||pl1pt.includes("1")&&pl1pt.includes("4")&&pl1pt.includes("7")||pl1pt.includes("2")&&pl1pt.includes("5")&&pl1pt.includes("8")||pl1pt.includes("0")&&pl1pt.includes("4")&&pl1pt.includes("8")||pl1pt.includes("2")&&pl1pt.includes("4")&&pl1pt.includes("6")){
         alert("player 1 win");
         document.getElementById("fin1").style.zIndex = "2";
         for(var i = 0; i < gamepad.length; i++) {
            gamepad[i].disabled = true;
         }
         //document.getElementByClass("game-pad").disabled = true;
      }

      //if (pl1pt.includes(win1)||pl1pt.includes(win2)||pl1pt.includes(win3)||pl1pt.includes(win4)||pl1pt.includes(win5)||pl1pt.includes(win6)||pl1pt.includes(win7)||pl1pt.includes(win8)){
        
      //if (win1 == pl1pt ){  
      //alert(win1);
      //}                    
      }
   else {
      document.getElementById(a).innerHTML = "X";
      pl2pt += [a];
      if (pl2pt.includes("0")&&pl2pt.includes("1")&&pl2pt.includes("2")||pl2pt.includes("3")&&pl2pt.includes("4")&&pl2pt.includes("5")||pl2pt.includes("6")&&pl2pt.includes("7")&&pl2pt.includes("8")||pl2pt.includes("0")&&pl2pt.includes("3")&&pl2pt.includes("6")||pl2pt.includes("1")&&pl2pt.includes("4")&&pl2pt.includes("7")||pl2pt.includes("2")&&pl2pt.includes("5")&&pl2pt.includes("8")||pl2pt.includes("0")&&pl2pt.includes("4")&&pl2pt.includes("8")||pl2pt.includes("2")&&pl2pt.includes("4")&&pl2pt.includes("6")){
         alert("player 1 win");
         document.getElementById("fin2").style.zIndex = "2";
         for(var i = 0; i < gamepad.length; i++) {
             gamepad[i].disabled = true;
         }
      }

   }
    //document.getElementById(a).disabled = true;
       // check = 0 ; check < pl1pt.length; check++; 

       //if( pl1pt.substr(check) == win1.substr(check) ){check++;}
       // alert(check);
    //}  
    turn ++;
    if (turn > 8 ){
       document.getElementById("fin3").style.zIndex = "2"; 
    }
}
function onRestBtnClick(){
    location.reload();
}