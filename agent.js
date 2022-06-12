function coinToss () {
  return Math.random() > 0.5;
};

class User {
  constructor (name, type) {
    this.name = name;
    this.type = type;
  };

  sayName () {
    return `my name is ${this.name}`;
  }
};

class Project {
  constructor (name, type) {
    this.name = name;
    this.type = type;
  };

  sayTheName () {
    return `the project name is ${this.name}`;
  }
};

module.exports = { coinToss, User, Project };
