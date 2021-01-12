/*----------------------------------------------------------------------------*/
//Initializing an empty 2D board array to store 'X' and 'O' 
var board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
 ];

/*----------------------------------------------------------------------------*/
//Grab the HTML elements 
cellDivs = document.querySelectorAll('.game-cell');
console.log (cellDivs);
var display = document.getElementById('status2');

//Event listener -> 9 cells
for (cellDiv of cellDivs){
    cellDiv.addEventListener('click', handleCellClick);
}

/*-----------------------------Handle Cell Clicks--------------------------------*/

//Event handler -> 9 cells
var currentPlayer = 'playerX';
var count = 1;

handleCellClick = (e) =>{
const location = e.target.classList[1];
    //console.log(e);
    //console.log(location);
const cell = e.target.classList[2];
let row = Math.floor(location/3);
let col = location % 3;

if (cell=== 'playerX' || cell=== 'playerO'){
    return;
}

/*-----------------------------Play Game----------------------------------------*/

    console.log(count);
    if (count<=9){
        //Check Player
        if (currentPlayer==='playerX'){
            cellDivs[location].classList.add('playerX')
            board[row][col] = "X";    
            console.log(board);
            //Winner
            if (winner()){
            display.innerHTML = `Winner is ${currentPlayer} ✌!`; 
            reset();   
            }
        
            else{
            currentPlayer = 'playerO';
            display.innerHTML = `Next turn: ${currentPlayer}`;
            }
        
        }
        else {
            cellDivs[location].classList.add('playerO')
            board[row][col] = "O"; 
            console.log(board);
            
            if (winner()){
                display.innerHTML = `Winner is ${currentPlayer} ✌!`; 
            reset();   
            }

            else{
                currentPlayer = 'playerX';
                display.innerHTML = `Next turn: ${currentPlayer}`;
            }
        }
        // Tie
        if(count === 9){
            display.innerText = "Match Draw !";
        }  
        count++;
        
    }
    
    
}
   
/*------------------------Winning logic---------------------------------------------*/

// A function that returns true if any of the row 
//is crossed with the same player's move 
function rowCrossed() 
{ 
	for (let i=0; i<3; i++) 
	{ 
        
		if (board[i][0] == board[i][1] && 
			board[i][1] == board[i][2] && 
			board[i][0] != " "){
            return true;
            } 

	} 
	
} 

// A function that returns true if any of the column 
// is crossed with the same player's move 
function columnCrossed() 
{ 
	for (let i=0; i<3; i++) 
	{ 
		if (board[0][i] == board[1][i] && 
			board[1][i] == board[2][i] && 
			board[0][i] != " ") {
                return true;
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

/*------------------------------------Reset/Restart Game-------------------------*/
function reset(){
    setTimeout(function(){location.reload();},1000);  
}


function restart(){
    
    setTimeout(function(){location.reload();},100);  
      
}   

/*-------------------------------------------------------------------------------*/





