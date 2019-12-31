import React from 'react';
import {calculate} from './Calculator';

describe('calculate', () => {

  it('should throw an error when more than 2 numbers are provided', () => {
    let message = "";
    try {
      calculate('1,2,3');
    } catch (e) {
      message = e.message;
    }
    expect(message).toBe("Max of 2 numbers exceeded");
  });

  it('should work with 1 number', () => {
    expect(calculate('20')).toBe(20);
  });

  it('should work with 2 numbers', () => {
    expect(calculate('1,5000')).toBe(5001);
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



});
