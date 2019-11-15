export class User {
  constructor(age, lifeExpetency, lifeLeft, mercuryAge, mercuryLife, venusAge, venusLife, marsAge, marsLife) {
    this.age = age,
    this.lifeExpetency = lifeExpetency,
    this.lifeLeft = 0,
    this.mercuryAge = 0,
    this.mercuryLife = 0,
    this.venusAge = 0,
    this.venusLife = 0,
    this.marsAge = 0,
    this.marsLife = 0
  };
  intergerCheck() {
    if ((this.age < 1) || (this.lifeExpetency < 1)) {
      return "How can you live in negative years?";
    }
  }
  inputCheck() {
    if ((this.age === '') || (this.lifeExpetency === '')) {
      return "You gotta enter an number for both inputs.";
    }
  }
  getMercuryAge() {
    let mercuryAge = (this.age/0.24);
    this.mercuryAge = mercuryAge;
    return this.mercuryAge
  }
  // getMercuryAge() {
  //   let mercuryLife = ((this.lifeExpetency-this.age)/0.24));
  //   this.mercuryLife = mercuryLife;
  //   return this.mercuryLife
  // }
};
