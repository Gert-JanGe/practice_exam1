/* // Voorbeeld JS code om te converteren naar TypeScript
function add(a, b) {
    return a + b;
}

// Geconverteerde TypeScript code met types toegevoegd
function add(a: number, b: number): number {
    return a + b;
} */


/* // Originele functie in JavaScript
function createUser(name, age) {
    const isAdmin = false;
    return { name, age, isAdmin };
}

// Geconverteerde TypeScript functie met een overschrijfbare default parameter
function createUser(name: string, age: number, isAdmin: boolean = false): { name: string, age: number, isAdmin: boolean } {
    return { name, age, isAdmin };
}

// Test
const user1 = createUser('Alice', 25); // isAdmin is default false
const user2 = createUser('Bob', 30, true); // isAdmin is true */

/* // Voorbeeld JavaScript code
function greet(name) {
    return `Hello, ${name}`;
}

// TypeScript met types
function greet(name: string): string {
    return `Hello, ${name}`;
} */

/* // Enum voor richting
enum Direction {
    North,
    East,
    South,
    West
}

// Functie om te bewegen afhankelijk van de richting
function move(direction: Direction): void {
    switch (direction) {
        case Direction.North:
            console.log("Moving North");
            break;
        case Direction.East:
            console.log("Moving East");
            break;
        case Direction.South:
            console.log("Moving South");
            break;
        case Direction.West:
            console.log("Moving West");
            break;
        default:
            console.log("Unknown direction");
    }
}

// Test
move(Direction.North); // Output: "Moving North" */

/* // Enum voor rassen
enum Race {
    Elf,
    Orc,
    Dwarf
}

// Interface voor een FantasyCharacter
interface FantasyCharacter {
    name: string;
    race: Race;
    hitPoints: number;
}

// Functie om gemiddelde hitPoints te berekenen
function calculateAverageHitPoints(characters: FantasyCharacter[]): number {
    const totalHitPoints = characters.reduce((acc, character) => acc + character.hitPoints, 0);
    return totalHitPoints / characters.length;
} */

/* // Enum voor rassen
enum Race {
    Elf,
    Orc,
    Dwarf
}

// Interface voor een FantasyCharacter
interface FantasyCharacter {
    name: string;
    race: Race;
    hitPoints: number;
}

// Functie om gemiddelde hitPoints te berekenen
function calculateAverageHitPoints(characters: FantasyCharacter[]): number {
    const totalHitPoints = characters.reduce((acc, character) => acc + character.hitPoints, 0);
    return totalHitPoints / characters.length;
}

// Enum voor wapens
enum Weapon {
    Sword,
    Bow,
    Axe,
    MagicStaff
}

// Interface voor een Human
interface Human {
    name: string;
    weapon: Weapon;
}

// Een Character kan zowel een FantasyCharacter als een Human zijn
type Character = FantasyCharacter | Human;

function calculateAverageHitPoints(characters: Character[]): number {
    const fantasyCharacters = characters.filter((character): character is FantasyCharacter => 'hitPoints' in character);
    const totalHitPoints = fantasyCharacters.reduce((acc, character) => acc + character.hitPoints, 0);
    return fantasyCharacters.length > 0 ? totalHitPoints / fantasyCharacters.length : 0;
}

function humansWithWeapon(humans: Human[], weapon: Weapon): Human[] {
    return humans.filter(human => human.weapon === weapon);
}

// Test
const human1: Human = { name: 'John', weapon: Weapon.Sword };
const human2: Human = { name: 'Jane', weapon: Weapon.Bow };
const filteredHumans = humansWithWeapon([human1, human2], Weapon.Sword);
console.log(filteredHumans); // Output: [{ name: 'John', weapon: Weapon.Sword }] */
