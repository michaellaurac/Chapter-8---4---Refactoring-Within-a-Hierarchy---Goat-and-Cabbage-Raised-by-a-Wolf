function coinToss () {
  return Math.random() > 0.5;
};

class Agent {
  constructor (name, type) {
    this.name = "name";
    if (coinToss()) {
      this.type = "user";
    } else {
      this.type = "project";
    }
  };

  static makeProjectOrUser (agent) {
    if (agent.type === "user") {
      return Object.assign(Object.create(new User()), agent);
    } else {
      return Object.assign(Object.create(new Project()), agent);
    }
  };
};

class User extends Agent {
  sayName () {
    return `my name is ${this.name}`;
  }
};

class Project extends Agent {
  sayTheName () {
    return `the project name is ${this.name}`;
  }
};

module.exports = Agent;
