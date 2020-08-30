# Minecraft Pseudo Code and Feature Breakdown

## Submitted 
- Github: https://github.com/sihamEgb/bootcamp_minecraft
- Netlify:

## What is this app?
 2D pre-generated world of Minecraft.
 Using html / CSS / vanilla javascript

## Stuff I found Hard to Implement:
This is my first project using js , so working with classes for style sheets and js required new mindset.
Also, separating functionalities in event handlers for different elements in the game required a lot of focus   

## Known Bugs
TBD

## My Review of this assignment
This assignment was very fun, because we saw visual results for the event listeners.
It was a good practice for debugging.
It was a good practice for writing a pseudo code.


## My Pseudo Code 

### Different Functionalities
- play game
- reset game

### Things that should be in HTML
- homepage: logo , start game , about game
- about page: general explanation about how to play the game
- game page
	- toolbar (tools and last tile to be removed from game)
	- board
	- reset button



### Things that should be generated in js

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
board of tiles 16 * 15

### minecraft board

it is two dimensional array boardSize\*boardSize
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
