function rand(number1, number2) { // функція рандома
    Math.floor(Math.random() * (number2 - number1 + 1) + number1); // метод генерації рандомного числа  
    return Math.floor(Math.random() * (number2 - number1 + 1) + number1);
};

export default class Person {
    constructor(name, role) {
        this.name = name;
        this.role = role;
        this.inventory = [];
        // this.history = history.get(this.role);

        switch (this.role) {
            case 'guard':
                this.maxHealth = rand(70, 100),
                    this.health = this.maxHealth,
                    this.strength = rand(5, 10),
                    this.intelligence = rand(3, 6),
                    this.gun = ['shoker', [5, 10]]
                break;

            case 'medic':
                this.maxHealth = rand(30, 50),
                    this.health = this.maxHealth,
                    this.strength = rand(3, 6),
                    this.intelligence = rand(7, 10),
                    this.gun = ['hand', [1, 5]]
                break;

            case 'worker':
                this.maxHealth = rand(50, 70),
                    this.health = this.maxHealth,
                    this.strength = rand(4, 6),
                    this.intelligence = rand(4, 6),
                    this.gun = ['hammer', [3, 7]]
                break;

            case 'prisoner':
                this.maxHealth = rand(60, 90),
                    this.health = this.maxHealth,
                    this.strength = rand(7, 10),
                    this.intelligence = rand(3, 5),
                    this.gun = ['hand', [1, 5]]
                break;

            default:
                break;
        }
    };

    person_damage() {
        let damage = rand(this.gun[1][0], this.gun[1][1]);

        if (rand(1, 7) == 1) {
            damage += Math.trunc((damage * this.strength) / 10);
        }

        return damage;
    }

    taken_damage(damage) {
        this.health = Number(this.health) - Number(damage);
    }

    health_heal(medicHeal) {
        this.health += medicHeal * this.intelligence;
    }

    improve_strength(value) {
        this.strength += value;
    }

    improve_intelligence(value) {
        this.intelligence += value;
    }

    change_gun(newGun) {
        this.gun = newGun;
    }

    add_to_inventory(item) {
        this.inventory.push(item);
    }

    remove_from_inventory(item) {
        this.inventory.remove(item);
    }
}