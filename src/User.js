export class User {
  constructor(age, lifeExpetency) {
    this.age = age,
    this.lifeExpetency = lifeExpetency
  };
  intergerCheck() {
    if ((this.age < 1) || (this.lifeExpetency < 1)) {
      return "How can you live in negative years?";
    }
  }
};
