let currentGame = {
	// tools: {'shovel':'dirt','axe':'wood','pickaxe':'stone'},
	tileElement: {'dirt':'shovel','stone':'pickaxe','wood':'axe','tree':'axe'},
	currentTile: null,
	currentTool: null,
	tiles : [],
	// board constants
	boardRows : 16,
	boardCols : 15,
	surfaceRow : 10,
}


// What I Do
buildBoard();
startGame();



// How I Do It
function makeElement(newTile,elm){
	newTile.classList.add(elm);
	newTile.dataset.tile = elm; 
}
function buildBoard(){
	const minecraft = document.querySelector('.minecraft');	
	for(let i =0 ; i< currentGame.boardRows ; i++)
	{ 
		let row = document.createElement('div');
		row.classList.add('row');
		
		currentGame.tiles[i]=[];
		for(let j =0;j< currentGame.boardCols;j++)
		{	
				let newTile = document.createElement('div');
				// newTile.classList.add('tile');
				row.append(newTile);
				currentGame.tiles[i][j]=(newTile);
			}
			minecraft.append(row);
		}
}
function fillBoard(){
	addDirt();
	addStones();
	addWood();
	addTrees();
}
function startGame()
{
	for(let i =0 ; i< currentGame.boardRows ; i++)
	{ 
		for(let j =0;j< currentGame.boardCols;j++)
		{		
			let element = currentGame.tiles[i][j];
			element.classList.remove(...element.classList);
			console.log(	element.classList);
			element.classList.add('tile');
			// element.classList.add('div');
		}
	}
	fillBoard();
	attachListeners();

}
function addDirt(){
	for(let i=0;i<5;i++)
	{
		for(let j =0 ; j < currentGame.boardCols ; j++)
		{
			makeElement(currentGame.tiles[currentGame.boardRows-i-1][j],'dirt');
		}
	}
}
function addStones(){
	let element = 'stone';
	makeElement(currentGame.tiles[currentGame.surfaceRow][currentGame.boardCols-1],element);
	console.log('stone tile: ',currentGame.tiles[currentGame.surfaceRow][currentGame.boardCols-1]);
	makeElement(currentGame.tiles[currentGame.surfaceRow][8],element);
	makeElement(currentGame.tiles[currentGame.surfaceRow][9],element);
}
function addTrees(){
	let element = 'tree';
	let treeCol = 11;
	// add bush
	makeElement(currentGame.tiles[currentGame.surfaceRow][3],element);
	makeElement(currentGame.tiles[currentGame.surfaceRow][4],element);
	makeElement(currentGame.tiles[currentGame.surfaceRow][5],element);
	makeElement(currentGame.tiles[currentGame.surfaceRow-1][4],element);

	// Add tree 
	makeElement(currentGame.tiles[currentGame.surfaceRow-3][treeCol-1],element);
	makeElement(currentGame.tiles[currentGame.surfaceRow-3][treeCol],element);
	makeElement(currentGame.tiles[currentGame.surfaceRow-3][treeCol+1],element);
	makeElement(currentGame.tiles[currentGame.surfaceRow-4][treeCol-1],element);
	makeElement(currentGame.tiles[currentGame.surfaceRow-4][treeCol],element);
	makeElement(currentGame.tiles[currentGame.surfaceRow-4][treeCol+1],element);
	makeElement(currentGame.tiles[currentGame.surfaceRow-5][treeCol-1],element);
	makeElement(currentGame.tiles[currentGame.surfaceRow-5][treeCol],element);
	makeElement(currentGame.tiles[currentGame.surfaceRow-5][treeCol+1],element);

}

function addWood(){
	let treeCol = 11;
	makeElement(currentGame.tiles[currentGame.surfaceRow][treeCol],'wood');
	makeElement(currentGame.tiles[currentGame.surfaceRow-1][treeCol],'wood');
	makeElement(currentGame.tiles[currentGame.surfaceRow-2][treeCol],'wood');

}
function tileListener(event){
	let tile = event.target;
	if(currentGame.currentTool === null)
	{
		if(currentGame.currentTile.classList.contains('selected'))
		{
			//add current tile on not empty
			if(tile.dataset.length === 0)
			{
				// do nothing
			}
			else
			{
				console.log('adding new tile');
				let newClass = currentGame.currentTile.dataset.tile;
				console.log(newClass);
				currentGame.currentTile.classList.remove(newClass);
				currentGame.currentTile.classList.remove('selected');
				currentGame.currentTile.classList.add('empty');
				currentGame.currentTile.dataset.tile = "";
				tile.classList.add(newClass);
				tile.dataset.tile = newClass;
			}
		}
	}
	else if(currentGame.currentTool.classList.contains('selected'))
	{
			//tool for tile
		// if(currentGame.tools[currentGame.currentTool.dataset.tool] === tile.dataset.tile)
		if(currentGame.tileElement[tile.dataset.tile] === currentGame.currentTool.dataset.tool)
		{
			let newClass = tile.dataset.tile;
			tile.classList.remove(newClass);

			for(const tile in currentGame.tileElement)
			{
				currentGame.currentTile.classList.remove(tile);
			}

			currentGame.currentTile.classList.add(newClass);
			currentGame.currentTile.dataset.tile = newClass;
			currentGame.currentTile.classList.remove('empty');
			tile.dataset.tile = "";

		}
		// tool not for tile
		else
		{
			// add effect on tool
			console.log(currentGame.currentTool.style);
			// currentGame.currentTool.style.background = "red";
			// currentGame.currentTool.style.transition = "red";
			currentGame.currentTool.style.animation = "wrong 1s linear";
			//   animation: wrong 2s infinite;

		}
	}
}
function currentTileListener(event){
	let currentTile = event.target;
	if(currentTile.classList.contains('selected')){
		// currentGame.currentTile = null;
		currentTile.classList.remove('selected');
	}
	// no tile to select
	else if(currentTile.classList.contains('empty')){
		// do nothing
	}
	else{
		currentTile.classList.add('selected');
		if(currentGame.currentTool)
		{
			currentGame.currentTool.classList.remove('selected');
			currentGame.currentTool = null;
		}
		// currentGame.currentTile = newTile;
		
	}
	console.log('currentTileListener',event);
	
}
function toolListener(event){
	
	let newTool = event.target;
	// first time we select tool
	if(currentGame.currentTool === null)
	{
		event.target.classList.add('selected');
		currentGame.currentTool = newTool;
	}
	// we select another tool
	else if(currentGame.currentTool !== newTool)
	{
		newTool.classList.add('selected');
		currentGame.currentTool.classList.remove('selected');
		currentGame.currentTool = newTool;
	}
	// // we unselect the same tool
	else
	{
		currentGame.currentTool = null;
		event.target.classList.remove('selected');
	}
}

function resetHandler(event){
	console.log('reset...');
	currentGame.currentTool = null;
	let newClass = currentGame.currentTile.dataset.tile;
	if(newClass)
	{
		currentGame.currentTile.classList.remove(newClass);
	}
	// currentGame.tiles = [];
	let selected = document.querySelectorAll('.selected');
	selected.forEach(elm => elm.classList.remove('selected'));
	startGame();
	

}
function attachListeners(){
	let tiles = document.querySelectorAll('.tile'); 
	tiles.forEach(tile => tile.addEventListener('click',tileListener));
	
	currentGame.tools = document.querySelectorAll('.tool'); 
	currentGame.tools.forEach(tool => tool.addEventListener('click',toolListener));

	currentGame.currentTile = document.querySelector('.currentTile');
	console.log("current tile",currentGame.currentTile);
	currentGame.currentTile.addEventListener('click',currentTileListener);
	currentGame.currentTile.removeEventListener('click',tileListener);

	let reset = document.querySelector('.reset'); 
	reset.addEventListener('click',resetHandler);
}