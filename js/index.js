// Globals
let boardRows = 10;
let boardCols = 15;
let currentGame = {
	tools: {'shovel':'dirt'},
	tiles: ['dirt'],
	currentTile: null,
	currentTool: null,
}

const tiles = [
	{name: 'dirt'},
];
// var tilesClassNames = ['dirt'];

// What I Do
startGame();
attachListeners();



// How I Do It
function startGame(){

	const minecraft = document.querySelector('.minecraft');	
	
	for(let i =0 ; i< boardRows ; i++)
	{ 
		let row = document.createElement('div');
		row.classList.add('row');
		
		for(let j =0;j< boardCols;j++)
		{
				let newTile = document.createElement('div');
				newTile.classList.add('tile');
				newTile.classList.add('dirt');
				newTile.dataset.tile = 'dirt'; 
				row.append(newTile);
		}
		minecraft.append(row);
	}

}

function tileListener(event){
	// console.log('clicked',event.target);
	console.log(event.target.dataset.tile);
	// current tool not empty 

	//tool for tile

	// tool not for tile

	//add current tile on not empty


	//add current tile on not empty

	// add tile 
	currentGame.
	currentGame.currentTool
	// let tile = event.target.
	// currentGame.currentTile = event.target
}
function toolListener(event){
	// console.log('clicked',event.target);

	console.log(event.target.dataset.tool);

}
function attachListeners(){
	let tiles = document.querySelectorAll('.tile'); 
	tiles.forEach(tile => tile.addEventListener('click',tileListener));
	
	let tools = document.querySelectorAll('.tool'); 
	tools.forEach(tool => tool.addEventListener('click',toolListener));
}