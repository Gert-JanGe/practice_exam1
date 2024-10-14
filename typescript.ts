/* // Functie om Celsius naar Fahrenheit om te zetten
function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9) / 5 + 32;
}

// Functie om Fahrenheit naar Celsius om te zetten
function fahrenheitToCelsius(fahrenheit: number): number {
    return ((fahrenheit - 32) * 5) / 9;
}

// Functie om de gemiddelde temperatuur te berekenen
function calculateAverageTemperature(temperatures: number[]): number {
    let total = 0;
    for (let temp of temperatures) {
        total += temp;
    }
    return total / temperatures.length;
}

// Testcode
const temps: number[] = [20, 25, 30, 22, 18];
console.log(`Gemiddelde temperatuur: ${calculateAverageTemperature(temps)}°C`);
console.log(`25°C in Fahrenheit: ${celsiusToFahrenheit(25)}°F`);
console.log(`77°F in Celsius: ${fahrenheitToCelsius(77)}°C`); */


/* // Gebruiker interface voor type safety
interface User {
    username: string;
    email: string;
    age: number;
    isAdmin: boolean;
}

// Voorbeeld gebruiker object
const user: User = {
    username: "johnDoe",
    email: "john@example.com",
    age: 25,
    isAdmin: false,
};

// Functie om een nieuwe gebruiker aan te maken
function createUser(username: string, email: string, age: number): User {
    return {
        username,
        email,
        age,
        isAdmin: false, // Default waarde
    };
}

// Functie om te controleren of de gebruiker een admin is
function isAdmin(user: User): string {
    return user.isAdmin ? `${user.username} is een admin.` : `${user.username} is geen admin.`;
}

// Testcode
const newUser: User = createUser("janeDoe", "jane@example.com", 22);
console.log(isAdmin(newUser)); */

/* // Product interface voor type safety
interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

// Voorbeeld product object
const product: Product = {
    id: 1,
    name: "Laptop",
    price: 1200,
    quantity: 1
};

// Functie om producten aan de winkelwagen toe te voegen
function addToCart(cart: Product[], product: Product): Product[] {
    cart.push(product);
    return cart;
}

// Functie om de totale prijs van de winkelwagen te berekenen
function calculateTotal(cart: Product[]): number {
    let total = 0;
    for (let item of cart) {
        total += item.price * item.quantity;
    }
    return total;
}

// Testcode
const cart: Product[] = [];
addToCart(cart, product);
console.log(`Totale prijs: €${calculateTotal(cart)}`); */



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
