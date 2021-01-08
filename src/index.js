// Create one dimensional array 
//var board = new Array(3); 
 
// Loop to create 2D array using 1D array 
//for (var i = 0; i < board.length; i++) { 
//    board[i] = new Array(3); 
//} 
/*
let board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
 ];


 for (var i = 0; i < board.length; i++){
    for (var j = 0; j <board[0].length; j++) { 
        board [i][j] = document.querySelectorAll('.game-cell');
    } 
}
*/

/*
let currentPlayer = 'X';
let display = document.getElementById('status2');
const size = 3;
function fill(index){  
    
    const row = Math.floor(index/size);
    const col = index % size;
    board[row][col] = document.getElementById('game-cell'+index); 
    //console.log (board[row][col]) ;
    console.log(row);
    console.log(col);
    if (board[row][col].innerHTML == "") {
        
        board[row][col].innerHTML = currentPlayer;
        checkPlayer();
        
    } 
   
    else{

        if (tie()){
            display.innerHTML = "Match Draw";
            reset();
        }
        //window.alert("Tie-Game ended") 
       
        
    }
    
}

function checkPlayer(){
   
    if (currentPlayer == 'X' ){ 
        
        //currentPlayer = 'O';
        if (winner()){
            //window.alert("Winner is" + currentPlayer);
            
            display.innerHTML = "Winner is " + currentPlayer ; 
            reset();

            
        }

        
        else {
            currentPlayer = 'O';
            
            display.innerHTML = "Next turn: Player " + currentPlayer; 
            
        }
    
       
    }   
    else {
        //currentPlayer = 'X'; 
        
        if (winner()){
            
            //window.alert("Winner is" + currentPlayer);
            display.innerHTML = "Winner is Player " + currentPlayer; 
            reset();
        }

        
        else {
            currentPlayer = 'X';
            
            display.innerHTML = "Next turn: Player " + currentPlayer; 
            
        }
        
    }

       
}

function reset(){
    for (var i=0; i<size*size ; i++){
        document.getElementById('game-cell'+i).innerHTML = ""; 
    }
}

function restart(){
    for (var i=0; i<size*size ; i++){
        document.getElementById('game-cell'+i).innerHTML = ""; 
    }
    //count = 1;
    currentPlayer = 'X';
    display.innerHTML = "Let's Play";
}

/*      
function getDiv(num){
    return document.getElementById('game-cell'+num).innerHTML;
}

function checkDivs(a,b,c,m){
    if (getDiv(a)==m && getDiv(b)==m && getDiv(c)==m){
        return true;
    }
    else{
        return false;
    }
}
function winner (){
    
    if (checkDivs(0,1,2,currentPlayer)|| checkDivs(3,4,5,currentPlayer) 
    || checkDivs(6,7,8,currentPlayer) || checkDivs(0,3,6,currentPlayer) 
    || checkDivs(1,4,7,currentPlayer) || checkDivs(2,5,8,currentPlayer)
    || checkDivs(0,4,8,currentPlayer) || checkDivs(2,4,6,currentPlayer)){
        //window.alert ("Winner is" + currentPlayer);
      return true;
        //reset();
    }
 
    else{
        return false;
        
    }

   
}



function tie(){
    for (var i=0; i<9 ; i++){
        if (getDiv(i) != ""){
            return true;
        }; 
    }
}
*/
/*
// A function that returns true if any of the row 
// is crossed with the same player's move 
function rowCrossed() 
{ 
	for (var i=0; i<size; i++) 
	{ 
		if (board[i][0] == board[i][1] && 
			board[i][1] == board[i][2] && 
			board[i][0] != " "){
            return true;
            } 
		else {
            return false;
        }	 
	} 
	
} 

// A function that returns true if any of the column 
// is crossed with the same player's move 
function columnCrossed() 
{ 
	for (var i=0; i<size; i++) 
	{ 
		if (board[0][i] == board[1][i] && 
			board[1][i] == board[2][i] && 
			board[0][i] != " ") {
                return true;
            } 
        else {
            return false; 
        }
	} 
	
} 

// A function that returns true if any of the diagonal 
// is crossed with the same player's move 
function diagonalCrossed() 
{ 
	if (board[0][0] == board[1][1] && 
		board[1][1] == board[2][2] && 
		board[0][0] != " "){
        return true; 
        } 
		
		
	else if (board[0][2] == board[1][1] && 
		board[1][1] == board[2][0] && 
		board[0][2] != " "){
        return true;
        } 
	else{
        return false;
    }	 
 
} 

// A function that returns true if the game is over 
// else it returns a false 
function winner() { 
    if (rowCrossed() || columnCrossed() || diagonalCrossed() ) {
        return true;
    }
    else{
        return false;
    } 
} 

function getDiv(num){
    return document.getElementById('game-cell'+num).innerHTML;
}

function tie(){
    for (var i=0; i<size*size ; i++){
        if (getDiv(i) != ""){
            return true;
        }; 
    }
}

/*---
/*checking for a draw'*/
 /* function tie() {
    for (var i = 0; i < size*size; i++) {
      // console.log(board[i]);
      row = math.floor(i/3);
      col = i % 3;
      if (board[row][col] != "") {
        return true;
      }
      else{
          return false;
      }
    }
    
  } 

 */ 

 /*----------------------------------------------------------------------------*/

 //declaring a 2D array
var board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
 ];

 //console.log (board);
 

//Grab the HTML elements 
cellDivs = document.querySelectorAll('.game-cell');
console.log (cellDivs);
var display = document.getElementById('status2');

//Event listener -> 9 cells
for (cellDiv of cellDivs){
    cellDiv.addEventListener('click', handleCellClick);
}

//Event handler ->9 cells
var currentPlayer = 'playerX';

handleCellClick = (e) =>{
    //const classList = e.target.classList;
    const location = e.target.classList[1];
    //console.log(e);
    //console.log(location);
    //var cell = e.target.classList[2];
    //display.innerHTML = currentPlayer; 
    var row = Math.floor(location/3);
    var col = location % 3;

    if (e.target.classList[2]=== 'playerX' || e.target.classList[2]=== 'playerO'){
        return;
    }
    if (currentPlayer==='playerX'){
        cellDivs[location].classList.add('playerX')
        board[row][col] = "X";    
        console.log(board);
        if (winner()){
            display.innerHTML = "Winner is " + currentPlayer +" !" ; 
            restart();
                 
            
        }
        else{
            currentPlayer = 'playerO';
            display.innerHTML = "Next turn: " + currentPlayer;
        }
        
    }
    else{
        cellDivs[location].classList.add('playerO')
        board[row][col] = "O"; 
        console.log(board);
        if (winner()){
            display.innerHTML = "Winner is " + currentPlayer +" !"; 
            restart();   
        }
        else{
            currentPlayer = 'playerX';
            display.innerHTML = "Next turn: " + currentPlayer;
        }
        
    }
    
    //console.log(cellDivs[location]);
    //cellDivs[location].add(currentPlayer);
    

} 

/*------------------------Winning logic-----------------------------------------------------*/

// A function that returns true if any of the row is crossed with the same player's move 
function rowCrossed() 
{ 
	for (var i=0; i<3; i++) 
	{ 
		if (board[i][0] == board[i][1] && 
			board[i][1] == board[i][2] && 
			board[i][0] != " "){
            return true;
            } 
		else {
            return false;
        }	 
	} 
	
} 

// A function that returns true if any of the column 
// is crossed with the same player's move 
function columnCrossed() 
{ 
	for (var i=0; i<3; i++) 
	{ 
		if (board[0][i] == board[1][i] && 
			board[1][i] == board[2][i] && 
			board[0][i] != " ") {
                return true;
            } 
        else {
            return false; 
        }
	} 
	
} 

// A function that returns true if any of the diagonal 
// is crossed with the same player's move 
function diagonalCrossed() 
{ 
	if (board[0][0] == board[1][1] && 
		board[1][1] == board[2][2] && 
		board[0][0] != " "){
        return true; 
        } 
		
		
	else if (board[0][2] == board[1][1] && 
		board[1][1] == board[2][0] && 
		board[0][2] != " "){
        return true;
        } 
	else{
        return false;
    }	 
 
} 

// A function that returns true if there is a winner 
function winner() { 
    if (rowCrossed() || columnCrossed() || diagonalCrossed() ) {
        return true;
    }
    else{
        return false;
    } 
} 

/*
/*-------------------------------------Reset------------------------------------*/

/*function reset(){
    //currentPlayer = 'playerX';
    //display.innerHTML = "Let's Play";
    for (cellDiv of cellDivs){
        cellDiv.classList.remove('playerX')
        cellDiv.classList.remove('playerO')
    }
    
}*/
/*
/*-------------------------------------Restart------------------------------------*/
/*function restart(){
    
    display.innerHTML = "Let's Play";
    for (var i = 0; i < board.length; i++){
        for (var j = 0; j <board[0].length; j++) { 
            board [i][j] = "";
        } 
    }
    for (cellDiv of cellDivs){
        cellDiv.classList.remove('playerX')
        cellDiv.classList.remove('playerO')
        
    }
      
} */

function restart(){
    
    setTimeout(function(){location.reload();},2000);  
      
}   

//function myFunction() {
//    setTimeout(function(){ alert("Hello"); }, 2000);
//  }

/*---------------------------------------Tie--------------------------*/

