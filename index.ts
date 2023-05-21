// Import stylesheets
import { nor } from './person';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
console.log('yes');

interface Person {
  id: number;
  name: string;
}

interface Address {
  personId: number;
  city: string;
}

const people: Person[] = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];

const addresses: Address[] = [
  { personId: 1, city: "New York" },
  { personId: 2, city: "Los Angeles" },
  { personId: 3, city: "Chicago" },
];

const n = new nor();
// Perform join operation on the arrays
const result = people.map(person => ({
  ...person,
  address: addresses.find(address => address.personId === person.id)?.city,
}));

n.main();

console.log(result);
