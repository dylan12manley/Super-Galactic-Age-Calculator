import { User } from './../src/User.js';

describe('User', () => {

  test('should determine user inputs a positive interger', () => {
    let user = new User(-10, 80);
    expect(user.inputChecker()).toEqual("How can you live in negative years?");
  });
  test('should determine user inputs are filled', () => {
    let userA = new User('', 80);
    expect(userA.inputChecker()).toEqual("You gotta enter an number for both inputs.");
  });
  test('determines how long user is expected to remain liveing', () => {
    let userB = new User(24, 80);
    expect(userB.getLifeLeft()).toEqual(56);
  });
  test('determines how long user is expected to live in Mercury year', () => {
    let userC = new User(24, 80, 56);
    expect(userC.getMercuryLife()).toEqual(100);
  });

});
// test('converts age to Mercury years', () => {
//   let userB = new User(24, 80, 0);
//   expect(userB.getMercuryAge()).toEqual(100);
// });
