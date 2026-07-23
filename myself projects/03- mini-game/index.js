

class OldCharacter {
    constructor(name, hp, mana) {
        this.name = name;
        this.hp = hp;
        this.mana = mana;
    }

    takeDamage(damage) {
        this.hp = Math.max(0, this.hp - damage);
        return this.hp;
    }

    getInfo() {
        return `Имя: ${this.name}, HP: ${this.hp}, Мана: ${this.mana}`;
    }
}

class Mage extends OldCharacter {
    constructor(name, hp, mana, spellPower) {
        super(name, hp, mana); 
        this.spellPower = spellPower;
    }

    castSpell(target) {
        console.log(`${this.name} колдует на ${this.spellPower} урона!`);
        target.takeDamage(this.spellPower);
     
        updateUI();
    }
}

class Warrior extends OldCharacter {
    constructor(name, hp, mana, rage) {
        super(name, hp, mana);
        this.rage = rage;
    }

    heavyAttack(target) {
        const damage = this.rage * 2;
        console.log(`Воин ${this.name} наносит мощный удар на ${damage} урона!`);
        target.takeDamage(damage);
        
        updateUI();
        
        addLog(`Воин ${this.name} нанёс ${damage} урона Магу!`);
    }
}


const warrior = new Warrior('Конан', 100, 50, 30);
const mage = new Mage('Гендальф', 150, 200, 50);



function updateUI() {
    
    const warriorHpPercent = (warrior.hp / 100) * 100; 
    document.getElementById('warrior-hp-fill').style.width = warriorHpPercent + '%';
    document.getElementById('warrior-hp-text').textContent = `HP: ${warrior.hp} / 100`;

    
    const mageHpPercent = (mage.hp / 150) * 100; 
    document.getElementById('mage-hp-fill').style.width = mageHpPercent + '%';
    document.getElementById('mage-hp-text').textContent = `HP: ${mage.hp} / 150`;
}

function addLog(message) {
    const logElement = document.getElementById('log-message');
    logElement.textContent = message;
}


document.getElementById('attack-btn').addEventListener('click', function() {
   
    warrior.heavyAttack(mage);

  
    if (mage.hp <= 0) {
        addLog('💀 Маг Гендальф повержен! Воин победил!');
        document.getElementById('attack-btn').disabled = true; 
    } else {
      
        mage.castSpell(warrior);
        if (warrior.hp <= 0) {
            addLog('💀 Воин Конан повержен! Маг победил!');
            document.getElementById('attack-btn').disabled = true;
        }
    }
});


updateUI();
addLog('Битва началась! Нажми "Атаковать Мага"!');