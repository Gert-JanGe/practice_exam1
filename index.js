/* oef1
function testScope(){
    let hello = "Hallo iedereen!";
    console.log(hello);
}

testScope();

//buiten de functie te loggen geeft een error */

/* oef2
function testBlockScope(){
    for (let i =0; i <10; i++){
        const message = "Hallo allemaal!";
        console.log(message);
    } 
}

testBlockScope(); */

/* oef3
function createGreeter(naam){
    return function(){
        console.log("hallo, " + naam + "!")
    }
}

const greetPhil = createGreeter("Phil");
greetPhil(); */

/* class BankAccount {
    constructor(owner){
        this.owner = owner;
        this.balance = 0;
    }
}

DecompressionStream(amount){
    if(amount > 0){
        this.balance += amount;
        console.log(`${amount} gestort op de rekening van ${this.owner}.`);
        } else {
            console.log("Je kan niet in het rood gaan.")
    }
}
 */

// Functie om de geschatte leeftijd op te halen van de Agify API
/* async function guessAge(name) {
    try {
        const response = await fetch(`https://api.agify.io?name=${name}`);
        const data = await response.json();
        return data.age;
    } catch (error) {
        console.error("Error fetching the data:", error);
    }
}

// Functie om guessAge aan te roepen en het resultaat te loggen
async function whatsMyAge(name) {
    const age = await guessAge(name);
    if (age) {
        console.log(`The estimated age for ${name} is ${age}`);
    }
}

// Testen met een voorbeeldnaam
whatsMyAge("John");
 */

/* async function guessAge(name) {
    try {
        const response = await fetch(`https://api.agify.io?name=${name}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.age;
    } catch (error) {
        console.error("Error fetching the data:", error);
    }
}

async function whatsMyAge(name) {
    const age = await guessAge(name);
    if (age) {
        console.log(`The estimated age for ${name} is ${age}`);
    } else {
        console.log(`Could not fetch the age for ${name}`);
    }
}

// Testen met een foutieve URL om de error handling te testen
whatsMyAge("John");
 */

/* async function whatsMyAge(name1, name2) {
    const age1 = await guessAge(name1);
    const age2 = await guessAge(name2);
    console.log(`${name1}'s estimated age is ${age1}`);
    console.log(`${name2}'s estimated age is ${age2}`);
}

// Testen met twee namen
whatsMyAge("John", "Mary");

async function whatsMyAge(name1, name2) {
    try {
        const [age1, age2] = await Promise.all([guessAge(name1), guessAge(name2)]);
        console.log(`${name1}'s estimated age is ${age1}`);
        console.log(`${name2}'s estimated age is ${age2}`);
    } catch (error) {
        console.error("Error fetching ages:", error);
    }
}

// Testen met twee namen
whatsMyAge("John", "Mary");
 */