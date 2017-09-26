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
  })

  it('should format the number 1045.37 to R$1045,37', () => {
    const pipe = new PricePipe();
    const expected = 'R$1.045,37';
    const output = pipe.transform(1045.37);
    expect(output).toBe(expected);
  });

  it('should format with custom Currency', () => {
    const pipe = new PricePipe();
    const expected = 'US$25,00';
    const output = pipe.transform(25, {
      currency: 'US$'
    });
    expect(output).toBe(expected);
  });

  it('should format with inverted points', () => {
    const pipe = new PricePipe();
    const expected = 'US$2,500.00';
    const output = pipe.transform(2500, {
      currency: 'US$',
      point: '.',
      thousand: ','
    });
    expect(output).toBe(expected);
  });

  it('sould format to a clean number', () => {
    const pipe = new PricePipe();
    const expected = '1387';
    const output = pipe.transform(1387, {
      currency: '',
      point: '',
      thousand: '',
      decimal: 0
    });
    expect(output).toBe(expected);
  });
});
