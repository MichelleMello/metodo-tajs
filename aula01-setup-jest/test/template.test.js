/* File with a simple sum method to be able to test how the code responds. Made with GitHub Copilot. */

import {} from '@jest/globals';

function sum(a, b) {
  return a + b;
}   

it ('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});
