import React from 'react';
import {calculate} from './Calculator';

describe('calculate', () => {

  it('should work with 1 number', () => {
    expect(calculate('20')).toBe(20);
  });

  it('should work with 2 numbers', () => {
    expect(calculate('1,5')).toBe(6);
  });

  it('should treat numbers greater than 1000 as invalid', () => {
    expect(calculate('2,1001,6')).toBe(8);
  });

  it('should work with more than 2 numbers', () => {
    expect(calculate('1,2,3,4,5,6,7,8,9,10,11,12')).toBe(78);
  });

  it('should throw an error with negative numbers, including the offending numbers', () => {
    let message = "";
    try {
      calculate('4,-3,5,-2');
    } catch (e) {
      message = e.message;
    }
    expect(message).toContain("[-3,-2]");
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

  it('should support a custom delimeter of a single character', () => {
    expect(calculate("//#\n2#5")).toBe(7);
    expect(calculate("//,\n2,ff,100")).toBe(102);
  });

  it('should support a custom delimeter of any length', () => {
    expect(calculate("//[***]\n11***22***33")).toBe(66);
  });

  it('should support multiple custom delimeters of any length', () => {
    expect(calculate("//[*][!!][r9r]\n11r9r22*hh*33!!44")).toBe(110);
  });
});
