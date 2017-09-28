import { PricePipe } from './price.pipe';

describe('PricePipe', () => {
  it('create an instance', () => {
    const pipe = new PricePipe();
    expect(pipe).toBeTruthy();
  });

  it('should format the number 10 to R$10,00', () => {
    const pipe = new PricePipe();
    const expected = 'R$10,00';
    const output = pipe.transform(10);
    expect(output).toBe(expected);
  });
});
