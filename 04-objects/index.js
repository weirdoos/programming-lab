
const pringles = "cheeese";

const student = {
  name: pringles,
  age: 19,
  course: 1,
  active: true,
  address: {
    country: "Italy",
    city: "Rome"
  },

  grades: [8, 10, 7]
};

const selectedProperty = "city"


student.course = 2;
student.city = 'Rome';
student.active = false;
delete student.age;

student.address.city = 'Padua';
student.grades.push(9);


const auto = {
    mark:"Ford",
    model:"Mustang",
    year:2026,
    color:"red",
    km:1,
    engine:6.0,
    trans:"7-step",
};







const player = {
    name:"ork",

    hp:100,

    mana:100,

    level:1,

    gold:0,

    showStats(){
        console.log(this.hp, this.mana, this.level, this.gold)
    },

    takeDamage(damage){
        this.hp -= damage;
        if(this.hp < damage){
            this.hp = 0;
        }
        
        return this.hp;
    },

    heal(heal){
        this.hp + heal;
    },

    addGold(goldReached){
        this.gold + goldReached;
    },

    levelUp(levelReached){
        this.level + levelReached;
    }

}

function deathChecker(){
    if(player.hp === 0){
        death()
    }
};



class Character {
    constructor(name, hp, ) {
        this.name = name;
        this.hp = hp;
    }
        
    takeDamage (damage){
            this.hp = Math.max(0, this.hp - damage);
        
    }
}

const ork = new Character('ork', 1000, 150,);
const ork2 = new Character('ork2', 1000, 150,);
ork.takeDamage(20);


function OldCharacter(name, hp, mana){
    this.name = name;
    this.hp = hp;
    this.mana = mana;
}

    OldCharacter.prototype.takeDamage = function(damage) {
        this.hp = Math.max(0, this.hp - damage)
        return this.hp
        
    };

    OldCharacter.prototype.getInfo = function() {
        return `Имя: ${this.name}, HP: ${this.hp}, Мана: ${this.mana}`;
        
    }


    function Mage (name, hp, mana , spellPower){
        OldCharacter.call(this, name, hp, mana)
        this.spellPower = spellPower;
    }

    
    Mage.prototype = Object.create(OldCharacter.prototype)
    Mage.prototype.constructor = Mage

    const gendalf = new Mage('gendalf', 100, 100, 50)
    console.log(gendalf.getInfo())


    function Warrior(name, hp, mana, rage){
        OldCharacter.call(this, name, hp, mana)
        this.rage = rage;
    }
        Warrior.prototype = Object.create(OldCharacter.prototype)
        Warrior.prototype.constructor = Warrior

    Warrior.prototype.heavyAttack = function(target) {
            console.log(`"Воин ${this.name} наносит мощный удар на ${this.rage * 2} урона!"`)
            target.takeDamage(this.rage * 2)
        }

    
    const conan = new Warrior('conan', 200, 50, 30)
 

    console.log('=== ДО БИТВЫ ===');
    console.log(gendalf.getInfo());
    console.log(conan.getInfo());

    console.log('=== БИТВА ===');
    conan.heavyAttack(gendalf); // Конан бьет Гендальфа

    console.log('=== ПОСЛЕ БИТВЫ ===');
    console.log(gendalf.getInfo()); // Гендальф должен потерять 60 HP (30 * 2)