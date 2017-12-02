import { sum } from './sum';

describe('sum', () => {
  test('it sums things', () => {
    expect(sum(5, 3)).toEqual(8);
  });
});
