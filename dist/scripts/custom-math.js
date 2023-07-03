// custom-math.js
import { create, all } from 'mathjs';

const {
  add, subtract, multiply, divide, sin, cos, tan, asin, acos, atan,
  pi, pow, sqrt, nthRoot, log, round, abs, evaluate
} = all;

const config = { add, subtract, multiply, divide, sin, cos, tan, asin, acos, atan,
  pi, pow, sqrt, nthRoot, log, round, abs };

const customMath = create(all, config);

export default customMath;
