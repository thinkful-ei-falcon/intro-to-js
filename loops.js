let array = ['Halo','Tetris','Sims','Runescape','Dark Souls', 'Mass Effect','Tony Hawk Underground' ];
//Destructuring an Array
const [topGame, nextGame, ...otherGames] = array;
console.log(topGame); 
console.log(nextGame); 
console.log(otherGames)

for (let i = 0; i < 3; i++) {
    const element = array[i];
   // console.log(`at index ${i} we have ${element}`);    
}

for (const element of array) {
   // console.log(element)    
}

//array.forEach(game=>console.log(game));


let obj = {
    game:'Halo',
    character:'Master Chief',
    description: 'Kill the aliens and survive'
};


//console.log(obj.game);   //Halo
let key = "game"
//console.log(obj[key]);  //Halo

for (const key in obj) {
   // console.log(key, obj[key]);
   // console.log(`${key} : ${obj[key]}`)    
}
