import React from 'react';
import {calculate} from './Calculator';

describe('calculate', () => {

  it('should work with 1 number', () => {
    expect(calculate('20')).toBe(20);
  });

  it('should work with 2 numbers', () => {
    expect(calculate('1,5000')).toBe(5001);
  });

  it('should work with more than 2 numbers', () => {
    expect(calculate('1,2,3,4,5,6,7,8,9,10,11,12')).toBe(78);
  });

  it('should work with negative numbers', () => {
    expect(calculate('4,-3')).toBe(1);
  });

  it('should treat empty numbers as 0', () => {
    expect(calculate(',3')).toBe(3);
  });

  it('should treat invalid numbers as 0', () => {
    expect(calculate('5,tytyt')).toBe(5);
  });

  it('should handle unix newlines as a delimeter too', () => {
    expect(calculate('1\n2,3')).toBe(6);
  });

  it('should handle windows newlines as a delimeter too', () => {
    expect(calculate('1\r\n2,3')).toBe(6);
  });

});
