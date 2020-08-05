
//------------------------ Game Project---------------------------
//Do you remember the game Battleship we created before? well .... it is time to make it with the DOM!!
//We are providing you with the design of a board (in the DOM) for a player1, you have to create the board for the player2 using the id property 'board_player2' -> it is the second list (ul) in your index.html file
//First ask the players for their names (use propmt)
//Now each time the turn player clicks on any cell of the opponent's board (you have to verify if the player is clicking the right board) the program needs to verify if there is an opponent's ship in that cell. If it is then the opponent has one less ship
//We want you to store the data of each player in two Player objects. Each object has to store: name, remaining boats, and their respective board.
//Each board needs to be initialized randomly with '0' and four '1' wich means the state of the cell. Numbers 1 are representing the 4 positions of the player's ships
//Also we want you to display the name of the turn player in the tag that has the id 'turn_player'. And if there is a winner  a text with: 'Congratulationes {name_player}!! you win'
//in the index.html file you are going to find 4 more ids: 'name_player1' , 'name_player2' , 'ships_player1' , 'ships_player2'. We want to see the information of each player in the respective elements
//As our previous Battleship, the winner is the player that hits the 4 opponent's ships first
//one more Thing create a 'reset' and a 'new game' buttons as childs of the element with the id 'buttons'. the reset button has to start the game again and the new game create a new game with new players and a new random board.
  
//Object PlayerOne
  let playerOne = {
    name: 1,
    shipCount: 4,
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]]
  };
  //Object PlayerTwo
  let playerTwo = {
    name: 2,
    shipCount: 4,
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]]
  };

let name_1 = document.getElementById("name_player1")
name_1.innerHTML = playerOne.name;
let name_2 = document.getElementById("name_player2")
name_2.innerHTML = playerTwo.name;
let ships_1 = document.getElementById("ships_player1")
ships_1.innerHTML = playerOne.shipCount;
let ships_2 = document.getElementById("ships_player2")
ships_2.innerHTML = playerTwo.shipCount;


const board_Player1 = document.getElementById('board_player1');

let ships = 0;//variable to add and count ships
let xShips; //x coordinates for position of ships
let yShips; //y coordinates for position of ships

function placeShip ( ) {

}
while (ships < playerOne.shipCount) {
  //random number for x  and y (coordinates) between 0 and 3,floor# for not including floating, last number not invcluded in random(4).
  
  xShips = Math.floor(Math.random() * 4);
  yShips = Math.floor(Math.random() * 4);
  
  if (parseInt(playerOne.gameBoard[xShips][yShips]) !== 1) {
    //add a ship
    playerOne.gameBoard[xShips][yShips] = 1;
   
    ships++;   
    console.log(playerOne.gameBoard);
  }
}




    // let currentPlayer = playerOne;
    // let oponent;

for ( x = 0; x < 4; x++) {

  const li = document.createElement('li'); // creating childs for the list (board), in this case represent a row number 'x' of the board


  for ( y = 0; y < 4; y++) {
    const cell = document.createElement('div');
    cell.className = "square"; // adding css properties to make it looks like a square
    cell.textContent = `${x},${y}`;  // saves the coordinates as a string value 'x,y'
    cell.value = 0;//state of the cell
    console.log(cell.textContent);
 
    //this function adds the click event to each cell
    cell.addEventListener('click', (event) => {
      let cellClicked = event.target; // get the element clicked
      console.log(cellClicked.textContent) //display the coordinates in the console
    

      // let boardElementId = cellClicked.closest('ul');
      // if (boardElementId === board_Player2 && currentPlayer === playerOne) {
      // } else if (boardElementId === board_Player1 && currentPlayer === oponent) {
      // } else {
      //   // return;
      // }
      let xy = cellClicked.textContent.split(',');
      // cellClicked.style.visibility = 'hidden';
      let x = parseInt(xy[0]);
      let y = parseInt(xy[1]);
console.log(x);
console.log(y);
      
      // if (currentPlayer === playerOne) {
      //   oponent = playerTwo;
      // } else {
      //   oponent = playerOne;
      // }
      
     

      if (playerOne.gameBoard[x][y] === 1) {
        
        playerOne.gameBoard[x][y] = 0;
         playerOne.shipCount--;
         alert('Hit');
        //  cellClicked.style.backgroundColor = "purple";
       } else {
         alert('Miss');
        //  cellClicked.style.backgroundColor = "blue";
       }
           console.log(ships_1)
           console.log(playerOne);
      ships_1.innerHTML = playerOne.shipCount;
      ships_2.innerHTML = playerTwo.shipCount;

   
      
          //switching players
        // if (currentPlayer === playerOne) {
        //   currentPlayer = playerTwo;
        // } else {
        //   currentPlayer = playerOne;
        // }
      
            //when shipCount is 0 return the oponent is the winner and game over
        if (playerOne.shipCount === 0) {
          return (`The winner is ${playerTwo.name}!`)
       
        }

       

    });
    li.appendChild(cell); //adding each cell into the row number x
  }
  board_Player1.appendChild(li); //adding each row into the board
}



ships = 0;
const board_Player2 = document.getElementById('board_player2');

while (ships < playerTwo.shipCount) {
   
  xShips = Math.floor(Math.random() * 4);
  yShips = Math.floor(Math.random() * 4);
   if (parseInt(playerTwo.gameBoard[xShips][yShips]) !== 1) {
    //add a ship
    playerTwo.gameBoard[xShips][yShips] = 1;
    //add to the counter everytime the cycle run.
    ships++;   
    console.log(playerTwo.gameBoard);
  }
}

for (x = 0; x < 4; x++) {

  const li = document.createElement('li'); // creating childs for the list (board), in this case represent a row number 'x' of the board

  for ( y = 0; y < 4; y++) {
    const cell = document.createElement('div');
    cell.className = "square"; // adding css properties to make it looks like a square
    cell.textContent = `${x},${y}`;  // saves the coordinates as a string value 'x,y'
    cell.value = 0;//state of the cell

    //this function adds the click event to each cell
    cell.addEventListener('click', (event) => {
      let cellClicked = event.target; // get the element clicked
      console.log(cellClicked.textContent) //display the coordinates in the console
    

      // let boardElementId = cellClicked.closest('ul');
      // if (boardElementId === board_Player2 && currentPlayer === playerOne) {
      // } else if (boardElementId === board_Player1 && currentPlayer === oponent) {
      // } else {
      //   // return;
      // }
      let xy = cellClicked.textContent.split(',');
      // cellClicked.style.visibility = 'hidden';
      let x = parseInt(xy[0]);
      let y = parseInt(xy[1]);
console.log(x);
console.log(y);
      
      // if (currentPlayer === playerOne) {
      //   oponent = playerTwo;
      // } else {
      //   oponent = playerOne;
      // }
      
     console.log(playerOne);

      if (playerTwo.gameBoard[x][y] === 1) {
        
        playerTwo.gameBoard[x][y] = 0;
         playerTwo.shipCount--;
         alert('Hit');
        //  cellClicked.style.backgroundColor = "purple";
       } else {
         alert('Miss');
        //  cellClicked.style.backgroundColor = "blue";
       }
           
      ships_1.innerHTML = playerOne.shipCount;
      ships_2.innerHTML = playerTwo.shipCount;
      console.log(playerTwo.gameBoard);
      
        //   //switching players
        // if (currentPlayer === playerOne) {
        //   currentPlayer = playerTwo;
        // } else {
        //   currentPlayer = playerOne;
        // }
      
            //when shipCount is 0 return the oponent is the winner and game over
        if (playerTwo.shipCount === 0) {
          return (`The winner is ${playerOne.name}!`)
        // } else {
        //   return (`The winner is ${playerTwo.name}!`)
        }

       


    });



    li.appendChild(cell); //adding each cell into the row number x
  }

  board_Player2.appendChild(li); //adding each row into the board
  
}

