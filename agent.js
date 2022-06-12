class User {
  constructor (name) {
    this.name = name;
  };

  sayName () {
    return `my name is ${this.name}`;
  }
};

class Project {
  constructor (name) {
    this.name = name;
  };

  sayTheName () {
    return `the project name is ${this.name}`;
  }
};

module.exports = { User, Project };
