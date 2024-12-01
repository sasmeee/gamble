import { gamble } from "../src/index";

const points = 100;

// Gamble with default risk level (balanced)
const resultDefault = gamble(points);
console.log(`Result:`, resultDefault);

// Gamble with high risk
const resultHigh = gamble(points, "high");
console.log(`Result:`, resultHigh);

// Gamble with balanced risk
const resultBalanced = gamble(points, "balanced");
console.log(`Result:`, resultBalanced);

// Gamble with low risk
const resultLow = gamble(points, "low");
console.log(`Result:`, resultLow);
