import { NoZeroesPipe } from './no-zeroes.pipe';

describe('NoZeroesPipe', () => {
  let pipe: NoZeroesPipe;
  beforeAll(() => {
    pipe = new NoZeroesPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filters 0', () => {
    const result = pipe.transform(0);

    expect(result).toEqual(null);
  });

  it('does not filter non 0', () => {
    const result = pipe.transform(7);

    expect(result).toEqual(7);
  })
});
