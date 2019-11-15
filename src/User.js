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
    let mercuryLife = (this.lifeLeft/0.24);
    this.mercuryLife = mercuryLife;
    if (this.mercuryLife > 0) {
      return this.mercuryLife
    } else {
      let mercuryLifeBonus = (mercuryLife*(-1))
      this.mercuryLife = `You should have died ${mercuryLifeBonus} Mercury years ago`
      return this.mercuryLife
    }
  }
  getVenusAge() {
    let venusAge = (this.age/0.62);
    this.venusAge = venusAge;
    return this.venusAge
  }
  getVenusLife() {
    let venusLife = (this.lifeLeft/0.62);
    this.venusLife = venusLife;
    if (this.venusLife > 0) {
      return this.venusLife
    } else {
      let venusLifeBonus = (venusLife*(-1))
      this.venusLife = `You should have died ${venusLifeBonus} Venus years ago`
      console.log(this);
      return this.venusLife
    }
  }
  getMarsAge() {
    let marsAge = (this.age/1.88);
    this.marsAge = marsAge;
    return this.marsAge
  }
  getMarsLife() {
    let marsLife = (this.lifeLeft/1.88);
    this.marsLife = marsLife;
    return this.marsLife
  }
  getJuipterAge() {
    let juipterAge = (this.age/11.86);
    this.juipterAge = juipterAge;
    return this.juipterAge
  }
  getJuipterLife() {
    let juipterLife = (this.lifeLeft/11.86);
    this.juipterLife = juipterLife;
    return this.juipterLife
  }
};
