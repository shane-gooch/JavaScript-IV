/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
//ES%

// function Date() {
//   return `May 8th. 2019`;
// }

// function GameObject(game) {
//     this.createdAt = game.createdAt;
//     this.name = game.name;
//     this.dimensions = game.dimensions;
//   }

//ES6
class GameObject {
    constructor(game) {
        this.createdAt = game.createdAt;
        this.name = game.name;
        this.dimensions = game.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game`;
    }
}

// class GameObject {
//     constructor(createdAt, name, dimensions) {
//         this.createdAt = createdAt;
//         this.name = name;
//         this.dimensions = dimensions;
//     }
//     destroy() {
//         return `${this.name} was removed from the game`;
//     }
// }


//ES5
//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game`;
//   }
  
//   function CharacterStats(stats) {
//     GameObject.call(this, stats);
//     this.healthPoints = stats.healthPoints;
//   }
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`;
//   }

//ES6

class CharacterStats extends GameObject {
    constructor(points) {
        super(points)
        this.healthPoints = points.healthPoints
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}


// class CharacterStats extends GameObject {
//     constructor(healthPoints) {
//         super(healthPoints)
//         this.healthPoints = healthPoints
//     }
//     takeDamage() {
//         return `${this.name} took damage.`;
//     }
// }
  
  
// ES5 
//   function Humanoid (hum) {
//     CharacterStats.call(this, hum);
//     this.team = hum.team;
//     this.weapons = hum.weapons;
//     this.language = hum.language;
//   }
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}`;
//   }
  
//ES6
  class Humanoid extends CharacterStats {
      constructor(items) {
          super(items);
          this.team = items.team;
          this.weapons = items.weapons;
          this.language = items.language;
      }
      greet() {
          return `${this.name} offers a greeting in ${this.language}`;
      }
  }

//   class Humanoid extends CharacterStats {
//     constructor(team, weapons, language) {
//         super(team, weapons, language);
//         this.team = team;
//         this.weapons = weapons;
//         this.language = language;
//     }
//     greet() {
//         return `${this.name} offers a greeting in ${this.language}`;
//     }
// }
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.