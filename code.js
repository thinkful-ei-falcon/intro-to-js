let foo = 'bar';
let bizz = 'bang';

///console.log('Foo is ' + foo + ' and bizz is ' + bizz + '.');
//console.log(`Foo is ${foo} and bizz is ${bizz}.`); 

//If statements
function disneyWorld(childAge){
    if(childAge >0 &&  childAge<3){
        console.log('You may want to wait til the kid is a little older');
    } else if(childAge>4 && childAge<17){
        console.log('Great age, lets go!');
    }else if(childAge===17){
        console.log('you can still have fun too!')
    } else{
        console.log('Go anyway, its nice');
    }
}

//Switch Statements
function disneyWorld(childAge){
    switch (childAge) {
        case 2:
            console.log('You may want to wait til the kid is a little older');
            break;
        case 7:
            console.log('Great age, lets go!');
            break;
        case 17:
            console.log('you can still have fun too!')
            break;
    
        default:
            console.log('Go anyway, its nice');
            break;
    }
}

disneyWorld(2);
disneyWorld(17);
disneyWorld(100)

//string methods
let str = "This is a string"
let sub = str.substring(2,5);
let slice = str.slice(2,5);


let arrTest = str.split(' ');// converts a string to an array
console.log(arrTest)

let splice = arrTest.splice(1,0,"Woot"); //modifies array
console.log(arrTest);
console.log(splice);

console.log(sub);
console.log(slice);


let arr1= ['the', 'dog', 'ran'];
//console.log(arr1.join(' ************************ '));

