# Minecraft Pseudo Code and Feature Breakdown



## Different Functionalities
- play game
- reset game

## Things that should be in HTML

### Intro page
- logo
- background
- start game button
- about game button
### Landing Page - how to play
- general explanation about how to play the game
### game page
- board div: 20 * 20 tiles with different elements
- toolbar div: tools + current tile
- reset button

```
<container>
	<main>
		<board>
		</board>
	</main>

	<nav>
	</nav>

</container>

```
## Things that should be generated in js

### Functions
####  start game
fill board
	fill board with initial state (sky + dirt)?
	in javascript
	dirt - bottom half of the board
	sky - top bottom of the board
	go over matrix and every tile fill with tile
choose tool
	tool event - current tool updated
choose tile from board:
	if you have current tool check if appropriate
	update current tile
	if you have tile - override only if empty
	override current tile
choose current tile - 


	- tile.eventListener(click)
		if current tool.tile == tile then remove and put in current
		(overri)


	in HTML - we have a minecraft div
	first add - boardSize rows
	in every row add boardSize elements

- render board
- remove filled tile
- add last tile in empty space

// objects in the game
const tile = {
name
tool to this tile
Events: 1. remove tile 2. add tile
}
const tool = {
name
tileType
axe for tree
shovel for dirt
pickaxe for rock
Events:
pick tool
pick tile with tool
}
const tools = {
// inventory of all tools available

}
const tiles = {
// inventory of all tiles count
grass
dirt
rock
}
// Think of this more??
board of tiles 20 \* 20
### minecraft board



boardSize = 10
it is two dimensional array boardSize*boardSize 
every cell is tile object

const mineCraft = {
// Data needed to the game
currentTile
currentTool
toolsAvailable
board of tiles
// const board matrix of objects of Tiles
}

// Functions
mineCraft.startGame = () => {
// create the game board
createWorld();
// create the toolbar with tiles inventory and tool
toolbar();
}






