/**
 * Let's make a game 🕹
 */

// type Position = 'up'| 'down' | 'left' | 'right';
// function move(position:Position) {
//     let x = 0;
//     let y = 0;

//     switch(position){
//         case 'up' :
//             return console.log(x, ++y) ;
//         case 'down' :
//             return console.log(x, --y) ;
//         case 'left' :
//             return console.log(++x, y) ;
//         case 'right' :
//             return x-- ;    
//         default : 
//             return console.log(x, y)
//     }
// }


const position = {x: 0, y: 0};
function move(direction: 'up'| 'down' | 'left' | 'right') {
    switch(direction) {
        case 'up':
            position.y +=1;
            break;
        case 'down':
            position.y -= 1;
            break;
        case 'left':
            position.x -= 1;
            break;
        case 'right':
            position.x += 1;
            break;
        default:
            throw new Error(`unknown direction: ${direction}`);


    }
}
console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
