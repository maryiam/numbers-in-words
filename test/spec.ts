import { numbersToWords } from '../src/index';
import * as chai from 'chai';

const expect = chai.expect;
describe('numbers to words function', () => {

  it('should return 1', () => {
    expect(numbersToWords(1)).to.equal(1);
  });
});
