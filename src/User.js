export class User {
  constructor(age, lifeExpetency, lifeLeft, mercuryAge, mercuryLife, venusAge, venusLife, marsAge, marsLife) {
    this.age = age,
    this.lifeExpetency = lifeExpetency,
    this.lifeLeft = lifeLeft,
    this.mercuryAge = mercuryAge,
    this.mercuryLife = mercuryLife,
    this.venusAge = venusAge,
    this.venusLife = venusLife,
    this.marsAge = marsAge,
    this.marsLife = marsLife
  };
  inputChecker() {
      if ((this.age === '') || (this.lifeExpetency === '')) {
      return "You gotta enter an number for both inputs.";
    }
      else if ((this.age < 1) || (this.lifeExpetency < 1)) {
      return "How can you live in negative years?";
    }
  }
  getLifeLeft() {
    let lifeLeft = (this.lifeExpetency-this.age)
    this.lifeLeft = lifeLeft
    return this.lifeLeft
  }
  getMercuryAge() {
    let mercuryAge = (this.age/0.24);
    this.mercuryAge = mercuryAge;
    return this.mercuryAge
  }
  getMercuryLife() {
    console.log(this.lifeLeft);
    let mercuryLife = (this.lifeLeft/0.24);
    this.mercuryLife = mercuryLife;
    return this.mercuryLife
  }
};
