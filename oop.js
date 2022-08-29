//Factory Function
// Constructor Function
// Class Syntax

/////Bullet
// Factory Function

function bulletTest (speed, damage) { 
 let newObj = {};
 newObj.speed = speed;
 newObj.damage = damage;
 return newObj;
}

// Constructor Function

function bulletTest2(speed,damage){
 let this = {};
 this.speed = speed;
 this.damage = damage;
 return this;
}

// Class Syntax

class bulletTest3 {
  constructor(speed, damage) {
    let this = {};
    this.speed = speed;
    this.damage = damage;
  }
}

////Ship

//Factory Function - is this meant to be a nested object?

function shipTest1(HP, Speed) {
    return {
        HP : HP,
        Speed : Speed,
        firebullet: function (b_speed, damage) { //return a bullet object with 1 speed and 1 damage
          return bulletTest(b_speed, damage)
        }
    }
}

// Constructor Function

function shipTest2(HP, speed){
  this.HP = HP;
  this.speed = speed;
  this.firebullet = function(){
    return bulletTest(b_speed, damage)
  }
}

//example call
// ship = shipTest2(100, 10)
// ship.firebullet(1,1) //returns a bullet with 1 speed and 1 damage

// Class Syntax
class Shiptest3 {
  constructor(HP, speed) {
    this.HP = HP;
    this.speed = speed;
  }

  firebullet(param1, param2){ 
    return bulletTest(param1, param2)
  }
  // call it like so:
  // ship.firebullet(param1, param2) 
}


/////Alien


//Factory Function

function alien(HP, coords, directs){
  /*HP is numeric, coordinates is an object of two values: X and Y, speeds is an object of two values: X and Y
  * Move updates direction based on speed
  * Onhit(bullet) deals damage to the alien
  coordinates will look like this {x:122, y:2333}
  */

  return {
    HP, // any time the key is the same as variable, you can use "HP," for syntactic sugar
    coordinates: coords, //{x,y}
    direction: directs,
    move: function(change_x, change_y) {  // a method is a function that is defined inside of class
      this.coordinates.x = this.coordinates.x + change_x;
      this.coordinates.y = this.coordinates.y + change_y;
    },
    onHit: function(bullet){
      this.HP = this.HP - bullet.damage;
    }  
  }
}
const = alien_person = alien (1000, {x:123, y:222}, {x_speed: 5, y_speed: 10});

/*call it like this:
alien_person = alien (1000, {x:123, y:222}, {x_speed: 5, y_speed: 10})
console.log(alien)
alien.move();
console.log(alien)
*/

function alien(HP, coordinates, direction){
  /*Same as above, but written with syntactic sugar
  */

  return {
    HP, // any time the key is the same as variable, you can use "HP," for syntactic sugar
    coordinates, //{x,y}
    direction,
    move: function(change_x, change_y) {  // a method is a function that is defined inside of class
      this.coordinates.x = this.coordinates.x + change_x; // using this is more explicit and makes sure we are refering to coordinates defined in the param
      this.coordinates.y = this.coordinates.y + change_y;
      // coordinates.x += direction.x;
      // coordinates.y += direction.y;
    },
    onHit: function(bullet){
      this.HP = this.HP - bullet.damage;
    }  
  }
}

////// Constructor Function

function AlienConstructor(HP, coordinates, direction){

    this.hp = hp;
    this.coordinates = coordinates;
    this.direction = direction;
    this.move = function () {  
      this.coordinates.x += this.direction.x; 
      this.coordinates.y += this.direction.y;
    };
    this onHit = function(bullet){
      this.HP -= bullet.damage;
    }  
  }

///// Class Syntax

class AlienClass {
  constructor(hp, coords, directions) {
    this.hp = hp;
    this.speeds = speeds;
  }

  move() {
    this.coords.x += this.direction.x;
    this.coords.y += this.speeds.y;
  }

  onHit(bullet) {
    this.hp -= bullet.damage;
  }
}



///// Barrier

/**
 * 
 * 
 * 
 *  
 * 
 */


//Factory Function
// Constructor Function
// Class Syntax

