# @sasmeee/gamble

A simple gamble system built with Node.js and TypeScript. This package allows you to place bets with varying risk levels: high, balanced, and low.

[![npm version](https://img.shields.io/npm/v/@sasmeee/gamble.svg)](https://www.npmjs.com/package/@sasmeee/gamble)
[![downloads](https://img.shields.io/npm/dt/@sasmeee/gamble.svg)](https://www.npmjs.com/package/@sasmeee/gamble)

## Installation

To install the package, run:

```bash
npm install @sasmeee/gamble
```

## Usage

### Default Usage

Use the `gamble` function with default settings (balanced risk level).

```ts
import { gamble } from "@sasmeee/gamble";

const points = 100;

const resultDefault = gamble(points);
console.log(`Result:`, resultDefault);
```

### Advanced Usage

Specify a risk level: `"high"`, `"balanced"`, or `"low"`.

```ts
import { gamble } from "@sasmeee/gamble";

const points = 100;

// Gamble with high risk
const resultHigh = gamble(points, "high");
console.log(`Result:`, resultHigh);

// Gamble with balanced risk
const resultBalanced = gamble(points, "balanced");
console.log(`Result:`, resultBalanced);

// Gamble with low risk
const resultLow = gamble(points, "low");
console.log(`Result:`, resultLow);
```

### Parameters

- **points** (required):  
  The number of points you are betting. This should be a positive number.

- **riskLevel** (optional):  
  The level of risk you wish to take. The available options are:

  - `"high"`: Higher potential rewards, but comes with a higher risk.

  - `"balanced"` (default): A moderate approach with balanced rewards and risks.
  - `"low"`: Lower potential rewards, but with minimized risk.

  If no `riskLevel` is provided, the default value is `"balanced"`.

## Output

The gamble function returns an object with the following structure:

```ts
Result: {
  newPoints: 100,
  status: 'no gain'
}
```

### Explanation of Fields:

- **newPoints**:  
  The updated number of points after the gamble.

  - `0`: Indicates a loss.

  - Same as input: Indicates no gain or loss.
  - Greater than input: Indicates a win (e.g., doubled or tripled points).

- **status**:  
  Describes the outcome of the gamble. Possible values are:

  - `"loss"`: All points were lost.
  
  - `"no gain"`: No change in points.
  - `"double"`: Points were doubled.
  - `"triple"`: Points were tripled.
  - `"invalid points"`: The input points were invalid.
  - `"invalid risk level"`: The risk level provided was invalid.

## Error Handling

The `gamble` function validates inputs:

- Invalid points (non-numeric or `<= 0`):  
  Returns `{ newPoints: 0, status: "invalid points" }`

- Invalid risk level:  
  Returns `{ newPoints: 0, status: "invalid risk level" }`

## Disclaimer

If you have any complaints or issues with this package, please contact me at [sl.travamaker@gmail.com](mailto:sl.travamaker@gmail.com).
