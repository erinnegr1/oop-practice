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
    this speed = speed;
  }

  firebullet(param1, param2){ // ship.firebullet(param1, param2) 
    return bulletTest(param1, param2)
    
  }
}


/////Alien

//Factory Function
// Constructor Function
// Class Syntax

///// Barrier

//Factory Function
// Constructor Function
// Class Syntax

