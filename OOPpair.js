//Factory Function
// Constructor Function
// Class Syntax

/////Bullet
// Factory Function

function bulletTest (1700mph, high) { // do i need quotes here?)
 let newObj = {};
 newObj.speed = 1700mph;
 newObj.damage = high;
 return newObj;
}

// Constructor Function

function bulletTest2(1700mph,high){
 let this = {};
 this.speed = 1700mph;
 this.damage = high;
 return this;
}

// Class Syntax

class bulletTest3 {
  constructor(1700mph, high) {
    let this = {};
    this.speed = 1700mph;
    this.damage = high;
  }
}

////Ship

//Factory Function - is this meant to be a nested object?

function shipTest1(HP, Speed) {
    return {
        HP : HP,
        Speed : Speed,
        getDetails: function bulletTest() {
            return ${this.speed}, ${this.damage}
        }
    }
}


// Constructor Function

function shipTest2()
// Class Syntax


/////Alien

//Factory Function
// Constructor Function
// Class Syntax

///// Barrier

//Factory Function
// Constructor Function
// Class Syntax

