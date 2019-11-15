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
  test('converts age to Mercury years', () => {
    let userB = new User(24, 80, 56);
    expect(userB.getMercuryAge()).toEqual(100);
  });
  test('determines how long user is expected to live in Mercury years', () => {
    let userC = new User(24, 80, 56, 100);
    expect(userC.getMercuryLife()).toEqual(233.33333333333334);
  });
  test('determines if the user has lived past their life expectancy on Mercury', () => {
    let userC = new User(90, 100, -10, 375, -41.66666666666667)
    expect(userC.getMercuryLife()).toEqual('You should have died 41.66666666666667 Mercury years ago')
  })
  test('converts age to Venus years', () => {
    let userD = new User(24, 80, 56, 100, 233.33333333333334);
    expect(userD.getVenusAge()).toEqual(38.70967741935484);
  });
  test('determines how long user is expected to live in Venus years', () => {
    let userE = new User(24, 80, 56, 100, 233.33333333333334, 38.70967741935484);
    expect(userE.getVenusLife()).toEqual(90.3225806451613);
  });
  test('determines if the user has lived past their life expectancy in Venus years', () => {
    let userE = new User(90, 80, -10, 375, 'You should have died 41.66666666666667 Mercury years ago', 145.161290323);
    expect(userE.getVenusLife()).toEqual('You should have died 16.129032258064516 Venus years ago');
  });
  test('converts age to mars years', () => {
    let userF = new User(24, 80, 56, 100, 233.33333333333334, 38.70967741935484, 90.3225806451613);
    expect(userF.getMarsAge()).toEqual(12.765957446808512);
  });
  test('determines how long user is expected to live in Mars years', () => {
    let userE = new User(90, 80, -10, 375, 'You should have died 41.66666666666667 Mercury years ago', 145.161290323, 'You should have died 16.129032258064516 Venus years ago', 47.8723404255);
    expect(userE.getMarsLife()).toEqual('You should have died 5.319148936170213 Mars years ago');
  });
  test('converts age to Jupiter years', () => {
    let userF = new User(24, 80, 56, 100, 233.33333333333334, 38.70967741935484, 90.3225806451613, 12.765957446808512, 29.787234042553195);
    expect(userF.getJuipterAge()).toEqual(2.0236087689713322);
  });
  test('determines how long user is expected to live in Juipter years', () => {
    let userE = new User(24, 80, 56, 100, 233.33333333333334, 38.70967741935484, 90.3225806451613, 12.765957446808512, 29.787234042553195, 2.0236087689713322);
    expect(userE.getJuipterLife()).toEqual(4.7217537942664425);
  });
  test('determines how long the user has live past expentency in Juipter years', () => {
    let userE = new User(90, 80, -10, 375, 'You should have died 41.66666666666667 Mercury years ago', 145.161290323, 'You should have died 16.129032258064516 Venus years ago', 47.8723404255, 'You should have died 5.319148936170213 Mars years ago', 7.58853288364);
    expect(userE.getJuipterLife()).toEqual(4.7217537942664425);
  });

});
