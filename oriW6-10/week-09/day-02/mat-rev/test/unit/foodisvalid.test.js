const { foodIsValid } = require('../../src/foodIsValid');
const { expect } = require('chai');

describe('foodIsValid', () => {
  it('should return true on valid food', () => {
    // Arrange
    let testFood = { name: 'test food', amount: 123 };

    // Act
    let result = foodIsValid(testFood);

    // Assert
    expect(result).to.be.true;
  })

  it('should return false if name is missing', () => {
    // Arrange
    let testFood = { amount: 123 };

    // Act
    let result = foodIsValid(testFood);

    // Assert
    expect(result).to.be.false;
  })

  it('should return false if amount is negative', () => {
    // Arrange
    let testFood = { name: 'test food', amount: -123 };

    // Act
    let result = foodIsValid(testFood);

    // Assert
    expect(result).to.be.false;
  })
})
